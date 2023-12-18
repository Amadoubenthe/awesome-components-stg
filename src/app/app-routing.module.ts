import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'complex-form', pathMatch: 'full' },
  {
    path: 'social-media',
    loadChildren: () =>
      import('./features/social-media/social-media.module').then(
        (m) => m.SocialMediaModule
      ),
  },
  {
    path: 'complex-form',
    loadChildren: () =>
      import('./features/complex-form-module/complex-form-module.module').then(
        (m) => m.ComplexFormModuleModule
      ),
  },
  { path: '**', redirectTo: 'social-media' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
