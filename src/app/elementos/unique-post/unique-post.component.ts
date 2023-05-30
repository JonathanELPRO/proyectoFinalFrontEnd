import { Component, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-unique-post',
  templateUrl: './unique-post.component.html',
  styleUrls: ['./unique-post.component.scss']
})
export class UniquePostComponent {
  constructor( private datosPostsService:PostsService){
    
  }
  // postId: number; 
  @Input() userId: any; 
  @Input() posts:any; 
  eliminarPost(postId:number){
    return this.datosPostsService.eliminarPostSegunId(postId).subscribe(
      // (data) =>this.datosRecuperados=data,
      // error => console.log(error),
      // () => console.log('FIN')
      (data) =>console.log(data),
      (error) => console.log('Error al eliminar el post:', error),
      () => console.log('FIN')
    );
  }
}
