import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixProblemsComponent } from './fix-problems/fix-problems.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StubComponent } from './stub/stub.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DebuggerTestsComponent } from './debugger-tests/debugger-tests.component';
import { RequestComponent } from './request/request.component';
import { MatchersJasmineComponent } from './matchers-jasmine/matchers-jasmine.component';

@NgModule({
  declarations: [
    AppComponent,
    FixProblemsComponent,
    StubComponent,
    DebuggerTestsComponent,
    RequestComponent,
    MatchersJasmineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
