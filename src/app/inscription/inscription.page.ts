import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Membre} from '../../modeles/Membre';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  logo: any;
  slogan: string;
  membre: Membre = new Membre();
  date: string;
  fgroup: FormGroup;

  constructor(private router: Router,private fb: FormBuilder) {
    this.fgroup = this.fb.group({
        'passport' : [null,Validators.compose([Validators.required,Validators.pattern("[0-9]+")])],
        'telephone' : [null,Validators.compose([Validators.required,Validators.pattern("[0-9]+")])],
        'pays' : [null,Validators.required],
        'adresse' : [null,Validators.required]
    });
  }

  ngOnInit() {
      this.logo = environment.LOGO;
      this.slogan = environment.SLOGAN;
  }

  inscrire(inscription:any){

  }

  retourPage(){
    this.router.navigateByUrl("/home");
  }

}
