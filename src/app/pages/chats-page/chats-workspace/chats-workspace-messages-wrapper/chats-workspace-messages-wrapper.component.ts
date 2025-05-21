import {Component, inject, input, signal} from '@angular/core';
import {ChatsWorkspaceMessageComponent} from '../chats-workspace-message/chats-workspace-message.component';
import {MessageInputComponent} from '../../../../common-ui/message-input/message-input.component';
import {ChatsService} from '../../../../data/services/chats.service';
import {Chat, Message} from '../../../../data/interfaces/chats.interface';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-chats-workspace-messages-wrapper',
  imports: [
    ChatsWorkspaceMessageComponent,
    MessageInputComponent
  ],
  templateUrl: './chats-workspace-messages-wrapper.component.html',
  styleUrl: './chats-workspace-messages-wrapper.component.scss'
})
export class ChatsWorkspaceMessagesWrapperComponent {
  chatsService = inject(ChatsService)

  chat = input.required<Chat>()

  messages = signal<Message[]>([])

  ngOnInit() {
    this.messages.set(this.chat().messages)
  }

  async onSendMessage(messageText: string) {
    await firstValueFrom(this.chatsService.sendMessage(this.chat().id, messageText))

    const chat = await firstValueFrom(this.chatsService.getChatById(this.chat().id))

    this.messages.set(chat.messages)
  }
}
