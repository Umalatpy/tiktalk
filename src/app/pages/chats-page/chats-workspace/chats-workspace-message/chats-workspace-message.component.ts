import {Component, HostBinding, input} from '@angular/core';
import {Message} from '../../../../data/interfaces/chats.interface';
import {AvatarCircleComponent} from '../../../../common-ui/avatar-circle/avatar-circle.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-chats-workspace-message',
  imports: [
    AvatarCircleComponent,
    DatePipe
  ],
  templateUrl: './chats-workspace-message.component.html',
  styleUrl: './chats-workspace-message.component.scss'
})
export class ChatsWorkspaceMessageComponent {
  message = input.required<Message>()


  @HostBinding('class.is-mine')
  get isMine() {
    return this.message().isMine
  }
}
