import { Component } from '@angular/core';
import {ChatsWorkspaceMessageComponent} from '../chats-workspace-message/chats-workspace-message.component';

@Component({
  selector: 'app-chats-workspace-messages-wrapper',
  imports: [
    ChatsWorkspaceMessageComponent
  ],
  templateUrl: './chats-workspace-messages-wrapper.component.html',
  styleUrl: './chats-workspace-messages-wrapper.component.scss'
})
export class ChatsWorkspaceMessagesWrapperComponent {

}
