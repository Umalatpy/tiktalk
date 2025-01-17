import {Component, effect, inject} from '@angular/core';
import {ProfileHeaderComponent} from '../../common-ui/profile-header/profile-header.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProfileService} from '../../data/services/profile.service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-settings-page',
  imports: [
    ProfileHeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {
  fb = inject(FormBuilder)
  profileservice = inject(ProfileService)
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{value:'', disabled:true}, Validators.required],
    description: [''],
    stack: ['']
  })

  constructor() {
    effect(() => {
      // @ts-ignore
      this.form.patchValue({
        ...this.profileservice.me(),
        // @ts-ignore
        stack: this.mergeStack(this.profileservice.me()?.stack)
      })
    });
  }

  onSave() {
    this.form.markAllAsTouched()
    this.form.updateValueAndValidity()

    if (this.form.invalid) return
    // @ts-ignore
    firstValueFrom(this.profileservice.patchProfile({
      ...this.form.value,
      stack: this.splitStack(this.form.value.stack)
    }))
  }
  splitStack(stack: string | null | string[] | undefined): string[] {
    if (!stack) return []
    if (Array.isArray(stack)) return stack

    return stack.split(',')
  }

  mergeStack(stack: string | null | string[] | undefined) {
    if (!stack) return ''
    if (Array.isArray(stack)) return stack.join(',')

    return stack
  }

}
