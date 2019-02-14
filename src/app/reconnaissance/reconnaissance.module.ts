import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReconnaissancePage } from './reconnaissance.page';

const routes: Routes = [
  {
    path: '',
    component: ReconnaissancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReconnaissancePage]
})
export class ReconnaissancePageModule {}
