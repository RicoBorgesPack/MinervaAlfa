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
      completed: new FormControl(false)
      //new: new FormControl(''),
  })

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    this.firestore.collection('Teacher').add({...form.value})
    .then(res => { // res here, is the document reference;
        this.firestore.collection('Teacher').doc(res.id).update({id: docRef.id}); // Do this to keep the id in the document, it´s usefull to further edition. 
        console.log(res);
        this.form.reset();
    })
    .catch(e => {
        console.log(e);
    })
    
    /*this.firestore.collection('Teacher').add({
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
}*/

}
