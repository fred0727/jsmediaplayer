import MediaPlayer from "../MediaPlayer";

class AutoPause{
    private threshold: number;
    player: MediaPlayer;

    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        })

        observer.observe(this.player.media)

        // Verificando si seguimos en la misma pestaña o se ha cambiado
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold
        return (isVisible) ? this.player.play() : this.player.pause();
    }

    private handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible"
        return (isVisible) ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;