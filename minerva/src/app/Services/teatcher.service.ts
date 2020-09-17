import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TeatcherService {

  constructor() {
    const form = new FormGroup({        
      teatcherName: new FormControl(''),
      wppNumber: new FormControl(''),
      nationality: new FormControl(''), 
      email: new FormControl(''), 
      language: new FormControl(''), 
      daysAvaliable: new FormControl(''),
      perHour: new FormControl(''),
      hoursAvaliable: new FormControl(''),
      completed: new FormControl(false)
  })
   }
}
