const osMap = {
    win32: "windows",
    darwin: "macos",
    linux: "linux",
    aix: "aix",
    openbsd: "openbsd",
    freebsd: "freebsd",
    sunos: "sunos",
};
export default class Media {
    os;
    osFile;
    constructor(os) {
        this.os = os;
        this.osFile = import(`./OperatingSystems/${osMap[this.os]}.js`);
    }
    async getMusic() {
        return await (await this.osFile).getMusic();
    }
    async getTitle() {
        return await (await this.osFile).getTitle();
    }
    async getArtist() {
        return await (await this.osFile).getArtist();
    }
    async getCover() {
        return await (await this.osFile).getCover();
    }
    async getDuration() {
        return await (await this.osFile).getDuration();
    }
    async getPosition() {
        return await (await this.osFile).getPosition();
    }
    async getSource() {
        return await (await this.osFile).getSource();
    }
    async getPlaybackState() {
        return await (await this.osFile).getPlaybackState();
    }
    async getAlbum() {
        return await (await this.osFile).getAlbum();
    }
    async getAlbumArtist() {
        return await (await this.osFile).getAlbumArtist();
    }
}
//# sourceMappingURL=media.js.map