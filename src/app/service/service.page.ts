import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {environment} from '../../environments/environment.prod';
import {ServiceDetailPage} from '../service-detail/service-detail.page';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  logo: any;
  slogan: string;
  libelle: string;
  informations = [
      {
          titre : 'voyage',
          libelle : 'Voyages à l’extérieur du Sénégal',
      },
      {
          titre : 'privileges',
          libelle : 'Privilèges et immunités diplomatiques',
      },
      {
          titre : 'demarches',
          libelle : 'Vos demarches administratives',
      },
      {
          titre : 'guide',
          libelle : 'Guide douanier du voyageur',
      },
      {
          titre : 'vivre',
          libelle : 'Vivre au Sénégal',
      },
      {
          titre : 'visite',
          libelle : 'Entrer au Sénégal',
      },
      {
          titre : 'etat-civil',
          libelle : 'Le Centre de l’Etat civil, des Archives et de la Documentation diplomatiques',
      }
  ];

  constructor(private activatedRouter: ActivatedRoute,private modalCtrl: ModalController,
              private router: Router) { }

  ngOnInit() {
      this.logo = environment.LOGO;
      this.slogan = environment.SLOGAN;
  }

  onPageDetail(info: any){
      let resultat;

      switch (info.titre){
          case 'voyage' : resultat = [
              {
                  'titre' : info.libelle,
                  'chemin' : 'assets/fichiers/voyage/voyage.pdf'
              }
          ];
              break;
          case 'guide' : resultat = [
              {
                  'titre' : info.libelle,
                  'chemin' : 'assets/fichiers/guide/guide-douanier.pdf'
              }
          ];
              break;
          case 'visite' : resultat = [
              {
                  'visite' : info.libelle,
                  'chemin' : 'assets/fichiers/visite/visite.pdf'
              }
          ];
              break;
          case 'etat-civil' : resultat = [
              {
                  'titre' : info.libelle,
                  'chemin' : 'assets/fichiers/etat-civil/etat civil.pdf'
              }
          ];
              break;
          case 'privileges' : resultat = [
              {
                  'titre' : 'PRIVILEGES ET IMMUNITES DIPLOMATIQUES',
                  'chemin' : 'assets/fichiers/privileges/protocole-privileges-et-immunites-diplomatiques.pdf'
              },
              {
                  'titre' : 'SERVICE AU CORPS DIPLOMATIQUE',
                  'chemin' : 'assets/fichiers/privileges/protocole-service-au-corps-diplomatique.pdf'
              }
          ];
              break;
          case 'demarches' : resultat = [
              {
                  'titre' : 'Demander l’immatriculation consulaire d’un Sénégalais résidant à l’étranger',
                  'chemin' : 'assets/fichiers/demarches/immatriculation-consulaire_0.pdf'
              },
              {
                  'titre' : ' Demander la transcription d’un acte d’état civil (acte de naissance, ' +
                  'acte de mariage, acte de décès) auprès des services consulaires',
                  'chemin' : 'assets/fichiers/demarches/transcription-dun-acte-detat-civil_0.pdf'
              },
              {
                  'titre' : 'Demander l’établissement de passeport ordinaire pour un ressortissant ' +
                  'sénégalais résidant à l’étranger',
                  'chemin' : 'assets/fichiers/demarches/demander-detablissement-de-passeport-ordinaire_0.pdf'
              },
              {
                  'titre' : 'Demander l’établissement de sauf-conduit pour un ressortissant sénégalais résidant à l’étranger',
                  'chemin' : 'assets/fichiers/demarches/demander-detablissement-de-sauf-conduit_0.pdf'
              },
              {
                  'titre' : 'Demander un regroupement familial',
                  'chemin' : 'assets/fichiers/demarches/demander-de-regroupement-familial_0.pdf'
              },
              {
                  'titre' : 'Demander un Certificat de déménagement pour les Sénégalais établis à l’étranger',
                  'chemin' : 'assets/fichiers/demarches/demander-un-certificat-de-demenagement_0.pdf'
              },
              {
                  'titre' : 'Authentification des diplômes par le Ministère des Affaires étrangères',
                  'chemin' : 'assets/fichiers/demarches/authentification-des-diplomes_0.pdf'
              },
              {
                  'titre' : 'Demander un passeport diplomatique au Ministère des Affaires Etrangères',
                  'chemin' : 'assets/fichiers/demarches/demande-de-passeport-diplomatique_0.pdf'
              },
              {
                  'titre' : 'Demander un passeport de service au Ministère des Affaires Etrangères',
                  'chemin' : 'assets/fichiers/demarches/demander-un-passeport-de-service_0.pdf'
              }
          ];
              break;
      }

      return resultat;
  }

  async openPage(information: any){
      const modal = await this.modalCtrl.create({
         component: ServiceDetailPage,
         componentProps: {
             data : this.onPageDetail(information)
         }
      });

      modal.present();
  }

  retourPage(){
    this.router.navigateByUrl("/home");
  }

}
