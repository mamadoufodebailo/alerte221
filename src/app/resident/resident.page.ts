import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.page.html',
  styleUrls: ['./resident.page.scss'],
})
export class ResidentPage implements OnInit {
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

  showPapier(){
    this.router.navigateByUrl("/inscription");
  }

  showInconnu(){
    this.router.navigateByUrl("/inconnu");
  }

}
