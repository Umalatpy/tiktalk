import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ChatsWorkspaceHeaderComponent} from './chats-workspace-header/chats-workspace-header.component';
import {
  ChatsWorkspaceMessagesWrapperComponent
} from './chats-workspace-messages-wrapper/chats-workspace-messages-wrapper.component';
import {MessageInputComponent} from '../../../common-ui/message-input/message-input.component';

@Component({
  selector: 'app-chats-workspace',
  imports: [
    RouterOutlet,
    ChatsWorkspaceHeaderComponent,
    ChatsWorkspaceMessagesWrapperComponent,
    MessageInputComponent
  ],
  templateUrl: './chats-workspace.component.html',
  styleUrl: './chats-workspace.component.scss'
})
export class ChatsWorkspaceComponent {

}
