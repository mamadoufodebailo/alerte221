import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Citoyen} from '../../modeles/Citoyen';
import {IonicSelectableComponent} from 'ionic-selectable';
import {AlertController, ToastController} from '@ionic/angular';
import {DatePicker, DatePickerOptions} from '@ionic-native/date-picker/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inconnu',
  templateUrl: './inconnu.page.html',
  styleUrls: ['./inconnu.page.scss'],
})
export class InconnuPage implements OnInit {
  @ViewChild('myselect')
  selectComponent : IonicSelectableComponent;
  logo: any;
  date: string;
  slogan: string;
  photo: string;
  citoyen: Citoyen = new Citoyen();
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
  fgroup: FormGroup;

  constructor(private toastCtrl: ToastController,private datePicker: DatePicker,
              private camera: Camera,private alertCtrl: AlertController,
              private fb: FormBuilder) {
      this.fgroup = this.fb.group({
          'prenoms' : [null,Validators.required],
          'nom' : [null,Validators.required],
          'sexe' : [null,Validators.required],
          'dateNaissance' : [null,Validators.required],
          'lieuNaissance' : [null,Validators.required],
          'telephone' : [null,Validators.required],
          'prenomPere' : [null,Validators.required],
          'prenomMere' : [null,Validators.required],
          'nomMere' : [null,Validators.required],
          'pays' : [null,Validators.required],
          'adresse' : [null,Validators.required]
      });
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

  takePhoto(options: any){
      this.camera.getPicture(options).then(data=> {
         this.photo = 'data:image/png;base64,'+data;
      }).catch(error=> {
          console.log("Impossible d'ouvrir la camera !")
      });
  }

  async showPhoto(){
      const optionsCamera: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.PNG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.CAMERA
      };

      const optionsGalerie: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.PNG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      };

      const alert = await this.alertCtrl.create({
        header: "Type de source",
        buttons: [
            {
                text: 'Photo',
                handler: ()=> {
                    this.takePhoto(optionsCamera);
                }
            },
            {
                text: 'Galerie',
                handler: ()=> {
                    this.takePhoto(optionsGalerie);
                }
            }
        ]
      });

      alert.present();
  }

  async showDatePicker(){
      try {
          const datePickerOptions : DatePickerOptions = {
              date: new Date(),
              mode: 'date',
              androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
          };

          this.citoyen.dateNaissance = await this.datePicker.show(datePickerOptions);

          this.date = this.citoyen.dateNaissance.getDay().toString()
              +"/"+this.citoyen.dateNaissance.getMonth().toString()
              +"/"+this.citoyen.dateNaissance.getFullYear().toString();
      }catch (e) {
          console.log(e);
      }
  }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  inscrire(inconnu:any){

  }

}
