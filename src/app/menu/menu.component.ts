import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    public isUserLogged = localStorage.getItem('userLogin') !== null;

    constructor() {
    }

    ngOnInit() {
    }

    logout() {
        localStorage.removeItem('userLogin');
        window.location.href = '/login';
    }
}
