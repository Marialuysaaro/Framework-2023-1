import { Component } from '@angular/core';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent {
  isError = false;
  isCorrect = false;

  name=""
  user = ""
  pwd = ""
  cpwd=""


  login(){

  if (this.name == "carol" && this.user == "carol@carol" && this.pwd == "carol" && this.cpwd == "carol" ) {
    this.isCorrect = true;
    this.isError = false;
  }
  else{
    this.isError = true;
    this.isCorrect = false;
  }




    console.log("Name = " + this.name + "User = " + this.user + " Password = " + this.pwd + "Cpwd = " + this.cpwd )
  }
  }
