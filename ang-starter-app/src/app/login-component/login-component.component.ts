import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import {MultiSelectModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

declare var $: any;

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  data: any = {};
  loading= false;
  returnUrl: string;
  constructor(private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

  loginSubmit () {
    this.loading = true;
        this.authenticationService.login(this.data.username, this.data.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
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
