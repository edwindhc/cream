import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarDatosService } from '../guardar-datos.service';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  public count: string = '';
  public street: string = '';
  public house: string = '';
  public entrance: string = '';
  public floor: string = '';
  public apartment: string = '';
  public city: string = '';
  public postal_code: string = '';
  public comment: string = '';
  public token: string = '';
  public email: string = "jeremyfys25@gmail.com";
  public mensajePantallaDos: string = "2";
  public message: boolean = false;

  public formulario2: FormGroup;
  public loading = false;

  constructor(public formBuilder: FormBuilder,
              public service: GuardarDatosService,
              public elem: ElementRef,
              public router: Router){
        this.formulario2 = this.formBuilder.group({
          'count' : ["", Validators.required],
          'street' : ["", Validators.required],
          'house' : ["", Validators.required],
          'entrance' : ["", Validators.required],
          'floor' : ["", Validators.required],
          'apartment' : ["", Validators.required],
          'city' : ["", Validators.required],
          'postal_code' : ["", Validators.required],
          'comment' : ["", Validators.required]
        });
        this.count = '3';
  }

  ngOnInit() {
  }
  validate(formularioNombre: string): boolean {
    return !this.formulario2.controls[formularioNombre].valid &&
            this.formulario2.controls[formularioNombre].touched &&
            this.formulario2.controls[formularioNombre].dirty;
  }
  changeCount(val: any){
    if(val == 'li1'){
      this.count = '1';
      document.getElementById('li2').classList.remove('active')
      document.getElementById('li3').classList.remove('active')
    }else if(val == 'li2'){
      this.count = '3';
      document.getElementById('li1').classList.remove('active')
      document.getElementById('li3').classList.remove('active')
    }else{
      this.count = '5';
      document.getElementById('li1').classList.remove('active')
      document.getElementById('li2').classList.remove('active')
    }
  }
  guardar(data: any){
    if(data._status === 'VALID'){
      let data = this.initJsonPantallaUno();
      this.servicesPantallaDos(data);
    }else{
      document.getElementById('mensaje').style.display = 'block';
      setTimeout(function(){
        document.getElementById('mensaje').style.display = 'none';
        this.message = false;
      }, 3000);
      for (let i in this.formulario2.controls) {
        this.formulario2.controls[i].markAsTouched();
        this.formulario2.controls[i].markAsDirty();
      }
    }
  }
  servicesPantallaDos(dataInit: any){
    let data = this.initJsonCorreo(this.mensajePantallaDos);
    this.loading = true;
    let errorRequest = false;
    console.log(dataInit),
    this.service.enviarDatosPantallaDos(dataInit).subscribe(
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
    console.log(data),
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
        localStorage.clear();
         this.router.navigate([''])
       });
     }
     initJsonPantallaUno() : any{
       this.token = localStorage.getItem('t');
       let data = {
         count_select: this.count,
         street: this.street,
         house: this.house,
         entrance: this.entrance,
         floor: this.floor,
         apartment: this.apartment,
         city: this.city,
         postal_code: this.postal_code,
         comment: this.comment,
         token: this.token

       }
       return data;
     }
     initJsonCorreo(mensaje: string) : any{
       let data = {
         count_select: this.count,
         street: this.street,
         house: this.house,
         entrance: this.entrance,
         floor: this.floor,
         apartment: this.apartment,
         city: this.city,
         postal_code: this.postal_code,
         comment: this.comment,
         destinatario: this.email,
         mensaje: mensaje,
         token: this.token
       }
       return data;
     }
}
