import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {PapierPageModule} from './papier/papier.module';
import {IonicSelectableModule} from 'ionic-selectable';
import {DatePicker} from '@ionic-native/date-picker/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {InformationDetailPageModule} from './information-detail/information-detail.module';
import {AmbassadeDetailPageModule} from './ambassade-detail/ambassade-detail.module';
import {ReconnaissanceDetailPageModule} from './reconnaissance-detail/reconnaissance-detail.module';
import {ServiceDetailPageModule} from './service-detail/service-detail.module';
import {DocumentViewer} from '@ionic-native/document-viewer/ngx';
import {AssociationDetailPageModule} from './association-detail/association-detail.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
      PapierPageModule,
      IonicSelectableModule,
      InformationDetailPageModule,
      AmbassadeDetailPageModule,
      ReconnaissanceDetailPageModule,
      ServiceDetailPageModule,
      AssociationDetailPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      DatePicker,
      Camera,
      Geolocation,
      DocumentViewer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
