import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
    NgFor
  ]
})
export class CommentModule { }
