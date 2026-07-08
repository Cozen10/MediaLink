import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import type { MediaData } from "./shared/types.js";
import path from "node:path";
import fs from "fs";
import readline from "node:readline";
import EventEmitter from "node:events";

const osMap: Record<string, string> = {
    win32: "../native/windows/64x/MediaLink.Native.exe",
    darwin: "undefined",
    linux: "../native/linux/MediaLink.Native",
    aix: "undefined",
    openbsd: "undefined",
    freebsd: "undefined",
    sunos: "undefined",
}

export default class Media extends EventEmitter {
    os: string;
    child: ChildProcessWithoutNullStreams | null = null;
    rl: readline.Interface | null = null;

    constructor(os: string) {
        super()

        this.os = os
    }

    async start() {
        const exePath = path.resolve(import.meta.dirname, osMap[this.os] ?? "undefined");
        if (!fs.existsSync(exePath)) throw new Error(`Unsupported OS: ${this.os}.`);

        this.child = spawn(exePath);

        this.rl = readline.createInterface({
            input: this.child.stdout
        });

        this.rl.on("line", (line) => {
            const data = JSON.parse(line);
            this.emit("update", data)
        });
        
        this.child.stderr.on("data", (chunk) => {
            const errorMessage = chunk.toString("utf8");
            this.emit("error", errorMessage)
            console.error(errorMessage)
        });
        
        this.child.on("close", () => {
            this.rl?.close()
            this.child = null;
            this.rl = null;
        });
    }

    stop() {
        if (!this.child) return console.warn("Process not started!");
        
        this.child.kill()
        this.rl?.close()

        this.child = null;
        this.rl = null;
    }
}