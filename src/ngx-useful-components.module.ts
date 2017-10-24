import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';
import { YoutubeComponent } from './youtube.component';

@NgModule({
	declarations: [
		IconComponent,
		YoutubeComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		//someService
	],
	exports: [
		IconComponent,
		YoutubeComponent
	]
})
export class NgxUsefulComponentsModule { }
