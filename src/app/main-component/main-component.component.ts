import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import axios, { AxiosRequestConfig } from 'axios';
import { ModalJugadorComponent } from '../modal-jugador/modal-jugador.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  variable: number;
  jugadores = [];
  juegosFechaMal = [];
  juegos = [];
  juegosAscenso = [];
  juegosCopa = [];
  juegosAmistoso = [];
  liga = 'Ascenso MX';
  options = {
    "Accept": "application/json;"
  };

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    
  }

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  parseObject(obj) {
    for(var key in obj)
    {
       console.log("key: " + key + ", value: " + obj[key])
       if(obj[key] instanceof Object)
       {
         this.parseObject(obj[key]);
       }
    }
   }

  accionSidenav(seleccionada: number){
    switch(seleccionada){
      case 1:{
        axios.get('https://venados.dacodes.mx/api/games', {
          headers: {
            Accept: 'application/json'
          }
        }).then((response) => {        
          this.juegos = response.data.data.games;
          this.juegosAscenso = this.juegos.filter(function(e) {
            return e.league === 'Ascenso MX';
          });
          this.juegosCopa = this.juegos.filter(function(e) {
            return e.league === 'Copa MX';
          });
          this.juegosAmistoso = this.juegos.filter(function(e) {
            return e.league === 'Amistoso';
          });
        });
        this.sidenav.close();
        this.variable = 1;
        break;
      }
      case 2:{
        axios.get('https://venados.dacodes.mx/api/statistics', {
          headers: {
            Accept: 'application/json'
          }
        }).then((response) => {
          console.log(response.data.data.statistics);
        });
        this.sidenav.close();
        this.variable = 2;
        break;
      }
      case 3:{
        axios.get('https://venados.dacodes.mx/api/players', {
          headers: {
            Accept: 'application/json'
          }
        }).then((response) => {
          this.jugadores = 
          response.data.data.team.centers.concat(
            response.data.data.team.coaches.concat(
              response.data.data.team.defenses.concat(
                response.data.data.team.forwards.concat(
                  response.data.data.team.goalkeepers
                )
          )));
        });
        this.sidenav.close();
        this.variable = 3;
        break;
      }
      default:{

      }
    }
  }

  openModal(jugador): void {
    console.log(jugador);
      const dialogRef = this.dialog.open(ModalJugadorComponent, {
        width: '500px',
        data: {name: jugador.name, birth_place: jugador.birth_place,
          birthday: jugador.birthday, first_surname: jugador.first_surname,
          height: jugador.height, image: jugador.image,
          last_team: jugador.last_team, number: jugador.number,
          position: jugador.position, position_short: jugador.position_short,
          second_surname: jugador.second_surname, weight: jugador.weight}
    });
  }
}
