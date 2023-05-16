import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { MainComponent } from './componentes/main/main.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MainComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    SkillsComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    BarraNavegacionComponent,
  ],
  imports: [
    //NgModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
