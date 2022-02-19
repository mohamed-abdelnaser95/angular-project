import { Component, OnInit } from '@angular/core';
import { GetDoctorService } from '../../../Services/get-doctor.service'
import { GetDoctor } from '../models/DoctorDb';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.scss']
})
export class ShowDeleteComponent implements OnInit {


  id: any;
  doctors: GetDoctor[] = []

  constructor(private GetDoctorService: GetDoctorService, private _activedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.gitInfo(),
      this.id = this._activedRoute.snapshot.paramMap.get('id')
  }
  public deleteData(id: any) {
    this.GetDoctorService.deleteData(id).subscribe(

      res => { window.location.reload() },
      err => { console.log(err) },

    )
  };

  public gitInfo() {
    this.GetDoctorService.gitInfo().subscribe({
      next: (response) => {
        console.log(response.data);
        this.doctors = response.data
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
