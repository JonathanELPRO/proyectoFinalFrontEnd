import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  datosRecuperados: any;
  // postsPersonales: any;
  userId: number;
  
  constructor( private datosPostsService:PostsService,private router: Router){
    this.userId =2; 
  }
  ngOnInit(): void {
    // this.userId = 1; 
    this.datosPostsService.obtenerPosts().subscribe(
      (data)=>this.datosRecuperados=data,
      // (data)=>console.log(data),
      (error)=>console.log(error),
      ()=>console.log('FIN')
    )

    // this.datosPostsService.obtenerPostsForUser(this.userId).subscribe(
    //   (data)=>this.postsPersonales=data,
    //   // (data)=>console.log(data),
    //   (error)=>console.log(error),
    //   ()=>console.log('FIN')

    // )
  }
  // crearPost()
  // {
  //   this.router.navigate(['/detallePost', 0,this.userId]);
  // }
}
