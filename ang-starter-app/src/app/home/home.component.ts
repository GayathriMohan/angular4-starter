import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    currentUser: User;
    users: User[] = [];
}
