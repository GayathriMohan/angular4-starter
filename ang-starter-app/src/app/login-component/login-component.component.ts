import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import {MultiSelectModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

// import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  // directives: [ROUTER_DIRECTIVES]
})
export class LoginComponentComponent implements OnInit {
  data: any = {};
  loading= false;
  returnUrl: string;

   cars: SelectItem[];

    selectedCars: string[] = [];

    constructor() {
        this.cars = [];
        this.cars.push({label: 'Audi', value: 'Audi'});
        this.cars.push({label: 'BMW', value: 'BMW'});
        this.cars.push({label: 'Fiat', value: 'Fiat'});
        this.cars.push({label: 'Ford', value: 'Ford'});
        this.cars.push({label: 'Honda', value: 'Honda'});
        this.cars.push({label: 'Jaguar', value: 'Jaguar'});
        this.cars.push({label: 'Mercedes', value: 'Mercedes'});
        this.cars.push({label: 'Renault', value: 'Renault'});
        this.cars.push({label: 'VW', value: 'VW'});
        this.cars.push({label: 'Volvo', value: 'Volvo'});
    }    
  // constructor(private route: ActivatedRoute,
  //       private router: Router,
  //       private authenticationService: AuthenticationService,
  //       private alertService: AlertService) {}

  loginSubmit () {
    this.loading = true;
        // this.authenticationService.login(this.data.username, this.data.password)
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
  }

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
