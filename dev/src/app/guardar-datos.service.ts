import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GuardarDatosService {

  constructor(public http: Http) { }

  evniarDatosPantallaUno(data : any) :  Observable<Response>{
      return this.http.post('http://api.adceromoga.com/welcome/pantallaUno', data)
            .map(this.extractData)
            .catch(this.handleErrorObservable)
  }
  evniarDatosPantallaDos(data : any) :  Observable<Response>{
      return this.http.post('http://api.adceromoga.com/welcome/pantallaDos', data)
            .map(this.extractData)
            .catch(this.handleErrorObservable)
  }
  enviarCorreo(data : any) :  Observable<Response>{
      return this.http.post('http://api.adceromoga.com/welcome/enviarCorreo', data)
            .map(this.extractData)
            .catch(this.handleErrorObservable)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleErrorObservable (error: Response | any) {
    return Observable.throw(error.message || error);
  }
  private options(){
    let headers = new Headers({ 'Content-Type': 'text/plain'});
    return new RequestOptions({ headers: headers });
  }

}
