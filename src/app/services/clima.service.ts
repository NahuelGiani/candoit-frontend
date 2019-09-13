import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ClimaService {

  climas:Clima[] = [];
  public url = 'http://localhost:8080/clima';

  constructor(private http: HttpClient ) {  }

  getClima() {
      return this.http.get('http://localhost:8080/clima');
  }

}

export interface Clima{
  dist: number;
  fid: number;
  int_number: number;
  lat: string;
  lid: number;
  lon: string;
  name: string;
  province: string;
  updated: number;
  weather: Weather;
  zoom: string;
  tipoClima: string;
}

export interface Weather{
  description: string;
  humidity: number;
  pressure: number;
  temp: number;
  visibility: number;
  wind_speed: number;
}
