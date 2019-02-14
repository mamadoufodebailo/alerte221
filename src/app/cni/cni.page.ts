import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController} from '@ionic/angular';
import {PapierPage} from '../papier/papier.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cni',
  templateUrl: './cni.page.html',
  styleUrls: ['./cni.page.scss'],
})
export class CniPage implements OnInit {
  logo: any;
  slogan: string;

  constructor(private modalCtrl: ModalController,private router: Router) { }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  openDetail(demande:string){
    switch (demande){
        case 'document': this.openModal({
                titre: 'Perte de documents',
                contenu: 'Aller auprés de votre consulat le plus proche pour formaliser votre perte.'
            });
            break;
        case 'carte': this.openModal({
            titre: 'demande de carte CNI',
            contenu: 'Aller auprés de votre consulat le plus proche muni de votre bulletin de naissance' +
            'pour s\'acquitter de notre droit civique et être enregistrer au niveau du registre sénégalais.'
        });
          break;
        case 'papier': this.openModal({
            titre: 'demande de papier administratif',
            contenu: 'Aller auprés de votre consulat le plus proche et veuillez lire les notifications sur ' +
            'le tableau de bord les informations sur le document que vous souhaite obtenir.'
        });
          break;
    }
  }

  async openModal(data:any){
    const modal = await this.modalCtrl.create({
        component: PapierPage,
        componentProps: {
          donnee: data
        }
    });

    modal.present();
  }

  retourPage(){
      this.router.navigateByUrl("/home");
  }

}
