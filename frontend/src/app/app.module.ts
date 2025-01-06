import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';  // Asegúrate de que se importe el módulo de enrutamiento
import { CreateProjectComponent } from './create-project/create-project.component';  // Asegúrate de que esté importado correctamente
import { CommonModule } from '@angular/common';  // Necesario para *ngFor
import { FormsModule } from '@angular/forms';  // Usamos FormsModule para ngModel
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,  // Necesario para *ngFor
    FormsModule,
    DragDropModule,  // Para ngModel y formularios
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
