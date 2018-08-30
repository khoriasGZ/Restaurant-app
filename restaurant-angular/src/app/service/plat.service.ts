import { Injectable } from '@angular/core';
import { Plat } from '../content/model/Plat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  plats : Observable <Plat[]>

  constructor(private http : HttpClient) { }

  getPlats(){
    this.plats = this.http.get<Plat[]>('http://localhost:8080/Plats')
  }

  getPlat(id): Observable<Plat> {
    return this.http.get<Plat>("http://localhost:8080/Plats/" + id);
  }

  addPlat(plat : Plat){
    this.http.post("http://localhost:8080/Plats/", plat).subscribe();
  }
  
}
