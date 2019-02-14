import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-ministre',
  templateUrl: './ministre.page.html',
  styleUrls: ['./ministre.page.scss'],
})
export class MinistrePage implements OnInit {
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
