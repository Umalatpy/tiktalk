import {Component, inject} from '@angular/core';
import {ChatsBtnComponent} from '../chats-btn/chats-btn.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChatsService} from '../../../data/services/chats.service';
import {AsyncPipe} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-chats-list',
  imports: [
    ChatsBtnComponent,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './chats-list.component.html',
  styleUrl: './chats-list.component.scss'
})
export class ChatsListComponent {
  chatsservice = inject(ChatsService)

  chats$ = this.chatsservice.getMyChats()
}
