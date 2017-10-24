import { Component, Input } from '@angular/core';

@Component({
    selector: 'icon',
    template: `
        <span class="icon is--{{anchor}}">
            <svg class="icon-svg">
                <use [attr.xlink:href]="baseUrl + '#' + anchor"></use>
            </svg>
        </span>
    `
})
export class IconComponent {
    @Input() anchor: string;
    @Input() baseUrl: string;
}