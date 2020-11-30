import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService} from "src/app/Services/config.service";
import { Teacher } from 'src/app/Model/teacher';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  @Input() cardData: object = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

}