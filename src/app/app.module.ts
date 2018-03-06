import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from 'ng2-redux';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoService } from './todo.service';
import { ITodoState, todoRoducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<ITodoState>) {
    ngRedux.configureStore(todoRoducer, INITIAL_STATE);
  }

}
