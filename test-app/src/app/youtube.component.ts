import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

export enum YoutubeState {
    Unstarted = -1,
    Ended = 0,
    Playing = 1,
    Paused = 2,
    Buffering = 3,
    Cued = 5
}

export interface YoutubeReadyEvent {
    target: any,
    data: any
}

export interface YoutubeChangeEvent {
    target: any,
    data: YoutubeState
}

@Component({
    selector: 'youtube',
    template: `
        <div class="youtube__container {{stateClassName}}">
            <div class="youtube__container__iframe" #ref></div>      
        </div>
    `,
    styles: [`
        .youtube__container {
            width: 100%;
            height: 0;
            overflow: hidden;
            padding-bottom: 56.25%;
            position: relative;
            display: block;
        }
        ::ng-deep .youtube__container__iframe {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    `]
})
export class YoutubeComponent {
    @Output() ready: EventEmitter<YoutubeReadyEvent> = new EventEmitter();    
    @Output() stateChange: EventEmitter<YoutubeChangeEvent> = new EventEmitter();
    @ViewChild('ref') ref: any;    
    @Input() url: string;
    @Input() playerVars: any = { 
        autoplay: 1, 
        controls: 0 
    };
    player: any;
    stateClassName: string = 'is--unloaded';

    constructor() {}

    urlParser(url: string) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : url;
    }

    apiLoaded(): Promise<any> {
        return new Promise((resolve, reject) => {
            const tag = document.createElement('script');
            tag.id = "youtube-component-api";
            tag.src = "https://www.youtube.com/iframe_api";
            const exist = document.getElementById(tag.id);

            if (!exist) {
                const firstScriptTag: any = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            };

            let timeout = 0;
            const maxTimeout = 30000;
            const interval = 100;
            
            const timer = setInterval(()=> {
                timeout += interval;
                if (timeout >= maxTimeout) {
                    clearInterval(timer)                                        
                    reject(new Error("Youtube Api not loaded"));
                }
                else if ((window as any)["YT"]) {
                    clearInterval(timer)                                                            
                    resolve((window as any)["YT"]);
                }
            }, interval);
        })
    };

    ngOnInit() {
        this.apiLoaded().then(YT => {
            this.player = new YT.Player(this.ref.nativeElement, {
                videoId: this.urlParser(this.url),
                playerVars: this.playerVars,
                events: {
                    onReady: (e: YoutubeReadyEvent) => this.ready.emit(e),
                    onStateChange: (e: YoutubeChangeEvent) => {
                        const stateName = YoutubeState[e.data].toLowerCase();
                        this.stateClassName = `is--${stateName}`;
                        this.stateChange.emit(e);
                    }
                }
            })
        });
    }
} 