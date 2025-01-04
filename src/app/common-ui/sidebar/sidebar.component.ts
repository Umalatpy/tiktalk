import {Component, inject} from '@angular/core';
import {SvgIconComponent} from '../svg-icon/svg-icon.component';
import {AsyncPipe, JsonPipe, NgForOf} from '@angular/common';
import {SubscriberCardComponent} from './subscriber-card/subscriber-card.component';
import {RouterLink} from '@angular/router';
import {ProfileService} from '../../data/services/profile.service';
import {Observable} from 'rxjs';
import {Pageble} from '../../data/interfaces/pageble.interface';
import {Profile} from '../../data/interfaces/profile.interface';

@Component({
    selector: 'app-sidebar',
  imports: [
    SvgIconComponent,
    NgForOf,
    SubscriberCardComponent,
    RouterLink,
    AsyncPipe,
  ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService)

  subscribers$ = this.profileService.getSubscribersShortList()

  me = this.profileService.me
  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: ''
    },
    {
      label: 'Чаты',
      icon: 'chats',
      link: 'chats'
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search'
    }
  ]
}
