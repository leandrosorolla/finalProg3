import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { ModalComponent } from './componentes/modal/modal.component';


const routes: Routes = [
  {path: '', component: TablaComponent},
  {path: 'persona/:id', component: ModalComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
