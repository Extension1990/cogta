import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: VexRoutes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/pages/login/login.module').then(m => m.LoginModule),
    data: { title: 'Login' }
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/pages/login/login.module').then(m => m.LoginModule),
    data: { title: 'Login' }
  },
  {
    path: 'app',
    loadChildren: () => import('./custom-layout/custom-layout.module').then(m => m.CustomLayoutModule),
    data: { title: 'app' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
  })],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule {
}
