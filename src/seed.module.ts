import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedService } from './seed.service';
import { SeedComponent } from './seed.component';

@NgModule({
	declarations: [
		SeedComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		SeedService
	],
	exports: [
		SeedComponent
	]
})
export class SeedModule { }
