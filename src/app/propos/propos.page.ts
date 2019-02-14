import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';

@Component({
  selector: 'app-propos',
  templateUrl: './propos.page.html',
  styleUrls: ['./propos.page.scss'],
})
export class ProposPage implements OnInit {
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
