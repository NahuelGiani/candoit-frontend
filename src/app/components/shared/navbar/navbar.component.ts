import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    buscarZona(escrito:string){
      console.log(escrito);
    }

    buscarClimaPorCriterio(valor:string)
}
