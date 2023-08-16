import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipePipe } from './pipes/shorten-pipe.pipe';

@NgModule({
  declarations: [CommentsComponent, ShortenPipePipe],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    CommentsComponent,
    ReactiveFormsModule,
    ShortenPipePipe,
  ],
})
export class SharedModule {}
