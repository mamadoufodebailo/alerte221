import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DecesPage } from './deces.page';
import {IonicSelectableModule} from 'ionic-selectable';

const routes: Routes = [
  {
    path: '',
    component: DecesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
      IonicSelectableModule
  ],
  declarations: [DecesPage]
})
export class DecesPageModule {}
