import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'gif-add',
	templateUrl: 'gif-add.component.html'
})
export class GifAddComponent implements OnInit {
	constructor() { }

	ngOnInit() { }

	addGif(_title, _url){
		console.log(`Add Gif`, _title, _url);
	}
}
