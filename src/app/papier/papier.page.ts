import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-papier',
  templateUrl: './papier.page.html',
  styleUrls: ['./papier.page.scss'],
})
export class PapierPage implements OnInit {
  logo: any;
  slogan: string;
  data: any;

  constructor(private navParams: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
    this.data = this.navParams.get("donnee");
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
