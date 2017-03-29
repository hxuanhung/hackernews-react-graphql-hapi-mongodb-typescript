import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'gif',
    templateUrl: 'gif.component.html'
})
export class GifComponent implements OnInit {
    @Input() title: string;
    @Input() url: string;
    constructor() { }

    ngOnInit() { }
}
