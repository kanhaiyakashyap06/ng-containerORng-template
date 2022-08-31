import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngcontainerorngtemplate';
  list: any = [
    { id: 1, name: "Angular" },
    { id: 2, name: "React" },
    { id: 3, name: "Vue" },
    { id: 4, name: "React Native" },
    { id: 5, name: "Ionic" },
    { id: 6, name: "Swift" }
  ];
}
