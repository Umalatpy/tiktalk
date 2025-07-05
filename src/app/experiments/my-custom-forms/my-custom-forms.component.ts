import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {NoReactValidator} from './no-react.validator';

@Component({
  selector: 'app-my-custom-forms',
  imports: [
    RouterOutlet,
    FormsModule,
    JsonPipe,
    NoReactValidator
  ],
  templateUrl: './my-custom-forms.component.html',
  styleUrl: './my-custom-forms.component.scss'
})
export class MyCustomFormsComponent {
  person = {
    name: '',
    lastName: '',
    address: {
      city: '',
      street: '',
      building: 0,
    },
  }
  hobby: '' | undefined

  onChange(value: string) {
    console.log(value)
    this.person.name = value

  }

  onSubmit(form: NgForm) {
    console.log(form)
    console.log(form.value)
    // //@ts-ignore
    // console.log(window.ng.getDirectives(event.target)[2].value)
  }

  protected readonly NgForm = NgForm;
}
