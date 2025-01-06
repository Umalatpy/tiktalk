import { Pipe } from '@angular/core';

@Pipe({
  name: 'imgUrl',
  standalone: true
})
export class ImgUrlPipe  {

  transform(value: string | null): string | null {
    if (!value) {return null;}
    return `https://icherniakov.ru/yt-course/${value}`;
  }

}
