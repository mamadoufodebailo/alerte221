import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {DatePicker, DatePickerOptions} from '@ionic-native/date-picker/ngx';
import {Deces} from '../../modeles/Deces';
import {IonicSelectableComponent} from 'ionic-selectable';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-deces',
  templateUrl: './deces.page.html',
  styleUrls: ['./deces.page.scss'],
})
export class DecesPage implements OnInit {
  @ViewChild('myselect')
  selectComponent: IonicSelectableComponent;
  logo: any;
  slogan: string;
  deces: Deces = new Deces();
  sexe = [
      {
        id: 'F',
          name: 'Féminin'
      },
      {
        id: 'M',
          name: 'Masculin'
      }
      ];

  constructor(private datePicker: DatePicker,private toastCtrl: ToastController) { }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  acteDeces(deces:any){

  }

  sexeChanged(event:{component: IonicSelectableComponent,value: any}){

  }

  async onClose(){
    const toast = await this.toastCtrl.create({
        message: 'Sexe selectionner',
        duration: 1000
    });

    toast.present();
  }

  async showDatePicker(){
    try {
      const datePickerOptions : DatePickerOptions = {
        date: new Date(),
          mode: 'date',
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      };

      await this.datePicker.show(datePickerOptions).then(data => {
        this.deces.dateNaissance = data;
        });
      }catch (e) {
      console.log(e);
      }
  }

  openSelect(){
    this.selectComponent.open();
  }

}
