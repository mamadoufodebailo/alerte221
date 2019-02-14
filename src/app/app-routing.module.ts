import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
  {
      path: 'home',
      loadChildren: './home/home.module#HomePageModule'
  },
  {
      path: 'inscription',
      loadChildren: './inscription/inscription.module#InscriptionPageModule'
  },
  {
      path: 'inconnu',
      loadChildren: './inconnu/inconnu.module#InconnuPageModule' },
  {
      path: 'cni',
      loadChildren: './cni/cni.module#CniPageModule'
  },
  {
      path: 'reconnaissance/:page',
      loadChildren: './reconnaissance/reconnaissance.module#ReconnaissancePageModule'
  },
  {
      path: 'information',
      loadChildren: './information/information.module#InformationPageModule'
  },
  {
      path: 'naissance',
      loadChildren: './naissance/naissance.module#NaissancePageModule'
  },
  {
      path: 'deces',
      loadChildren: './deces/deces.module#DecesPageModule'
  },
  {
      path: 'propos',
      loadChildren: './propos/propos.module#ProposPageModule'
  },
  {
      path: 'ambassade',
      loadChildren: './ambassade/ambassade.module#AmbassadePageModule'
  },
  {
      path: 'video',
      loadChildren: './video/video.module#VideoPageModule'
  },
  {
      path: 'service',
      loadChildren: './service/service.module#ServicePageModule'
  },
  {
      path: 'connexion/:page',
      loadChildren: './connexion/connexion.module#ConnexionPageModule'
  },
  {
      path: 'voyage',
      loadChildren: './voyage/voyage.module#VoyagePageModule'
  },
  {
      path: 'resident',
      loadChildren: './resident/resident.module#ResidentPageModule'
  },
  {
      path: 'webtosms',
      loadChildren: './webtosms/webtosms.module#WebtosmsPageModule'
  },
  {
      path: 'ministre',
      loadChildren: './ministre/ministre.module#MinistrePageModule'
  },
  {
      path: 'dgse',
      loadChildren: './dgse/dgse.module#DgsePageModule'
  },
  {
      path: 'association',
      loadChildren: './association/association.module#AssociationPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
