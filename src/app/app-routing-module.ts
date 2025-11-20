import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Login as loginComponent } from './login/login';
const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario-module').then(m => m.UsuarioModule)
  },
  {
    path:'login',
    component: loginComponent
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos-module').then(m => m.ProductosModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras-module').then(m => m.ComprasModule)
  }
  ,{
    path: '',
    component: Home
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
