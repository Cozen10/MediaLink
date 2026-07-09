import { type ChildProcessWithoutNullStreams } from "node:child_process";
import readline from "node:readline";
import EventEmitter from "node:events";
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
    os: string;
    child: ChildProcessWithoutNullStreams | null;
    rl: readline.Interface | null;
    constructor(os: string);
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
    start(): Promise<void>;
    /**
     * Stops the native media monitoring process.
     *
     * This terminates the underlying native helper and stops all future
     * `"update"` events from being emitted. The Media instance can be started
     * again later by calling {@link start}.
     *
     * @returns A promise that resolves once the native helper has been stopped.
     */
    stop(): void;
}
//# sourceMappingURL=media.d.ts.map