import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ITour } from '../interfaces/tour';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable()
export class TourService {
  constructor(private http: HttpClient) { }


  getTours(): Observable<ITour[]> {
    return this.http.get<ITour[]>(API_URL + '/tour', AUTH);
  }
 
  deleteTour(id): Observable<ITour>{
    if(confirm('¿Eliminar tour?')){
      return this.http.delete<ITour>(API_URL + '/tour/' + id, AUTH);
    }
  }

  addTour(name, image, description, tickets, buses, dateinformations, places): Observable<ITour>{
    let obj = {
      name: name, 
      image: image,
      description: description, 
      tickets: tickets,
      buses: buses,
      dateinformations: dateinformations,
      places: places
    }
    return this.http.post<ITour>(API_URL + '/tour/add', obj, AUTH);
  }

  

  getByIdTour(id): Observable<ITour> {
    return this.http.get<ITour>(API_URL + '/tour/' + id, AUTH);
  }

  updateTour(name, image, description, tickets, buses, dateinformations, places, id): Observable<ITour> {
    let obj = {
      name: name, 
      image: image,
      description: description, 
      tickets: tickets,
      buses: buses,
      dateinformations: dateinformations,
      places: places
    };
    return this.http.put<ITour>(API_URL + '/tour/edit/' + id, obj, AUTH);
  }

}
