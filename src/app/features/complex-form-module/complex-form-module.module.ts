import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexFormModuleRoutingModule } from './complex-form-module-routing.module';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComplexFormService } from './services/complex-form.service';

@NgModule({
  declarations: [ComplexFormComponent],
  imports: [CommonModule, ComplexFormModuleRoutingModule, SharedModule],
  providers: [ComplexFormService],
})
export class ComplexFormModuleModule {}
