import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

export const IMPORTS: any[] = [
	MaterialModule
];

export const EXPORTS: any[] = [
	MaterialModule
];

@NgModule({
	imports: IMPORTS,
	exports: EXPORTS,
	providers: [],
})
export class CommonModule { }
