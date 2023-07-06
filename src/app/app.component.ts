import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poolchem my new site';
  myarray = ["pool", "spielzeug"]
  selectedOption = 0
  cities: { name: string, code: string }[] = [ { name: "newyork", code: "abc"}, { name: "berlin", code: "def"}];
  selectedCity = this.cities[0];
}
