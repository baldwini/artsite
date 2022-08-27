import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'artsite';
  
  constructor(private router: Router){
  }

  goToHome(){
    this.router.navigate(['']);
  }
  goToGallery(){
    this.router.navigate(['/', 'gallery']);
  }
  goToAbout(){
    this.router.navigate(['/', 'about']);
  }
  goToContact(){
    this.router.navigate(['/', 'contact']);
  }
}
