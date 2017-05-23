import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  persons: User[] = [];
  counter = 0;
  person: User;

  constructor() { }
  onSubmit(value) {
    this.person = new User(value.id, value.username, value.password, value.firstname, value.lastname);
    if (value) {
      this.persons.push(this.person);
    }
    this.counter++;
  }

  ngOnInit() {
    const showHide = false;
     $('.wrapper input').focus(function(){
         $(this).siblings().addClass('is-active');
      });
      $('.wrapper input').focusout(function(){
          if (!($(this).val())) {
              $(this).siblings().removeClass('is-active');
          }
     });
  }
}
