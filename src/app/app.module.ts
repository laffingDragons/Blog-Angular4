import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// router module
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {  AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogViewComponent,
    BlogEditComponent,
    BlogCreateComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'blog/:blogId', component:BlogViewComponent},
      {path:'create', component:BlogCreateComponent}, 
      {path:'about', component:AboutComponent}, 
      {path:'edit/:blogId', component:BlogEditComponent},
      {path:'**', component:NotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
