import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AmbassadeDetailPage } from './ambassade-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AmbassadeDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AmbassadeDetailPage]
})
export class AmbassadeDetailPageModule {}
