import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InconnuPage } from './inconnu.page';
import {IonicSelectableModule} from 'ionic-selectable';

const routes: Routes = [
  {
    path: '',
    component: InconnuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
      IonicSelectableModule,
      ReactiveFormsModule
  ],
  declarations: [InconnuPage]
})
export class InconnuPageModule {}
