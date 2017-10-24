import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
    selector: 'youtube',
    template: `
        <div class="container" *ngIf="id">
            <iframe width="560"
                height="315"
                frameborder="0"
                allowfullscreen
                [src]="src">
            </iframe>
        </div>
    `,
    styles: [`
        .container {
            width: 100%;
            height: 0;
            overflow: hidden;
            padding-bottom: 56.25%;
            position: relative;
        }
        iframe {
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
    @Input() id: string;    
    src: any;

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit() {
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.id}?autoplay=1`);
    }
}