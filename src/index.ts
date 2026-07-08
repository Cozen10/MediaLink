export { default as Media } from './media.js';
import Media from './media.js';

var media = new Media("win32");

await media.start()

media.on("update", (data)=>{
    console.log(data)
    media.stop()
});