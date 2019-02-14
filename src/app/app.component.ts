import {Component, OnInit} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Acceuil',
      url: '/home',
      photo: 'assets/icones/accueil.jpg'
    },
      {
          title: 'Information',
          url: '/information',
          photo: 'assets/icones/information.png'
      },
      {
          title: 'Ambassade & Consulat',
          url: '/ambassade',
          photo: 'assets/icones/ambassade.png'
      },

              {
                  title : 'Ministre',
                  url : '/ministre',
                  photo: 'assets/icones/ministre.jpg'
              },
              {
                  title : 'DGSE',
                  url : '/dgse',
                  photo: 'assets/icones/dgse.jpg'

      },
      {
          title : 'Association',
          url : '/association',
          photo: 'assets/icones/association.png'
      },
      {
          title : 'Web to SMS',
          url : '/webtosms',
          photo: 'assets/icones/sms.png'
      },
      {
          title: 'Vidéo',
          url: '/video',
          photo: 'assets/icones/video.png'
      },
      {
          title: 'Aide',
          url: '/cni',
          photo: 'assets/icones/reconnaissance.png'
      },
      {
          title: 'A propos',
          url: '/propos',
          photo: 'assets/icones/propos.png'
      }
  ];
  index = false;
  isOpen = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  isSubExist(sousMenus: any){
      return Array.isArray(sousMenus);
  }

  openMenus(sousMenus: any){
      if (Array.isArray(sousMenus)){
          if (this.index){
              this.isOpen = true;
              this.index = false;
          }
          else {
              this.isOpen = false;
              this.index = true;
          }
      }
  }

}
