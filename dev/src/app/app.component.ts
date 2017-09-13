import { Component, OnInit } from '@angular/core';
import { GuardarDatosService } from './guardar-datos.service';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public nombre: string = '';
    public pais: string = '';
    public telefono: string = '';
    public navigator: Navigator;
    public formulario: FormGroup;

    constructor(public formBuilder: FormBuilder,
                public service: GuardarDatosService){
          this.formulario = this.formBuilder.group({
            'nombre' : ["", Validators.required],
            'pais' : ["", Validators.required],
            'telefono': ["", Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
          });
          this.pais = 'ES';

    }
    ngOnInit(){

    }
    guardar(data:any){
      console.log(data)
    }
    _keyPress(event: any) {
      const pattern = /[0-9()\+\- ]/;
      let inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
}
