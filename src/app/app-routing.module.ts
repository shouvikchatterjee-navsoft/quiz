import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodoComponent } from './components/todo/todo.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { ViewComponent } from './modal/components/view/view.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'todoApp',
    loadChildren: () => import('./todo-app/todo-app.module').then(m => m.TodoAppModule)
  },
  {
    path: 'modal',
    component: ViewComponent,
    outlet:'other'
    // loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule)
  },
  {
    path: 'todoProsen',
    component: TodoComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'change',
    component: ChangeDetectionComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'lifecycle',
    loadChildren: () => import('./lifecycle/lifecycle.module').then(m => m.LifecycleModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }