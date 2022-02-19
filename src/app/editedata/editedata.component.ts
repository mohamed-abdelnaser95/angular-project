import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GetDoctorService } from 'Services/get-doctor.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editedata',
  templateUrl: './editedata.component.html',
  styleUrls: ['./editedata.component.scss']
})
export class EditedataComponent implements OnInit {
  id: any;
  myForm?: any;
  constructor(private fb: FormBuilder,
    private _doctorServices: GetDoctorService, private _activedRoute: ActivatedRoute,
    private _router: Router) { }
  ngOnInit(): void {

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      // password: ['', [Validators.required, Validators.minLength(8)]],
      discription: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      specialization: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      fees: ['', [Validators.required]],
      // available: ['', [Validators.required]],
    })
    this.id = this._activedRoute.snapshot.paramMap.get('id');

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
    this._doctorServices.edite(this.id, this.myForm.value).subscribe(
      res => { this._router.navigate(['alldata']) },
      err => {
        console.log(err)
      }
    )
  }

}
