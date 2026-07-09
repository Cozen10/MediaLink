import { spawn } from "node:child_process";
import path from "node:path";
import fs from "fs";
import readline from "node:readline";
import EventEmitter from "node:events";
const osMap = {
    win32: "../native/windows/64x/MediaLink.Native.exe",
    darwin: "undefined",
    linux: "../native/linux/MediaLink.Native",
    aix: "undefined",
    openbsd: "undefined",
    freebsd: "undefined",
    sunos: "undefined",
};
/**
 * Provides access to the operating system's active media session.
 *
 * The Media class starts a native helper process that continuously monitors
 * the currently playing media and emits updates whenever the media session
 * changes.
 *
 * @example
 * ```ts
 * import { Media } from "medialink";
 *
 * const media = new Media(process.platform);
 *
 * media.on("update", (data) => {
 *     console.log(data.title);
 * });
 *
 * await media.start();
 * ```
 */
export default class Media extends EventEmitter {
    os;
    child = null;
    rl = null;
    constructor(os) {
        super();
        this.os = os;
    }
    /**
     * Starts the native media monitoring process.
     *
     * Once started, the Media instance will continuously monitor the active
     * system media session and emit an `"update"` event whenever the media
     * information changes.
     *
     * Calling this method multiple times has no effect if the monitor is
     * already running.
     *
     * @returns A promise that resolves once the native helper has started.
     */
    async start() {
        const exePath = path.resolve(import.meta.dirname, osMap[this.os] ?? "undefined");
        if (!fs.existsSync(exePath))
            throw new Error(`Unsupported OS: ${this.os}.`);
        this.child = spawn(exePath);
        this.rl = readline.createInterface({
            input: this.child.stdout
        });
        this.rl.on("line", (line) => {
            const data = JSON.parse(line);
            this.emit("update", data);
        });
        this.child.stderr.on("data", (chunk) => {
            const errorMessage = chunk.toString("utf8");
            this.emit("error", errorMessage);
            console.error(errorMessage);
        });
        this.child.on("close", () => {
            this.rl?.close();
            this.child = null;
            this.rl = null;
        });
    }
    /**
     * Stops the native media monitoring process.
     *
     * This terminates the underlying native helper and stops all future
     * `"update"` events from being emitted. The Media instance can be started
     * again later by calling {@link start}.
     *
     * @returns A promise that resolves once the native helper has been stopped.
     */
    stop() {
        if (!this.child)
            return console.warn("Process not started!");
        this.child.kill();
        this.rl?.close();
        this.child = null;
        this.rl = null;
    }
}
//# sourceMappingURL=media.js.map