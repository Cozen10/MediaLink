import type { FileOS, MediaData } from "./shared/types.js"

const osMap: Record<string, string> = {
    win32: "windows",
    darwin: "macos",
    linux: "linux",
    aix: "aix",
    openbsd: "openbsd",
    freebsd: "freebsd",
    sunos: "sunos",
}

export default class Media {
    os: string;
    private osFile: Promise<FileOS>;


    constructor(os: string) {
        this.os = os
        this.osFile = import(`./OperatingSystems/${osMap[this.os]}.js`) as Promise<FileOS>
    }

    async getMusic(): Promise<MediaData> {
        return await (await this.osFile).getMusic()
    }

    async getTitle(): Promise<string | undefined> {
        return await (await this.osFile).getTitle()
    }

    async getArtist(): Promise<string | undefined> {
        return await (await this.osFile).getArtist()
    }

    async getCover(): Promise<string | undefined> {
        return await (await this.osFile).getCover()
    }

    async getDuration(): Promise<number | undefined> {
        return await (await this.osFile).getDuration()
    }

    async getPosition(): Promise<number | undefined> {
        return await (await this.osFile).getPosition()
    }

    async getSource(): Promise<string | undefined> {
        return await (await this.osFile).getSource()
    }

    async getPlaybackState(): Promise<string | undefined> {
        return await (await this.osFile).getPlaybackState()
    }

    async getAlbum(): Promise<string | undefined> {
        return await (await this.osFile).getAlbum()
    }

    async getAlbumArtist(): Promise<string | undefined> {
        return await (await this.osFile).getAlbumArtist()
    }
}