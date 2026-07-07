export async function getTitle() {
    return;
}
export async function getArtist() {
    return;
}
export async function getCover() {
    return;
}
export async function getDuration() {
    return;
}
export async function getPosition() {
    return;
}
export async function getSource() {
    return;
}
export async function getPlaybackState() {
    return;
}
export async function getAlbum() {
    return;
}
export async function getAlbumArtist() {
    return;
}
export async function getMusic() {
    const Title = await getTitle();
    const Artist = await getArtist();
    const Cover = await getCover();
    const Duration = await getDuration();
    const Position = await getPosition();
    const Source = await getSource();
    const PlaybackState = await getPlaybackState();
    const Album = await getAlbum();
    const AlbumArtist = await getAlbumArtist();
    return {
        Title: Title ?? "Unknown Title",
        Artist: Artist ?? "Unknown Artist",
        Cover: Cover ?? "",
        Duration: Duration ?? 0,
        Position: Position ?? 0,
        Source: Source ?? "Unknown Source",
        PlaybackState: PlaybackState ?? "Stopped",
        Album: Album ?? "Unknown Album",
        AlbumArtist: AlbumArtist ?? "Unknown Artist",
    };
}
//# sourceMappingURL=freebsd.js.map