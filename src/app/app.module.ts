import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Account} from "./account.model";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullformComponent } from './fullform/fullform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  

// import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FullformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,  
    HttpClientModule, 
    
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
