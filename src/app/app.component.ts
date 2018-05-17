import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyBqxB2A5Kx7s-UvX3KlSIG_9aWq4atITno",
      authDomain: "bibliotheque-cc779.firebaseapp.com",
      databaseURL: "https://bibliotheque-cc779.firebaseio.com",
      projectId: "bibliotheque-cc779",
      storageBucket: "bibliotheque-cc779.appspot.com",
      messagingSenderId: "782872614156"
    };
    firebase.initializeApp(config);
  }
}
