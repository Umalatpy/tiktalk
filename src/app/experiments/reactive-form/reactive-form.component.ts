import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  form = new FormGroup({})
  protected readonly SubmitEvent = SubmitEvent;

  onSubmit($event: SubmitEvent) {
    console.log($event)
  }
}
