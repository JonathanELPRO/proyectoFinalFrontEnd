import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './paginas/posts/posts.component';
import { HeaderComponent } from './elementos/header/header.component';
import { UniquePostComponent } from './elementos/unique-post/unique-post.component';
import { CommentsForPostComponent } from './elementos/comments-for-post/comments-for-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    UniquePostComponent,
    CommentsForPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
