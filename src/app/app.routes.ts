import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { canActivateAuth } from './auth/access.guard';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {chatsRoutes} from './pages/chats-page/chatsRoutes';
import {ChatsPageComponent} from './pages/chats-page/chats.component';
import {GetSubsComponent} from './experiments/get-subs/get-subs.component';
import {MyCustomFormsComponent} from './experiments/my-custom-forms/my-custom-forms.component';
import {MyExperimentsComponent} from './experiments/my-experiments/my-experiments.component';
import {ReactiveFormComponent} from './experiments/reactive-form/reactive-form.component';

export const routes: Routes = [
    {path: '', component:LayoutComponent, children: [
        {path: '', redirectTo: 'profile/me', pathMatch: 'full'},
        {path: 'profile/:id', component:ProfilePageComponent},
        {path: 'settings', component: SettingsPageComponent},
        {path: 'search', component: SearchPageComponent},
        {path: 'subs', component: GetSubsComponent},
        {path: 'myCustomForms', component: MyCustomFormsComponent},
        {
          path: 'chats',
          loadChildren: () => chatsRoutes
        },
        {path: 'experiments', component: MyExperimentsComponent},
        {path: 'experiments/reactive-form', component: ReactiveFormComponent},
        {path: 'experiments/custom-form', component: ReactiveFormComponent},
      ],
    canActivate: [canActivateAuth]
    },
    {path: 'login', component:LoginPageComponent}
];



