import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
// import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router';
// import { LoginComponentComponent } from './login-component/login-component.component';
// import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @RouteConfig ([
//     {
//            path: '/',
//            component: LoginComponentComponent,
//            name: 'LoginArea'
//     },
//     {
//             path: '/register',
//             component: RegisterComponent,
//             name: 'RegisterArea'
//     }
// ])
export class AppComponent {
  title = 'Login with your username!';
}
