import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './task/task.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HomeComponent, TasksComponent, NavbarComponent],

  imports: [BrowserModule, AppRoutingModule, TaskComponent, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
