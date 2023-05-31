import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './paginas/posts/posts.component';
import { DetallePComponent } from './paginas/detalle-p/detalle-p.component';
import { MisPostsComponent } from './paginas/mis-posts/mis-posts.component';
import { DetalleCComponent } from './paginas/detalle-c/detalle-c.component';

const routes: Routes = [
  {
    path: "posts", component: PostsComponent
  },
  {
    path:"detallePost/:id/:idDos", component: DetallePComponent
  },
  {
    path: "misPosts", component: MisPostsComponent
  },
  {
    path:"detalleComment/:id", component: DetalleCComponent
  }
];

@NgModule({
  imports: [
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
