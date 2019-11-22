import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableComponent } from './components/my-table/my-table.component';
import { TableBasicExample } from './components/table/table-basic-example.component';
import { RegistrationPage } from './components/reistration-page/registration-page.component';

const routes: Routes = [
  {
    path: 'table',
    component: MyTableComponent
  },
  {
    path: 'some',
    component: TableBasicExample,
  },
  {
    path: 'registration',
    component: RegistrationPage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
