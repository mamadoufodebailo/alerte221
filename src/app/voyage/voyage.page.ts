import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Voyage} from '../../modeles/Voyage';
import {DatePicker, DatePickerOptions} from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.page.html',
  styleUrls: ['./voyage.page.scss'],
})
export class VoyagePage implements OnInit {
  logo: any;
  slogan: string;
  message= "Remplissez correctement les champs !";
  fgroup: FormGroup;
  dateDepart: string;
  dateArrivee: string;
  voyage: Voyage = new Voyage();

  constructor(private router: Router,private fb: FormBuilder,private datePicker: DatePicker) {
    this.fgroup = fb.group({
        'passport' : [null,Validators.compose([Validators.required,Validators.pattern('[0-9]+')])],
        'destination' : [null,Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]+')])],
        'dateDepart' : [null,Validators.required],
        'dateArrivee' : [null,Validators.required],
        'type' : [null,Validators.required]
    });
  }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;

    this.fgroup.get('type').valueChanges.subscribe(e => {
        if (e == 'aerien'){
            document.getElementById('carte').style.display = 'none';
            document.getElementById('passport').style.display = 'block';
        }
        else {
            document.getElementById('carte').style.display = 'block';
            document.getElementById('passport').style.display = 'none';
        }
    });
  }

  retourPage(){
    this.router.navigateByUrl("/home");
  }

  async showDateDepart(){
    try {
      const options : DatePickerOptions = {
          date: new Date(),
          mode: 'date',
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      };

      this.voyage.dateDepart = await this.datePicker.show(options);

      this.dateDepart = this.voyage.dateDepart.getDay().toString()
          +"/"+this.voyage.dateDepart.getMonth().toString()
          +"/"+this.voyage.dateDepart.getFullYear().toString();

    }catch (e) {
      this.message = "L'impossible d'ouvrir la date";
    }
  }

    async showDateArrivee(){
        try {
            const options : DatePickerOptions = {
                date: new Date(),
                mode: 'date',
                androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
            };

            this.voyage.dateArrivee = await this.datePicker.show(options);

            this.dateArrivee = this.voyage.dateArrivee.getDay().toString()
                +"/"+this.voyage.dateArrivee.getMonth().toString()
                +"/"+this.voyage.dateArrivee.getFullYear().toString();

        }catch (e) {
            this.message = "L'impossible d'ouvrir la date";
        }
    }

    addVoyage(voyage: any){

    }

}
