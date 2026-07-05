import type { MediaData } from "../shared/types.js"
import { promisify } from "node:util";
import { execFile } from "node:child_process";
import path from "node:path";

export async function getTitle(): Promise<string | undefined> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = ["get", "--title"];

    const { stdout } = await execFileAsync(exePath, args);

    return JSON.parse(stdout)["title"];
}

export async function getArtist(): Promise<string | undefined> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = ["get", "--artist"];

    const { stdout } = await execFileAsync(exePath, args);

    return JSON.parse(stdout)["artist"];
}

export async function getCover(): Promise<string | undefined> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = ["get", "--cover"];

    const { stdout } = await execFileAsync(exePath, args);

    return JSON.parse(stdout)["cover"];
}

export async function getDuration(): Promise<number | undefined> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = ["get", "--duration"];

    const { stdout } = await execFileAsync(exePath, args);

    return JSON.parse(stdout)["duration"];
}

export async function getPosition(): Promise<number | undefined> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = ["get", "--position"];

    const { stdout } = await execFileAsync(exePath, args);

    return JSON.parse(stdout)["position"];
}

export async function getSource(): Promise<string | undefined> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = ["get", "--source"];

    const { stdout } = await execFileAsync(exePath, args);

    return JSON.parse(stdout)["source"];
}

export async function getPlaybackState(): Promise<string | undefined> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = ["get", "--playbackstate"];

    const { stdout } = await execFileAsync(exePath, args);

    return JSON.parse(stdout)["playbackstate"];
}

export async function getAlbum(): Promise<string | undefined> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = ["get", "--album"];

    const { stdout } = await execFileAsync(exePath, args);

    return JSON.parse(stdout)["album"];
}

export async function getAlbumArtist(): Promise<string | undefined> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = ["get", "--albumartist"];

    const { stdout } = await execFileAsync(exePath, args);

    return JSON.parse(stdout)["albumartist"];
}

export async function getMusic(): Promise<MediaData> {
    const execFileAsync = promisify(execFile);

    const exePath = path.resolve(
        process.cwd(),
        "native/windows/64x/MediaLink.Native.exe"
    );

    const args = [
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
    ];

    const { stdout } = await execFileAsync(exePath, args);
    const data = JSON.parse(stdout);

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