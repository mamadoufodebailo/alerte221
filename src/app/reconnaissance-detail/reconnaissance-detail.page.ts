import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-reconnaissance-detail',
  templateUrl: './reconnaissance-detail.page.html',
  styleUrls: ['./reconnaissance-detail.page.scss'],
})
export class ReconnaissanceDetailPage implements OnInit {
  information: any;

  constructor(private modalCtrl: ModalController,private navParams: NavParams) { }

  ngOnInit() {
    this.information = this.navParams.get("data");
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
