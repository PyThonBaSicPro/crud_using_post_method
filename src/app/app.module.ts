import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Account} from "./account.model";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullformComponent } from './fullform/fullform.component';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FullformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
