
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Account} from "../account.model";


@Component({
  selector: 'app-fullform',
  templateUrl: './fullform.component.html',
  styleUrls: ['./fullform.component.css']
})


export class FullformComponent implements OnInit {

  @ViewChild("drivenform") drivenform!: NgForm;
  // account :Account[] =[];

  constructor() { 
  
  }

  ngOnInit(): void {
    
  }
  onSubmit(useData:{firstname:string,lastname:string,username:string,password:string}){
    console.log(useData)
  }



  // veriables for form
  

}
