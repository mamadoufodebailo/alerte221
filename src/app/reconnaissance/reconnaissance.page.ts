import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ReconnaissanceDetailPage} from '../reconnaissance-detail/reconnaissance-detail.page';

@Component({
  selector: 'app-reconnaissance',
  templateUrl: './reconnaissance.page.html',
  styleUrls: ['./reconnaissance.page.scss'],
})
export class ReconnaissancePage implements OnInit {
  logo: any;
  slogan: string;
  page: string;
  informations: any;

  attentats = {
      photo: 'assets/infos/alerte.png',
      titre: 'attentat',
      contenu: ["Ne vous exposez pas. Abritez-vous",
      "Alertez les personnes autour de vous et dissuadez-les de pénétrer dans la zone de danger",
      "N'encombrez pas les réseaux téléphoniques","Confirmez-vous aux consignes des forces de l'ordre",
      "Limitez vos déplacements pour faciliter l'intervention des forces de l'ordre et de secours"]
  };
  nucleaires = {
      photo: 'assets/infos/nuclaire.jpg',
      titre: 'nucleaire',
      contenu: ["Abritez-vous  dans un batiment clos","Fermez fenêtres, portes et aérations",
      "Arrêtez la ventilation","Pour vous informer, restez à l'ecoute des autorités",
      "N'allez pas chercher vos enfants","Ne téléphonez qu'en cas d'urgence vitale"]
  };
  hybriques = {
      photo: 'assets/infos/hydraulique.jpg',
      titre: 'hydraulique',
      contenu: ["Rejoignez sans délai les points hauts les plus proches","N'allez pas chercher vos enfants",
      "Pour vous informer, restez à l'ecoute des autorités","N'encombrez pas les réseaux téléphoniques"]
  };
  produits = {
      photo: 'assets/infos/produit.jpg',
      titre: 'produit',
      contenu: ["Abritez-vous  dans un batiment clos à proximité","Fermez fenêtres, portes et aérations",
      "Arrêtez la ventilation","Evitez toute flamme ou étincelle","N'allez pas chercher vos enfants",
      "Pour vous informer, restez à l'écoute des autorités","N'encombrez pas les réseaux téléphoniques"]
  };
  inondations = {
      photo: 'assets/infos/inondation.jpg',
      titre: 'inondation',
      contenu: ["Rejoignez immédiatement un point haut, si possibleun étage élevé","Coupez l'electricité",
      "N'utilisez pas votre voiture","N'allez pas chercher vos enfants","N'evacuez que sur ordre des autorités",
          "N'encombrez pas les réseaux téléphoniques","Pour vous informer, restez à l'ecoute des autorités"]
    };
  urgences = {
      photo: 'assets/infos/urgence.jpg',
      titre: 'urgence',
      contenu: ["votre information","votre localisation","votre hydratation et votre nourriture","votre protection"]
  };
  seismes = {
      photo: 'assets/infos/seisme.svg',
      titre: 'séisme',
      contenu: ["Rejoignez immédiatement un abri lointain , si possible vers la mer","Coupez l'electricité",
          "N'utilisez pas votre voiture","N'allez pas chercher vos enfants","N'evacuez que sur ordre des autorités",
          "N'encombrez pas les réseaux téléphoniques","Pour vous informer, restez à l'ecoute des autorités"]
  };
  volcans = {
      photo: 'assets/infos/eruption.png',
      titre: 'eruption volcanique',
      contenu: ["Eloignez-vous de cette zone , si possible se metre dans un étage élevé","Coupez l'electricité",
          "N'utilisez pas votre voiture","N'allez pas chercher vos enfants","N'evacuez que sur ordre des autorités",
          "N'encombrez pas les réseaux téléphoniques","Pour vous informer, restez à l'ecoute des autorités"]
  };



  constructor(private activatedRouter: ActivatedRoute,private modalCtrl: ModalController,
              private router: Router) {

  }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
    this.page = this.activatedRouter.snapshot.paramMap.get('page');

    switch (this.page){
        case 'attentat' : this.informations = this.attentats;
            break;
        case 'nucleaire' : this.informations = this.nucleaires;
            break;
        case 'hydraulique' : this.informations = this.hybriques;
            break;
        case 'produit' : this.informations = this.produits;
            break;
        case 'inondation' : this.informations = this.inondations;
            break;
        case 'urgence' : this.informations = this.urgences;
            break;
        case 'seisme' : this.informations = this.seismes;
            break;
        case 'volcan' : this.informations = this.volcans;
            break;
    }
  }

  async onDetail(info:any){
    const modal = await this.modalCtrl.create({
        component: ReconnaissanceDetailPage,
        componentProps: {
            data: info
        }
    });

    modal.present();
  }

  retourPage(){
      this.router.navigateByUrl("/home");
  }

}
