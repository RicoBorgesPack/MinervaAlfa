import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  teacher$ = this.http.get('http://localhost:3000/Teacher');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }/*teams$ = this.http.get('http://localhost:3000/Teacher');

  constructor(private http: HttpClient) {}*/

}
