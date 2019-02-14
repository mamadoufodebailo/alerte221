import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController} from '@ionic/angular';
import {InformationDetailPage} from '../information-detail/information-detail.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  logo: any;
  slogan: string;
  informations = [
      {
        titre: 'Pourquoi la Direction Générale des Sénégalais de l\'Extérieur ?',
        photo: 'assets/images/dgse.jpg',
        contenu: 'Pour des raisons économiques, politiques, environnementales ou culturelles,\n' +
        '    l’individu peut prendre la décision de déménager d\'un pays vers un autre.\n' +
        '    Les besoins des migrants, sénégalais de l’extérieur, diversifient selon les\n' +
        '    continents et les contextes. D’où l’initiative du gouvernement du Sénégal de\n' +
        '    créer spécialement une Direction Générale des Sénégalais de L’Extérieur (DGSE)\n' +
        '    pour faire face aux multiples besoins des compatriotes établis à l’étranger,\n' +
        '    au sein du Ministère des Affaires Étrangères.'
      },
      {
          titre: 'La DGSE s’active pour accompagner les Sénégalais de l’extérieur',
          photo: 'assets/images/dgse-ex.jpg',
          contenu: 'La Direction Générale des Sénégalais de l’Extérieur – DGSE- en collaboration\n' +
          '  avec l’union Européenne organisent un atelier avec les partenaires Financiers\n' +
          '  et Techniques autour des modes et moyens de financement d’actions prioritaires\n' +
          '  au profit des Sénégalais de l’extérieur. Cette rencontre de deux jours permettra\n' +
          '  de mener une réflexion sur les moyens d’accompagner la réalisation des actions\n' +
          '  prioritaires du Plan Stratégique et Opérationnel (PSO), de la DGSE  pour l’horizon\n' +
          '  2015-2018.'
      }
  ];

  constructor(private modalCtrl: ModalController,private router: Router) { }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  async onDetail(information: any){
      const modal = await this.modalCtrl.create({
         component: InformationDetailPage,
          componentProps:{
             data: information
          }
      });

      modal.present();
  }

  retourPage(){
      this.router.navigateByUrl("/home");
  }

}
