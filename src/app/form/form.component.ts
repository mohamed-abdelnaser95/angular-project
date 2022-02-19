import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GetDoctorService } from 'Services/get-doctor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm?: any;
  constructor(private fb: FormBuilder,
    private _doctorServices: GetDoctorService,
    private _router: Router) { }


  ngOnInit(): void {

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      discription: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      specialization: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      fees: ['', [Validators.required]],
      // available: ['', [Validators.required]],
    })

  }
  get name() {
    return this.myForm.get('name');
  }
  get discription() {
    return this.myForm.get('discription');
  }
  get phone() {
    return this.myForm.get('phone');
  }
  get specialization() {
    return this.myForm.get('specialization');
  }
  get rate() {
    return this.myForm.get('rate');
  }
  get fees() {
    return this.myForm.get('fees');
  }
  onSubmit() {
    this._doctorServices.adddata(this.myForm.value).subscribe(
      res => { this._router.navigate(['alldata']) },
      err => {
        console.log(err)
      }
    )
  }

}
