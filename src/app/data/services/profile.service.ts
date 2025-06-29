import { HttpClient } from '@angular/common/http';
import {inject, Injectable, signal} from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import {map, Observable, pipe, tap} from 'rxjs';
import {Pageble} from '../interfaces/pageble.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http: HttpClient = inject(HttpClient)

  baseApiUrl: string = 'https://icherniakov.ru/yt-course/'

  me = signal<Profile | null> (null)
  filteredProfiles = signal<Profile[]>([])

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }
  getMe(): Observable<Profile> {
    return this.http.get<Profile>( `${this.baseApiUrl}account/me` )
      .pipe(
          tap(res => this.me.set(res))
      )
  }
  getAccount(id:string) {
    return this.http.get<Profile>(`${this.baseApiUrl}account/${id}`)
  }

  getSubscribersShortList(subsAmount = 3): Observable<any> {
  return this.http.get<Pageble<Profile>>( `${this.baseApiUrl}account/subscribers/`)
    .pipe(
      map(res => res.items.slice(0, subsAmount))
    )
  }

  patchProfile(profile: Partial<Profile>) {
    return this.http.patch<Profile>(
      `${this.baseApiUrl}account/me`,
      profile
    )
  }

  uploadAvatar(file: File) {
    const fd: FormData = new FormData()
    fd.append('image', file)
    return this.http.post<Profile>(
      `${this.baseApiUrl}account/upload_image`,
      fd
    )
  }

  filterProfiles(params: Record<string, any>)  {
    return this.http.get<Pageble<Profile>>(
      `${this.baseApiUrl}account/accounts`,
        {
        params
      }

    ).pipe(
      tap(res => this.filteredProfiles.set(res.items))
    )
  }

}
