import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarDatosService } from '../guardar-datos.service';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import {TooltipModule} from "ngx-tooltip";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public nombre: string = '';
  public pais: string = '';
  public telefono: string = '';
  public token: string = '';
  public email: string = "jeremyfys25@gmail.com";
  public mensajePantallaUno: string = "1";
  public mensajePantallaDos: string = "2";
  public landing: string = '';
  public navigator: Navigator;
  public formulario: FormGroup;
  public loading = false;
  public paises: any = {};

  constructor(public formBuilder: FormBuilder,
              public service: GuardarDatosService,
              public router: Router){
        this.formulario = this.formBuilder.group({
          'nombre' : ["", Validators.required],
          'pais' : ["", Validators.required],
          'telefono': ["", Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
        });
        this.pais = 'ES';

  }
  ngOnInit(){
    this.service.buscarPais().subscribe(data => {
      this.paises = data
    }
  );

  }
  validateNombre(): boolean {
    return !this.formulario.controls['nombre'].valid && this.formulario.controls['nombre'].touched;
  }
  validatePhone(): boolean {
    return !this.formulario.controls['telefono'].valid && this.formulario.controls['telefono'].touched;
  }
  guardar(data:any){
    if(data._status === 'VALID'){
      let email = "jeremyfys25@gmail.com";
      let mensajePantallaUno = "1";
      let data = this.initJsonPantallaUno();
      this.servicesPantallaUno(data);


    }else{
      for (let i in this.formulario.controls) {
        this.formulario.controls[i].markAsTouched();
        this.formulario.controls[i].markAsDirty();
      }
    }
  }
  servicesPantallaUno(dataInit: any){
    let data = this.initJsonCorreo(this.mensajePantallaUno);
    this.loading = true;
    this.service.enviarDatosPantallaUno(dataInit).subscribe(
      response => {
        this.loading = false
      },
      error => {
        this.loading = false
      },
      () => {
        this.loading = false,
        this.servicesEnviarCorreo(data)
      });
  }
  servicesEnviarCorreo(data : any){
    this.loading = true;
    this.service.enviarCorreo(data).subscribe(
      response => {
        this.loading = false
      },
      error => {
        this.loading = false
      },
      () => {
        this.loading = false,
         this.router.navigate(['offer'])
       });
  }
  initJsonPantallaUno() : any{
    this.landing = "Goji_cream_long_ES";
    this.token = this.generateToken();
    let data = {
      landing_page: this.landing,
      country: this.pais,
      nombre: this.nombre,
      telefono: this.telefono,
      token: this.token
    }
    return data;
  }
  initJsonCorreo(mensaje: string) : any{
    this.landing = "Goji_cream_long_ES";
    this.token = this.generateToken();
    let data = {
      landing_page: this.landing,
      country: this.pais,
      nombre: this.nombre,
      telefono: this.telefono,
      destinatario: this.email,
      mensaje: mensaje,
      token: this.token
    }
    return data;
  }
  generateToken(){
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

   for (var i = 0; i < 25; i++)
     text += possible.charAt(Math.floor(Math.random() * possible.length));

     return text;
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
