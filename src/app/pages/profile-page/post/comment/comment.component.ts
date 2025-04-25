import {Component, input} from '@angular/core';
import {AvatarCircleComponent} from '../../../../common-ui/avatar-circle/avatar-circle.component';
import {Comment} from '../../../../data/interfaces/post.interface';

@Component({
  selector: 'app-comment',
  imports: [
    AvatarCircleComponent
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  comment = input<Comment>()
}
