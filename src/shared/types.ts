export type FileOS = {
    getTitle: () => Promise<string | undefined>
    getArtist: () => Promise<string | undefined>
    getCover: () => Promise<string | undefined>
    getDuration: () => Promise<number | undefined>
    getPosition: () => Promise<number | undefined>
    getSource: () => Promise<string | undefined>
    getPlaybackState: () => Promise<string | undefined>
    getAlbum: () => Promise<string | undefined>
    getAlbumArtist: () => Promise<string | undefined>
    getMusic: () => Promise<MediaData>
}

export interface MediaData {
    Title: string
    Artist: string
    Cover: string
    Duration: number
    Position: number
    Source: string
    PlaybackState: string
    Album: string
    AlbumArtist: string
}