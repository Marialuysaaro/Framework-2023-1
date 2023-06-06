import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  nome = 'Carol';
  count = 0;


sub(){
this.count--;
}

soma(){
this.count++;
}

}  
