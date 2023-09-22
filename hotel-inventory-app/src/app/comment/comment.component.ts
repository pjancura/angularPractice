import { Component } from '@angular/core';
import { CommentService } from './comment.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Comments } from './comment';

@Component({
  selector: 'hotelInv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {

  comments$ = this.commentService.getComments();

  // comment$ is utilizing the ResolveFn route Guard
  comment$ = this.activatedRoute.data.pipe(
    map((data) => data['comments'])
  );

  comments : Comments[] = [];

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {
     console.log("this.comment$:", this.comment$);
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.comments = data['comments'];
      console.log('comments ActivatedRoute:', data['comments']);
  });
  }
}
