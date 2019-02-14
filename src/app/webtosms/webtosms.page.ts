import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment.prod';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-webtosms',
  templateUrl: './webtosms.page.html',
  styleUrls: ['./webtosms.page.scss'],
})
export class WebtosmsPage implements OnInit {
  logo: any;
  slogan: string;
  fgroup : FormGroup;
  message = 'Veuillez remplir le champs correctement';

  constructor(private router: Router,private fb: FormBuilder) {
    this.fgroup = this.fb.group({
        'prenoms': [null,Validators.required],
        'nom': [null,Validators.required],
        'telephone': [null,Validators.compose([Validators.required])],
        'email': [null,Validators.compose([Validators.required,Validators.email])]
    });
  }

  ngOnInit() {
    this.logo = environment.LOGO;
    this.slogan = environment.SLOGAN;
  }

  retourPage(){
    this.router.navigateByUrl("/home");
  }

  sendConfirm(websms:any) {

  }

}
