import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Emp } from './emp';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html'
})
export class AddEmpComponent {
  submitted = false;
  model = new Emp('', null, null, []);
  date: NgbDateStruct;
  url = '/api/data';

  constructor(private calendar: NgbCalendar) { }

  addSkill() {
    this.model.addSkill('', 1);
  }

  onSubmit() {
    this.submitted = true;
    this.model.dob = new Date(this.date.year, this.date.month, this.date.day);
    console.log(JSON.stringify(this.model));
    (async () => {
      const rawResponse = await fetch(this.url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.model)
      });
      if (rawResponse.ok) {
        const content = await rawResponse.json();
        this.showAlert('success', 'Emp data saved!');
      } else {
        this.showAlert('danger', 'Something went wrong!');
      }
    })();
  }

  showAlert(level, message) {
    $('#alert').removeClass().addClass('alert alert-' + level).text(message);
    setTimeout(() => {
      $('#alert').addClass('d-none');
    }, 10000);
  }

}
