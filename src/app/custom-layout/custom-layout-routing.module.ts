import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RuralDevelopmentComponent } from './modules/municipality/rural-development/rural-development.component';
import { CustomLayoutComponent } from './custom-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    data: { title: 'Rural Development And Traditional Land Management' }
  },
  {
    path: 'municipality/rural-development',
    component: RuralDevelopmentComponent,
    data: { title: 'Rural Development And Traditional Land Management' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CustomLayoutRoutingModule { }
