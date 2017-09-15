import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GuardarDatosService {

  constructor(public http: Http) { }

  enviarDatosPantallaUno(data : any) :  Observable<Response>{
    console.log(data)
      return this.http.post('http://api.adceromoga.com/welcome/pantallaUno', JSON.stringify(data), this.options())
            .map(res => res.text())
            .catch(this.handleErrorObservable)
  }
  enviarDatosPantallaDos(data : any) :  Observable<Response>{
      return this.http.post('http://api.adceromoga.com/welcome/pantallaDos', data, this.options())
            .map(res => res.text())
            .catch(this.handleErrorObservable)
  }
  enviarCorreo(data : any) :  Observable<Response>{
      return this.http.post('http://api.adceromoga.com/welcome/enviarCorreo', data, this.options())
            .map(res => res.text())
            .catch(this.handleErrorObservable)
  }
  buscarPais() :  Observable<Response>{
      return this.http.get('https://restcountries.eu/rest/v2/region/Americas?fields=name;alpha2Code')
            .map(res => res.json())
            .catch(this.handleErrorObservable);
  }

  private handleErrorObservable (error: Response | any) {
    return Observable.throw(error.message || error);
  }
  private options(){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    return new RequestOptions({ headers: headers });
  }

}
