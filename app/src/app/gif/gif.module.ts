import { NgModule } from '@angular/core';
import { CommonModule } from "../common.module";
import { GifComponent } from './gif.component';
import { GifAddComponent } from './add/gif-add.component';

@NgModule({
	imports: [CommonModule],
	exports: [GifComponent, GifAddComponent],
	declarations: [GifComponent, GifAddComponent],
	providers: [],
})
export class GifModule { }
