import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-ambassade-detail',
  templateUrl: './ambassade-detail.page.html',
  styleUrls: ['./ambassade-detail.page.scss'],
})
export class AmbassadeDetailPage implements OnInit {
  logo: any;
  slogan: string;
  embassy: any;

  constructor(private modalCtrl: ModalController,private navParams: NavParams) { }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
    this.embassy = this.navParams.get('data');
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
