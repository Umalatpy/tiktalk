import {Route} from '@angular/router';
import {ChatsPageComponent} from './chats.component';
import {ChatsWorkspaceComponent} from './chats-workspace/chats-workspace.component';

export const chatsRoutes : Route [] = [
  {
    path: '',
    component: ChatsPageComponent,
    children: [
      {
        path: ':id',
        component: ChatsWorkspaceComponent,
      }
    ]
  }
]
