import {Component, inject, Input, signal} from '@angular/core';
import {ApiService} from '../api.service';
import {Sub} from './sub.interface';
import {ImgUrlPipe} from '../../helpers/pipes/img-url.pipe';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-get-subs',
  imports: [
    ImgUrlPipe,
    JsonPipe,
  ],
  templateUrl: './get-subs.component.html',
  styleUrl: './get-subs.component.scss'
})
export class GetSubsComponent {

  apiService = inject(ApiService)
  subs:Sub[] = []
  @Input() Sub!: []
  constructor() {
    this.apiService.getTestSubs().subscribe(value => {
      this.subs = value
    })
  }
}
