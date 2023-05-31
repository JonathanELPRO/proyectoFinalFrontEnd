import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './paginas/posts/posts.component';
import { HeaderComponent } from './elementos/header/header.component';
import { UniquePostComponent } from './elementos/unique-post/unique-post.component';
import { CommentsForPostComponent } from './elementos/comments-for-post/comments-for-post.component';
import { DetallePComponent } from './paginas/detalle-p/detalle-p.component';
import { FormularioReactivoPostComponent } from './elementos/formulario-reactivo-post/formulario-reactivo-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MisPostsComponent } from './paginas/mis-posts/mis-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    UniquePostComponent,
    CommentsForPostComponent,
    DetallePComponent,
    FormularioReactivoPostComponent,
    MisPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
