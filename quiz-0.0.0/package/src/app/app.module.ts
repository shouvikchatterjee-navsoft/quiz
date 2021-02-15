import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TestComponent } from './components/test/test.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DynamicReactiveComponent } from './components/dynamic-reactive/dynamic-reactive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { ChildComponent } from './components/child/child.component';
import { ModalModule } from './modal/modal.module';
import { ModalComponent } from './components/modal/modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { PipeComponent } from './components/pipe/pipe.component';
import { ColorDirective } from './color.directive';
import { LoginComponent } from './security/login.component';
import { LogoutComponent } from './security/logout/logout.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { SowmitComponent } from './components/sowmit/sowmit.component';
import { ItemComponent } from './components/item/item.component';
import { CartComponent } from './components/cart/cart.component';
import { OutputComponent } from './components/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    TestComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    NotFoundComponent,
    DynamicReactiveComponent,
    FormArrayComponent,
    TodoComponent,
    TodoListComponent,
    ChangeDetectionComponent,
    ChildComponent,
    ModalComponent,
    LoaderComponent,
    PipeComponent,
    ColorDirective,
    LoginComponent,
    LogoutComponent,
    MyCompComponent,
    SowmitComponent,
    ItemComponent,
    CartComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ModalModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
