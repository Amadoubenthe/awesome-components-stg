import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule],
})
export class AppModule {}

@NgModule({
  declarations: [CommentsComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [MaterialModule, CommentsComponent, ReactiveFormsModule],
})
export class SharedModule {}
