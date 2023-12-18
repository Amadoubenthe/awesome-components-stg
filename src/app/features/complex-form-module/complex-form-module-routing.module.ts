import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexFormComponent } from './complex-form/complex-form.component';

const routes: Routes = [
  { path: '', component: ComplexFormComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplexFormModuleRoutingModule {}
