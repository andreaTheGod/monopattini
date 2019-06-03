import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Monopattino } from './monopattino.model';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {

  public lat;
  public lng;

  public ngOnInit(): void {

  }
  constructor(public http : HttpClient){
    this.getLocation();
    this.getMonopattini();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getMonopattini(){
    this.http.get<Monopattino>('https://node13.codenvy.io:32787/monopattini').subscribe(result=>{
      console.log(result);
    })
  };


}
