import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  logo: any;
  slogan: string;

  constructor(private router: Router,private navCtrl: NavController,
              private alertCtrl: AlertController,private geolocation: Geolocation) {

  }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  openPage(page:string){
      this.router.navigateByUrl("/reconnaissance/"+page);
  }

  async showAlert(){
    const alert = await this.alertCtrl.create({
        header: "Choisissez votre type d'inscription",
        buttons: [
            {
                text: 'Sans Papier',
                handler: ()=> {
                this.router.navigateByUrl("/inconnu");
              }
            },
            {
                text: 'Avec Papier',
                handler: ()=> {
                  this.router.navigateByUrl("/inscription");
                }
            }
        ]
    });

    return await alert.present();
  }

  getPosition(){
      this.geolocation.getCurrentPosition().then(data=> {
          console.log(data.coords.latitude+" - "+data.coords.longitude);
      }).catch(error=> {
          console.error("Impossible de geolocation");
      });
  }

  showVoyage(){
      this.router.navigateByUrl("/connexion/touki");
  }

  showResident(){
      this.router.navigateByUrl("/connexion/resident");
  }

}
