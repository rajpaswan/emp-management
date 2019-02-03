import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html'
})
export class ListEmpComponent {
  title = 'Employee Management';
  employees = [];
  filter = new FormControl('');
  url = '/api/data';

  public constructor(private route: ActivatedRoute, private router: Router) {
    this.fetchEmps();
  }

  fetchEmps() {
    fetch(this.url)
      .then(response => response.json())
      .catch(err => {
        console.log('error', err);
      })
      .then(data => {
        this.employees = data;
      });
  }

  editEmp(id) {
    this.router.navigate(['/edit', id]);
  }

  deleteEmp(id) {
    fetch(`${this.url}/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .catch(err => {
        console.log('error', err);
      })
      .then(data => {
        this.showAlert('success', 'Emp data deleted successfully!');
      });
  }

  showAlert(level, message) {
    $('#alert').removeClass().addClass('alert alert-' + level).text(message);
    setTimeout(() => {
      $('#alert').addClass('d-none');
    }, 10000);
  }
}
