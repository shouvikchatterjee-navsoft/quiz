import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SubChildComponent } from './components/sub-child/sub-child.component';
import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent, SubChildComponent, TestComponent],
  imports: [
    CommonModule,
    LifecycleRoutingModule,
    FormsModule
  ]
})
export class LifecycleModule { }
