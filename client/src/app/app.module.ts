import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListEmpComponent } from './list-emp.component';
import { AddEmpComponent } from './add-emp.component';
import { EditEmpComponent } from './edit-emp.component';
import { FilterEmpPipe } from './filter-emp.pipe';
import { SkillSetPipe } from './skill-set.pipe';

const appRoutes: Routes = [
  { path: '', component: ListEmpComponent },
  { path: 'add', component: AddEmpComponent },
  { path: 'edit/:id', component: EditEmpComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmpComponent,
    AddEmpComponent,
    EditEmpComponent,
    FilterEmpPipe,
    SkillSetPipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
