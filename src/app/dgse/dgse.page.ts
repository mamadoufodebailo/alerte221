import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-dgse',
  templateUrl: './dgse.page.html',
  styleUrls: ['./dgse.page.scss'],
})
export class DgsePage implements OnInit {
  logo: any;
  slogan: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  retourPage(){
    this.router.navigateByUrl("/home");
  }

}
