import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment.component';
import { commentGuard } from './guard/comment.guard';

const routes: Routes = [
  {
    path: '',
    component: CommentComponent,
    // resolve lets the component know to fetch the data and have it in hand before it renders the page
    // this keeps the user from seeing a blank page without data
    resolve: { comments: commentGuard },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}
