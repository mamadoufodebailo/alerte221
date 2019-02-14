import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {
  informations: any;

  constructor(private modal: ModalController,private navParams: NavParams,
              private documentViewer: DocumentViewer) {
  }

  ngOnInit() {
    this.informations = this.navParams.get('data');
  }

  closeModal(){
    this.modal.dismiss();
  }

  onpenFichier(fichier:any){
    const options : DocumentViewerOptions = {
      title : fichier.titre
    };

    this.documentViewer.viewDocument(fichier.chemin,'application/pdf',options);
  }

}
