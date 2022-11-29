import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
  private dogUrl = 'https://dog.ceo/api/breeds/image/random'

  
  
  constructor(private http:HttpClient) {
  }
  getDog():Observable<Dog>{
    return this.http.get<Dog>(this.dogUrl);
  }
}
