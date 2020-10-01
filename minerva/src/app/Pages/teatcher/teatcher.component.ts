import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@Angular/forms";

@Component({
  selector: 'app-teatcher',
  templateUrl: './teatcher.component.html',
  styleUrls: ['./teatcher.component.css']
})
export class TeacherFormComponent implements OnInit {
  form = new FormGroup({
      Username: new FormControl(''),
      email: new FormControl(''),
      wpp: new FormControl(''),
      bio: new FormControl(''),
      perhour: new FormControl(''),

      //new: new FormControl(''),
  })

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('Teacher').add({field:this.form})
    
  }
  onSubmit() {
    this.firestore.collection('Teacher').add({
      field: this.form
        //field: this.form.value.new,
    })
    .then(res => {
        console.log(res);
        this.form.reset();
    })
    .catch(e => {
        console.log(e);
    })
}

}
