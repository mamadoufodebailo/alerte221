import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController} from '@ionic/angular';
import {AmbassadeDetailPage} from '../ambassade-detail/ambassade-detail.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ambassade',
  templateUrl: './ambassade.page.html',
  styleUrls: ['./ambassade.page.scss'],
})
export class AmbassadePage implements OnInit {
  logo: any;
  slogan :string;
  liste_ambassades= [
      {
        photo: 'assets/ambassades/france.jpg',
        ambassade: {
            ville: 'Paris',
            adresse: '14 Avenue Robert Schuman 75007 Paris',
            telephone: '(331) 45 56 04 30',
            telecopie: '(331) 47 05 39 45',
            site: 'http://www.ambasseneparis.com/'
        },
        consulats: [
            {
                ville: 'Paris',
                adresse: '22, rue Hamelin - 75116  PARIS',
                telephone: '01 44 05 38 48',
                telecopie: '01 47 55 99 40',
                site: 'www.consulsen-paris.com'
            },
            {
                ville: 'Lyon',
                adresse: '97, rue Garibaldi  -  69006  LYON',
                telephone: ' 04 72 72 96 91',
                telecopie: '04 37 28 97 88',
                site: 'http://www.consulsen-lyon.fr'
            },
            {
                ville: 'Bordeaux',
                adresse: '142, Bld  du Président Wilson   -  33000  BORDEAUX',
                telephone: '05 56 32 62 87',
                telecopie: '05 56 40 48 96',
                site: 'http://www.consulsenbordeaux.com'
            }
        ]
      },
      {
        photo: 'assets/ambassades/gambia.jpg',
        ambassade:{
            ville: 'Banjul',
            adresse: '59, Kairaba Avenue BP 385 Banjul Gambie',
            telephone: '(+220) 437 3752',
            telecopie: '(+220) 437 3750',
            site: ''
        },
          consulats:[]
      },
      {
          photo: 'assets/ambassades/usa.jpg',
          ambassade: {
              ville: 'Washington',
              adresse: '2215 M street, NW, Washington DC 20037',
              telephone: '+1 (202) 234-0540',
              telecopie: 'Fax: +1 (202) 629-2961',
              site: 'http://www.ambasenegal-us.org/'
          },
          consulats: []
      }
      ];
  constructor(private modalCtrl: ModalController,private router: Router) { }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  async openDetail(embassy:any){
      const modal = await this.modalCtrl.create({
        component: AmbassadeDetailPage,
        componentProps: {
            data: embassy
        }
      });

      modal.present();
  }

  retourPage(){
      this.router.navigateByUrl("/home");
  }

}
