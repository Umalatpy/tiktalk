import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sub} from './get-subs/sub.interface';
import { Profile } from '../data/interfaces/profile.interface';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient)
  baseApiUrl = 'https://icherniakov.ru/yt-course/'
  me = signal<Profile | null> (null)

  getTestSubs() {
    return this.http.get<Sub[]>(`${this.baseApiUrl}account/test_accounts`)
  }
  getMe() {
    return this.http.get<Profile>( `${this.baseApiUrl}account/me`)
      .pipe(
        tap(res => this.me.set(res))
      )
  }
}
