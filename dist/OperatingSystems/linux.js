import { promisify } from "node:util";
import { execFile } from "node:child_process";
import path from "node:path";
const execFileAsync = promisify(execFile);
async function runNative(args) {
    const exePath = path.resolve(process.cwd(), "native/linux/MediaLink.Native" // Dear consumer change this if hate my native file that took me 3 hours to setup (i am not familiar with linux)
    );
    const { stdout } = await execFileAsync(exePath, args, { maxBuffer: 1024 * 1024 * 100 });
    return JSON.parse(stdout);
}
export async function getTitle() {
    const data = await runNative(["get", "--title"]);
    return data["title"];
}
export async function getArtist() {
    const data = await runNative(["get", "--artist"]);
    return data["artist"];
}
export async function getCover() {
    const data = await runNative(["get", "--cover"]);
    return data["cover"];
}
export async function getDuration() {
    const data = await runNative(["get", "--duration"]);
    return data["duration"];
}
export async function getPosition() {
    const data = await runNative(["get", "--position"]);
    return data["position"];
}
export async function getSource() {
    const data = await runNative(["get", "--source"]);
    return data["source"];
}
export async function getPlaybackState() {
    const data = await runNative(["get", "--playbackstate"]);
    return data["playbackstate"];
}
export async function getAlbum() {
    const data = await runNative(["get", "--album"]);
    return data["album"];
}
export async function getAlbumArtist() {
    const data = await runNative(["get", "--albumartist"]);
    return data["albumartist"];
}
export async function getMusic() {
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
    };
}
//# sourceMappingURL=linux.js.map