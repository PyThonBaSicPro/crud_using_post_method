
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account} from "../account.model";


@Component({
  selector: 'app-fullform',
  templateUrl: './fullform.component.html',
  styleUrls: ['./fullform.component.css']
})


export class FullformComponent implements OnInit {

  // @ViewChild("drivenform") drivenform!: NgForm;

  constructor() { 
  }

  ngOnInit(): void {
  }

  



  usersForm:any;
  onSubmitForm(data:Account){
    console.log(data)
  }



  

}
