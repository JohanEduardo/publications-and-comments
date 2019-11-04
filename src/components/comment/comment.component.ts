import { Component, Input } from '@angular/core';
import { Comment } from './../../core/models/comment';

@Component({
  selector: 'comment-root',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  
  @Input() comment: Comment;

}
