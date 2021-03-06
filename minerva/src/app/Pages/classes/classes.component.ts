import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService} from "src/app/Services/config.service";
import { Teacher } from 'src/app/Model/teacher';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  teacher$ = this.http.get('http://localhost:3000/Teacher');
  teacher = new Teacher();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

}