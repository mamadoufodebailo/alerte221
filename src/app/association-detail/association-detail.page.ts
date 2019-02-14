import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-association-detail',
  templateUrl: './association-detail.page.html',
  styleUrls: ['./association-detail.page.scss'],
})
export class AssociationDetailPage implements OnInit {
  associations: any;

  constructor(private modal: ModalController, private navParams: NavParams) {

  }

  ngOnInit() {
    this.associations = this.navParams.get("data");
  }

  closeModal(){
    this.modal.dismiss();
  }

}
