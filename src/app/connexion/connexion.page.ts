import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Connexion} from '../../modeles/Connexion';
import {Inscription} from '../../modeles/Inscription';
import {IonicSelectableComponent} from 'ionic-selectable';
import {DatePicker, DatePickerOptions} from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  logo: any;
  slogan: string;
  mode: string;
  page: string;
  date: string;
  message = "Veuillez remplir correctement le champ !";
  Cgroup: FormGroup;
  Igroup: FormGroup;
  connexion: Connexion = new Connexion();
  inscription: Inscription = new Inscription();
  @ViewChild('selectSexe')
  selectComponent : IonicSelectableComponent;
  sexe = [
      {
          id: 'F',
          name: 'Feminin'
      },
      {
          id: 'M',
          name: 'Masculin'
      }
  ];

  constructor(private router: Router,private fb: FormBuilder,private activatedRoute: ActivatedRoute,
              private datePicker: DatePicker) {
    this.Cgroup = fb.group({
        'login' : [null,Validators.required],
        'password' : [null,Validators.compose([Validators.required,Validators.min(5)])]
    });

    this.Igroup = this.fb.group({
        'prenoms' : [null,Validators.required],
        'nom' : [null,Validators.required],
        'sexe' : [null,Validators.required],
        'dateNaissance' : [null,Validators.required],
        'email' : [null,Validators.compose([Validators.required,Validators.email])],
        'numero' : [null,Validators.required]
    });

  }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
    this.mode = 'connexion';
    this.page = this.activatedRoute.snapshot.paramMap.get('page');
  }

  retourPage(){
    this.router.navigateByUrl("/home");
  }

  async showDatePicker(){
    try{
      const datePickerOptions: DatePickerOptions = {
          date: new Date(),
          mode: 'date',
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      };

      this.inscription.dateNaissance = await this.datePicker.show(datePickerOptions);

      this.date = this.inscription.dateNaissance.getDay().toString()
          + "/"+this.inscription.dateNaissance.getMonth().toString()
          + "/" + this.inscription.dateNaissance.getFullYear().toString();
    }catch (e) {
      console.error(e);
    }
  }

  sexeChanged(event:{component:IonicSelectableComponent,value: any}){
    this.inscription.sexe = event.value.id;
  }

  connecter(){
    if (this.page == 'touki'){
        this.router.navigateByUrl('/voyage');
    }else {
        this.router.navigateByUrl('/resident');
    }
  }

  inscrire(){
      if (this.page == 'touki'){
          this.router.navigateByUrl('/voyage');
      }else {
          this.router.navigateByUrl('/resident');
      }
  }

  getConnexion(){
    this.mode = 'connexion';
  }

  getInscription(){
    this.mode = 'inscription';
  }

}
