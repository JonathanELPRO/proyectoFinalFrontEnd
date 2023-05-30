import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './paginas/posts/posts.component';

const routes: Routes = [
  {path: "posts", component: PostsComponent}
];

@NgModule({
  imports: [
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
