import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Emp } from './emp';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html'
})
export class EditEmpComponent implements OnInit, OnDestroy {
  model = new Emp('', null, null, []);
  date: NgbDateStruct;
  url = '/api/data';
  id: number;
  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
      this.fetchEmpById(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  constructor(private calendar: NgbCalendar, private route: ActivatedRoute) { }

  addSkill() {
    this.model.addSkill('', 1);
  }

  fetchEmpById(id) {
    fetch(`${this.url}/${id}`)
      .then(response => response.json())
      .catch(err => {
        console.log('error', err);
      })
      .then(data => {
        this.model.name = data.name;
        this.model.salary = data.salary;

        this.model.dob = new Date(data.dob);
        this.date = { day: this.model.dob.getUTCDay(), month: this.model.dob.getUTCMonth(), year: this.model.dob.getUTCFullYear() };

        data.skills.forEach(skill => {
          this.model.addSkill(String(skill.name), Number(skill.rating));
        });
      });
  }

  onSubmit() {
    this.model.dob = new Date(this.date.year, this.date.month, this.date.day);
    console.log(this.model);
    (async () => {
      const rawResponse = await fetch('/api/data', {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.model)
      });
      const content = await rawResponse.json();
      if (rawResponse.ok) {
        this.showAlert('success', 'Emp data modified!');
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
