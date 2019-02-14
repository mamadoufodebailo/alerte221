import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  logo: any;
  slogan: string;

  constructor(private domSanitize: DomSanitizer,private router: Router) { }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  sanitizeUrl(url:string){
    return this.domSanitize.bypassSecurityTrustResourceUrl(url);
  }

  retourPage(){
    this.router.navigateByUrl("/home");
  }

}
