import { Component, OnInit } from '@angular/core';
import {ConfigService} from 'src/app/Services/config.service'
import {Teacher} from 'src/app/Model/teacher'
@Component({
  selector: 'app-teatcher',
  templateUrl: './teatcher.component.html',
  styleUrls: ['./teatcher.component.css']
})
export class TeacherFormComponent implements OnInit {
  teacher = new Teacher();
  teachers:Teacher[];

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.refresh();
    
  }
  refresh() {
    this.configService.getTeachers()
      .subscribe(data => {
        console.log(data)
        this.teachers=data;
      })      
 
  }
  onSubmit() {
    this.configService.addTeacher(this.teacher)
      .subscribe(data => {
        console.log(data)
        this.refresh();
      })      
  }

}
