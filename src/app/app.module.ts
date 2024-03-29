import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { FixtureDetectChangeComponent } from './fixture-detect-change/fixture-detect-change.component';
import { HandleEventComponent } from './handle-event/handle-event.component';
import { RequestComponent } from './request/request.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsynchronousComponentComponent } from './asynchronous-component/asynchronous-component.component';
import { AutoDetectChangeComponent } from './auto-detect-change/auto-detect-change.component';
import { ConceptsTestsComponent } from './concepts-tests/concepts-tests.component';
import { DebuggerTestsComponent } from './debugger-tests/debugger-tests.component';
import { FixProblemsComponent } from './fix-problems/fix-problems.component';
import { HomeComponent } from './home/home.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { MatchersJasmineComponent } from './matchers-jasmine/matchers-jasmine.component';
import { MockServiceComponent } from './mock-service/mock-service.component';
import { SpyonComponent } from './spyon/spyon.component';
import { StubServiceComponent } from './stub-service/stub-service.component';
import { StubComponent } from './stub/stub.component';

import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { HoverFocusDirective } from './hover-focus.directive';
import { HttpPipe } from './http.pipe';
import { IntegrationUnitTestingComponent } from './integration-unit-testing/integration-unit-testing.component';
import { LoginComponent } from './login/login.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { SpyOnPropertyComponent } from './spy-on-property/spy-on-property.component';
import { TestingDirectiveComponent } from './testing-directive/testing-directive.component';
import { TestingPipesDirectiveRouteComponent } from './testing-pipes-directive-route/testing-pipes-directive-route.component';
import { TestingRouteComponent } from './testing-route/testing-route.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    TestingComponentComponent,
    FixtureDetectChangeComponent,
    HandleEventComponent,
    FillFormComponent,
    InputOutputComponent,
    AutoDetectChangeComponent,
    ConceptsTestsComponent,
    DebuggerTestsComponent,
    AsynchronousComponentComponent,
    MatchersJasmineComponent,
    MockServiceComponent,
    StubServiceComponent,
    StubComponent,
    HomeComponent,
    SpyonComponent,
    FixProblemsComponent,
    HttpPipe,
    TestingPipesDirectiveRouteComponent,
    DashboardComponent,
    LoginComponent,
    TestingDirectiveComponent,
    HoverFocusDirective,
    FormLoginComponent,
    TestingRouteComponent,
    ExtratoComponent,
    IntegrationUnitTestingComponent,
    MenuDropdownComponent,
    SpyOnPropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
