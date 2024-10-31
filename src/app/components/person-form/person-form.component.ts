import { Component } from '@angular/core';
import { PersonDto } from '../../models/person.dto';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export class PersonFormComponent {
  sexList = ['Hombre', 'Mujer'];
  knowList = ['Google', 'Amigo', 'Profesor'];
  person = new PersonDto('', '', 0, '', '', '', '', '');
  confirmPassword = '';
  submitted = false;

  constructor() {}

  addPerson() {
    console.log(this.person);
    this.submitted = true;
  }
}
