import type { MediaData } from "../shared/types.js"
import { promisify } from "node:util";
import { execFile } from "node:child_process";
import path from "node:path";

const execFileAsync = promisify(execFile);

async function runNative(args: string[]): Promise<any> {
    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe" // Dear consumer change this if you add support for arm86 or windows x32
    );

    const { stdout } = await execFileAsync(exePath, args, { maxBuffer: 1024 * 1024 * 100 });
    return JSON.parse(stdout);
}

export async function getTitle(): Promise<string | undefined> {
    const data = await runNative(["get", "--title"]);
    return data["title"];
}

export async function getArtist(): Promise<string | undefined> {
    const data = await runNative(["get", "--artist"]);
    return data["artist"];
}

export async function getCover(): Promise<string | undefined> {
    const data = await runNative(["get", "--cover"]);
    return data["cover"];
}

export async function getDuration(): Promise<number | undefined> {
    const data = await runNative(["get", "--duration"]);
    return data["duration"];
}

export async function getPosition(): Promise<number | undefined> {
    const data = await runNative(["get", "--position"]);
    return data["position"];
}

export async function getSource(): Promise<string | undefined> {
    const data = await runNative(["get", "--source"]);
    return data["source"];
}

export async function getPlaybackState(): Promise<string | undefined> {
    const data = await runNative(["get", "--playbackstate"]);
    return data["playbackstate"];
}

export async function getAlbum(): Promise<string | undefined> {
    const data = await runNative(["get", "--album"]);
    return data["album"];
}

export async function getAlbumArtist(): Promise<string | undefined> {
    const data = await runNative(["get", "--albumartist"]);
    return data["albumartist"];
}

export async function getMusic(): Promise<MediaData> {
    const data = await runNative([
        "get",
        "--title",
        "--artist",
        "--cover",
        "--duration",
        "--position",
        "--source",
        "--playbackstate",
        "--album",
        "--albumartist"
    ]);

    return {
        Title: data["title"] ?? "Unknown Title",
        Artist: data["artist"] ?? "Unknown Artist",
        Cover: data["cover"] ?? "",
        Duration: data["duration"] ?? 0,
        Position: data["position"] ?? 0,
        Source: data["source"] ?? "Unknown Source",
        PlaybackState: data["playbackstate"] ?? "Stopped",
        Album: data["album"] ?? "Unknown Album",
        AlbumArtist: data["albumartist"] ?? "Unknown Artist",
    }
}