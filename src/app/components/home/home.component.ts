import { Component, OnInit } from '@angular/core';
import { ClimaService, Clima, Weather } from '../../services/clima.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  climas: Clima[] = [];

  constructor( private climaService:ClimaService ){
  }

  ngOnInit(){
    this.climaService.getClima().subscribe(resp => this.climas = resp);
  }

}
