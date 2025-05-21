import {Component, input} from '@angular/core';
import {Profile} from '../../../../data/interfaces/profile.interface';
import {AvatarCircleComponent} from '../../../../common-ui/avatar-circle/avatar-circle.component';

@Component({
  selector: 'app-chats-workspace-header',
  imports: [
    AvatarCircleComponent
  ],
  templateUrl: './chats-workspace-header.component.html',
  styleUrl: './chats-workspace-header.component.scss'
})
export class ChatsWorkspaceHeaderComponent {
  profile = input.required<Profile>()
}
