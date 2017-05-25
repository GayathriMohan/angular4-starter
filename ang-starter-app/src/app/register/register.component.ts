// import { Component, OnInit } from '@angular/core';
// // import { User } from '../models/users';
// import { Router } from '@angular/router';
// import { AlertService } from '../services/alert.service';
// import { AuthenticationService } from '../services/authentication.service';
// import { UserService } from '../services/user.service';

// declare var $: any;

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   // persons: User[] = [];
//   // counter = 0;
//   // person: User;
//   model: any = {};
//   loading= false;

//   constructor(
//     private router: Router,
//     private userService: UserService,
//     private alertService: AlertService) { }
//   // onRegister() {
//   //   this.person = new User(this.person.firstName, this.person.lastName, this.person.username, this.person.password);
//   //   if (this.person) {
//   //     this.persons.push(this.person);
//   //     console.log(this.persons);
//   //   }
//   //   this.counter++;
//   // }

//   onRegister() {
//     this.loading = true;
//         this.userService.create(this.model)
//             .subscribe(
//                 data => {
//                     this.alertService.success('Registration successful', true);
//                     this.router.navigate(['/login']);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//   }
//   ngOnInit() {
//     // const showHide = false;
//      $('.wrapper input').focus(function(){
//          $(this).siblings().addClass('is-active');
//       });
//       $('.wrapper input').focusout(function(){
//           if (!($(this).val())) {
//               $(this).siblings().removeClass('is-active');
//           }
//      });
//   }
// }
