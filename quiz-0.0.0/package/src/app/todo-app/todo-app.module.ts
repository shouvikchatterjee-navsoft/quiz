import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppRoutingModule } from './todo-app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { TodoDataComponent } from './components/todo-data/todo-data.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [TodoDataComponent, TodoListComponent],
  imports: [
    CommonModule,
    TodoAppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatProgressBarModule
  ]
})
export class TodoAppModule { }
