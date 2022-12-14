import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'index',
      pathMatch: 'full'
    },
    {
      path: 'index',
      component: IndexComponent,
    },

 ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class HomeRountingModule { }
