import { Component, OnInit } from '@angular/core';
import { GetDoctorService } from '../../../Services/get-doctor.service'
import { GetDoctor } from '../models/DoctorDb';
@Component({
  selector: 'app-vezeta-cards',
  templateUrl: './vezeta-cards.component.html',
  styleUrls: ['./vezeta-cards.component.scss']
})
export class VezetaCardsComponent implements OnInit {

  image:any= Math.floor(Math.random() * 5)+1      
  
  doctors: GetDoctor[] = []

  constructor(private GetDoctorService: GetDoctorService) { }

  ngOnInit(): void {
    this.gitInfo()
  }

  public gitInfo() {
    this.GetDoctorService.gitInfo().subscribe({
      next:(response) => {
        console.log(response.data);
        this.doctors = response.data
      },
      error:(error) => {
        console.log(error);
      }
    })
  }

}



// infoArr = [
//   {
//     name: "Mohamed Ezz",
//     image: "5",
//     rating: "4.5",
//     phone: "0103938489",
//     specialization: "Dentst",
//     place: "Egypt cairo"
//   },
//   {
//     name: "Ali hamada",
//     image: "2",
//     rating: "4",
//     phone: "0129338489",
//     specialization: "ear and nose",
//     place: "Egypt Mansoura"
//   },
//   {
//     name: "Mostafa ziad",
//     image: "3",
//     rating: "3",
//     phone: "0112938489",
//     specialization: "Urologist",
//     place: "Egypt Alixandria"
//   },
//   {
//     name: "Sara Ezz",
//     image: "1",
//     rating: "3.5",
//     phone: "012392333",
//     specialization: "Dentst",
//     place: "Egypt cairo"
//   }
// ]