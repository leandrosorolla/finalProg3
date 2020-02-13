import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../entidad/persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  miUrl = 'http://localhost:9001/api/v1/persona/';

  getAll(): Observable<Persona[]> {
    try {
      return this.http.get<Persona[]>(this.miUrl);
    } catch (error) {
      console.log(error);
    }
 }
 getOne(id: number): Observable<Persona> {
   try {
   return this.http.get<Persona>(this.miUrl + id);
   } catch (error) {
     console.log(error);
   }
  }
 delete(id: number): Observable<any> {
   try {
   return this.http.delete(this.miUrl + id);
   } catch (error) {
    console.log(error);
   }
  }
 post(persona: Persona): Observable<Persona> {
   try {
   return this.http.post<Persona>(this.miUrl, persona);
   } catch (error) {
     console.error();

   }
  }
 put(id: number, persona: Persona): Observable<Persona> {
   try {
   return this.http.put<Persona>(this.miUrl + id, persona);
   } catch (error) {
     console.error('error');

   }
  }

}
