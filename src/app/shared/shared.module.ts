import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipePipe } from './pipes/shorten-pipe.pipe';
import { UserNamePipePipe } from './pipes/user-name-pipe.pipe';
import { TimeAgoPipePipe } from './pipes/time-ago-pipe.pipe';

@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipePipe,
    UserNamePipePipe,
    TimeAgoPipePipe,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    CommentsComponent,
    ReactiveFormsModule,
    ShortenPipePipe,
    UserNamePipePipe,
    TimeAgoPipePipe,
  ],
})
export class SharedModule {}
