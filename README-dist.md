# Useful Angular Components
Install package `npm install ngx-useful-components --save-dev`

Import module
```ts
import { NgxUsefulComponentsModule } from "ngx-useful-components"; 
 
@NgModule({
  imports: [
    NgxUsefulComponentsModule 
  ]
})
```

...or import components seperately
```ts
import { YoutubeComponent, IconComponent } from "ngx-useful-components"; 

@NgModule({
  declarations: [
    YoutubeComponent,
    IconComponent 
  ]
})
```

## Included components
### 1. Youtube
```html
<youtube
  [url]="'https://www.youtube.com/watch?v=Wx_2SVm9Jgo'" 
  (ready)="ready($event)" 
  (stateChange)="stateChange($event)" 
  [playerVars]="{ autoplay: 1, controls: 1 }">
</youtube>
```

```ts
export class YourComponentName {
  ready(event) {
    console.log("YT_ready", event)

    // play video
    event.target.playVideo();
  }

  stateChange(event) {
    console.log("YT_state_change", event)
  }
}
```

Have a look at the official YouTube [documentation](https://developers.google.com/youtube/iframe_api_reference). With **events** you have complete control over the **player** instance with methods like `event.target.pauseVideo()` and `event.target.stopVideo()`.
- [player instance](https://developers.google.com/youtube/iframe_api_reference#Playback_controls) using `event.target`
- [events](https://developers.google.com/youtube/iframe_api_reference#Events) `stateChange` and `ready`
- [playerVars](https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player) for example `{ autoplay: 1, controls: 1 }`

### 2. Icon
``` html
<icon
  [baseUrl]="baseUrl" 
  [anchor]="anchor">
</icon>
```