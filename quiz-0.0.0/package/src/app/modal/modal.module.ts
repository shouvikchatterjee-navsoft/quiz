import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRoutingModule } from './modal-routing.module';
import { ViewComponent } from './components/view/view.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [ViewComponent, ModalComponent],
  imports: [
    CommonModule,
    ModalRoutingModule,
  ]
})
export class ModalModule { }
