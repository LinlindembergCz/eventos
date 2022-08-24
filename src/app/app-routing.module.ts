import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './@bootstrap/security/auth.guard';
import { BlankComponent } from './@layout/blank/blank.component';
import { LayoutComponent } from './@layout/layout.component';

const routes: Routes = [
   {
     path: 'home',
     component: LayoutComponent,
     loadChildren: () => import('./@modules/home/home.module').then(m => m.HomeModule)
   },
  {
      path: '',
      redirectTo: 'home/index',
      pathMatch: 'full'
  },
  {
    path: 'user',
    component: LayoutComponent,
    loadChildren: () => import('./@modules/user/user.module').then(m => m.ProfileModule)
  }

];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false,
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: []
})


export class AppRoutingModule { }
