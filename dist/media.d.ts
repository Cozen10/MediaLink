import type { MediaData } from "./shared/types.js";
export default class Media {
    os: string;
    private osFile;
    constructor(os: string);
    getMusic(): Promise<MediaData>;
    getTitle(): Promise<string | undefined>;
    getArtist(): Promise<string | undefined>;
    getCover(): Promise<string | undefined>;
    getDuration(): Promise<number | undefined>;
    getPosition(): Promise<number | undefined>;
    getSource(): Promise<string | undefined>;
    getPlaybackState(): Promise<string | undefined>;
    getAlbum(): Promise<string | undefined>;
    getAlbumArtist(): Promise<string | undefined>;
}
//# sourceMappingURL=media.d.ts.map