import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './header.component.html',
    selector: 'app-header',
})
export class HeaderComponent implements OnInit {
    constructor() { }
    collapsed = true;
    ngOnInit(): void { }
}
