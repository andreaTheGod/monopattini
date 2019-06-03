import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  name:string ;
  pwd:string;

  submit(nome : HTMLInputElement, pwd : HTMLInputElement ){
    this.name = nome.value;
    this.pwd = pwd.value;
     this.http
       this.http.post('https://node25.codenvy.io:35000/register',
    {
      username : nome.value,
      password : pwd.value
    }
    ).subscribe((data)=> {console.log(data)} );
  }



  }


