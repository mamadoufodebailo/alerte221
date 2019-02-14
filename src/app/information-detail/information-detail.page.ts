import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-information-detail',
  templateUrl: './information-detail.page.html',
  styleUrls: ['./information-detail.page.scss'],
})
export class InformationDetailPage implements OnInit {
  information: any;

  constructor(private navParams: NavParams,private modalCtrl: ModalController) {
    this.information = this.navParams.get('data');
  }

  ngOnInit() {

  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
