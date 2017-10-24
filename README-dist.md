# Useful Angular Components
Install package `npm install ngx-useful-components --save-dev`

#### Add as a module...
```
import { NgxUsefulComponentsModule } from "ngx-useful-components"; 
 
@NgModule({
  imports: [
    NgxUsefulComponentsModule 
  ]
})
```

#### ...Or add components seperately
```
import { YoutubeComponent, IconComponent } from "ngx-useful-components"; 

@NgModule({
  declarations: [
    YoutubeComponent,
    IconComponent 
  ]
})
```

#### Included components
1. `<youtube [id]="id"></youtube>`
2. `<icon [baseUrl=]="baseUrl" [anchor]="anchor"></youtube>`