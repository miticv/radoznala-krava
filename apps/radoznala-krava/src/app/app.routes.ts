import { Route } from '@angular/router';
import { PrivacyComponent } from './privacy';
import { TermsComponent } from './terms';

export const appRoutes: Route[] = [
  {
    path: 'privacystatement',
    component: PrivacyComponent,
    title: 'Privacy Statement',
  },
  {
    path: 'termsofservice',
    component: TermsComponent,
    title: 'Terms of Service',
  },
  // Redirect unknown routes to home
  {
    path: '**',
    redirectTo: '',
  },
];
