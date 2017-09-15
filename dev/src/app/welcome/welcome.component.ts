import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarDatosService } from '../guardar-datos.service';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';

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
  public landing: string = "Goji_cream_long_ES";
  public formulario: FormGroup;
  public loading = false;
  public paises: any;

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
    localStorage.clear();
    this.service.buscarPais().subscribe(data => {
      this.paises = data
    }
  );
  }
  validate(formularioNombre: string): boolean {
    return !this.formulario.controls[formularioNombre].valid &&
            this.formulario.controls[formularioNombre].touched &&
            this.formulario.controls[formularioNombre].dirty;
  }
  guardar(data:any){
    if(data._status === 'VALID'){
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
    let errorRequest = false;
    this.service.enviarDatosPantallaUno(dataInit).subscribe(
      response => {
        console.log(response),
        this.loading = false
      },
      error => {
        errorRequest = true,
        this.loading = false
      },
      () => {
        if(!errorRequest){
          this.servicesEnviarCorreo(data)
        }
        this.loading = false
      });
  }
  servicesEnviarCorreo(data : any){
    this.loading = true;
    this.service.enviarCorreo(data).subscribe(
      response => {
        console.log(response),
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
    this.token = this.generateToken();
    localStorage.setItem('t', this.token);
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
