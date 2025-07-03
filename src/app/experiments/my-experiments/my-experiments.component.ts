import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-my-experiments',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './my-experiments.component.html',
  styleUrl: './my-experiments.component.scss'
})
export class MyExperimentsComponent {

}
