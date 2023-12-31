import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidemenuComponent } from './components/shared/sidemenu/sidemenu.component';
import { ContactFormComponent } from './components/contacts/contact-form/contact-form.component';
import { GeolocationComponent } from './components/contacts/geolocation/geolocation.component';
import { TokenInterceptor } from './core/guards/token.interceptor';
import { ProfileComponent } from './components/user/profile/profile.component';
import { InputMaskDirective } from './shared/directives/input-mask.directive';
import { PaginationComponent } from './components/shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    ContactsComponent,
    HeaderComponent,
    SidemenuComponent,
    ContactFormComponent,
    GeolocationComponent,
    ProfileComponent,
    InputMaskDirective,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: false,
      progressBar: true,
      enableHtml: true,
      extendedTimeOut: 2000,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
