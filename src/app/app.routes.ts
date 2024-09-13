import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CustomizationComponent } from './customization/customization.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './settings/account/account.component';
import { MainSettingsComponent } from './settings/main-settings/main-settings.component';
import { PaymentsComponent } from './settings/payments/payments.component';

export const routes: Routes = [
  { path: '', component: TodoComponent }, // Home displays todo list
  { path: 'customization', component: CustomizationComponent },
  {
    path: 'settings', component: SettingsComponent, children: [
      { path: '', redirectTo: 'main-settings', pathMatch: 'full' },
      { path: 'main-settings', component: MainSettingsComponent },
      { path: 'account', component: AccountComponent },
      { path: 'payments', component: PaymentsComponent }
    ]
  },
  { path: '**', redirectTo: '' } // Wildcard route for invalid routes
];
