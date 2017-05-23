import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
