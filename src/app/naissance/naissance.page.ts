import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Acte} from '../../modeles/Acte';
import {DatePicker, DatePickerOptions} from '@ionic-native/date-picker/ngx';
import {IonicSelectableComponent} from 'ionic-selectable';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-naissance',
  templateUrl: './naissance.page.html',
  styleUrls: ['./naissance.page.scss'],
})
export class NaissancePage implements OnInit {
    @ViewChild('myselect')
    selectComponent: IonicSelectableComponent;
    logo: any;
    slogan: string;
    acte: Acte = new Acte();
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

    constructor(private datePicker: DatePicker,private toastCtrl: ToastController,
                private router: Router) {
    }

    sexeChanged(event:{component:IonicSelectableComponent,value:any}){

    }

    ngOnInit() {
        this.logo = environment.LOGO;
        this.slogan = environment.SLOGAN;
    }

    acteNaissance(naissance:any) {

    }

    async onClose(){
      const toast = await this.toastCtrl.create({
          message: 'Sexe selectionner',
          duration: 1000
      });

      toast.present();
    }

    async showDatePicker(){
      try{
        const datePickerOptions: DatePickerOptions = {
          date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };

        await this.datePicker.show(datePickerOptions).then(data => {
            this.acte.dateNaissance = data;
        });
      }catch (e) {
          console.error(e);
      }
    }

    openSelect(){
      this.selectComponent.open();
    }

    retourPage(){
        this.router.navigateByUrl("/home");
    }

}