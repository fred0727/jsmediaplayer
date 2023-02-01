import MediaPlayer from './MediaPlayer';
import AutoPause from './plugins/AutoPause';
import AutoPlay from './plugins/AutoPlay';
const video = document.getElementById("video");

const player = new MediaPlayer({
    element:video, 
    plugins: [new AutoPlay(), new AutoPause()] 
});

const button:HTMLElement = document.getElementById("playButton") as HTMLElement;
button.onclick = () => player.togglePlay();

const mute:HTMLElement = document.getElementById("muteButton") as HTMLElement;
mute.onclick = () => player.toggleMuted();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}