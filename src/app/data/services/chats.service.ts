import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  http = inject(HttpClient)
  baseApiUrl = 'https://icherniakov.ru/yt-course/'
  chatsUrl = `${this.baseApiUrl}/chat/`
  messageUrl = `${this.baseApiUrl}/message/`

  createChat(userId: number) {
    return this.http.post(`${this.chatsUrl}${userId}`, {})
  }

  getMyChats( ) {
    return this.http.get(`${this.chatsUrl}get_my_chats/`)
  }

  getChatById( chatId: number ) {
    return this.http.get(`${this.chatsUrl}${chatId}`)
  }

  sendMessage(chatId: number, message: string) {
    return this.http.post(`${this.messageUrl}${chatId}`, {},  {
      params: {
        message
      }
    })
  }
}
