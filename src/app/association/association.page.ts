import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {AssociationDetailPage} from '../association-detail/association-detail.page';

@Component({
  selector: 'app-association',
  templateUrl: './association.page.html',
  styleUrls: ['./association.page.scss'],
})
export class AssociationPage implements OnInit {
    logo: any;
    slogan :string;
    liste_associations = [
        {
            photo: 'assets/ambassades/france.jpg',
            associations: [
                {
                    nom: 'Assemblée des Sénégalais de l\'Exterieur',
                    moral: 'Mme Hawa Timéra',
                    adresse: '4 bis rue de Palestine - 75019 Paris',
                    email: 'concertationdiasporasenegal.fr@gmail.com',
                    telephone: '06 03 97 53 03'
                },
                {
                    nom: 'Conseil Supérieur des Sénégalais de l\'Extérieur',
                    moral: 'Mamadou DIALLO',
                    telephone: '+39 3894297927'
                }
            ]
        },
        {
            photo: 'assets/ambassades/italie.jpg',
            associations: [
                {
                    nom: 'SunuDiaspora',
                    adresse: 'Bergamo',
                    telephone: '035885794'
                },
                {
                    nom: 'Conseil Supérieur des Sénégalais de l\'Extérieur',
                    moral: 'Mamadou DIALLO',
                    telephone: '+39 3894297927'
                }
            ]
        }
    ];

  constructor(private router: Router,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  async openDetail(association: any){
    const modal = await this.modalCtrl.create({
        component: AssociationDetailPage,
        componentProps: {
          data: association
        }
    });

    modal.present();
  }

  retourPage(){
    this.router.navigateByUrl("/home");
  }

}
