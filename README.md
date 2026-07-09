# MediaLink

A lightweight, dependency-free Node.js library for accessing the operating system's active media session through a single, unified API.

MediaLink normalizes media information across supported platforms, so your application receives the same data structure regardless of the operating system. Whether the user is listening to Spotify, YouTube, VLC, or another supported media source, MediaLink provides a consistent interface for retrieving metadata and monitoring playback.

## Features

* Lightweight and dependency-free
* Cross-platform API
* Access active media metadata
* Retrieve album artwork as base64
* Automatic updates via events
* Simple easy-to-use API

## Installation

```bash
npm install medialink
```

## Quick Start

```ts
import { Media, type MediaData } from "medialink";

const media = new Media(process.platform);

media.on("update", (data: MediaData) => {
    console.log(data);
});

await media.start();
```

When you're finished monitoring media:

```ts
media.stop();
```

## API

### `new Media(platform)`

Creates a new Media instance.

```ts
const media = new Media(process.platform);
```

### `await media.start()`

Starts the native helper process and begins monitoring the active media session.

### `media.stop()`

Stops the native helper process and ends media monitoring.

### `media.on("update", callback)`

Emitted every 500ms with the current media information.

```ts
media.on("update", (mediaData: MediaData) => {
    console.log(mediaData.title);
    console.log(mediaData.artist);
});
```

### `MediaData`

MediaData is an interface representing the normalized metadata of the current media session.

```ts
interface MediaData = {
    title: string,
    artist: string,
    cover: string,
    duration: number,
    position: number,
    source: string,
    playbackState: string,
    album: string,
    albumArtist: string
}
```

## Supported Platforms

| Platform      | Status       |
| ------------- | ------------ |
| Windows (x64) | ✅ Supported |
| Linux (x64)   | ✅ Supported |
| macOS         | 🚧 Planned   |
| Windows (ARM) | 🚧 Planned   |
| Linux (ARM)   | 🚧 Planned   |
| SunOS         | 🚧 Planned   |
| FreeBSD       | 🚧 Planned   |
| OpenBSD       | 🚧 Planned   |

## Contributing

Contributions are welcome. If you'd like to add support for additional operating systems or architectures, feel free to open a pull request.

## License

This project is licensed under the MPL-2.0 License.