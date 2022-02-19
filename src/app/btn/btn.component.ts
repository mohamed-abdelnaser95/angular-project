import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  pageTitle = "ITI"
  btnTitle = "Send";
  isLoading = false;
  getLoading(){
    this.btnTitle = "Loading..."
    this.isLoading = true
    setTimeout(()=>{
      this.isLoading = false
      this.btnTitle = "Send"
    },2000)
  }
}
