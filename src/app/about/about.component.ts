import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public exampleService: ExampleService) { }

  ngOnInit() {
  }

}
