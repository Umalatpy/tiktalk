import {Component, inject} from '@angular/core';
import {ChatsWorkspaceHeaderComponent} from './chats-workspace-header/chats-workspace-header.component';
import {
  ChatsWorkspaceMessagesWrapperComponent
} from './chats-workspace-messages-wrapper/chats-workspace-messages-wrapper.component';
import {MessageInputComponent} from '../../../common-ui/message-input/message-input.component';
import {ActivatedRoute} from '@angular/router';
import {ChatsService} from '../../../data/services/chats.service';
import {switchMap} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-chats-workspace',
  imports: [
    ChatsWorkspaceHeaderComponent,
    ChatsWorkspaceMessagesWrapperComponent,
    MessageInputComponent,
    AsyncPipe
  ],
  templateUrl: './chats-workspace.component.html',
  styleUrl: './chats-workspace.component.scss'
})
export class ChatsWorkspaceComponent {
  route = inject(ActivatedRoute)
  chatsService = inject(ChatsService)

  activeChat$ = this.route.params
    .pipe(
      switchMap( ({id}) => this.chatsService.getChatById(id))
    )

}
