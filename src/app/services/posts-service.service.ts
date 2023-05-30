import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  constructor( private http: HttpClient) { }
  obtenerPosts(){
    return this.http.get('http://localhost:3000/posts')
  }
  
  obtenerPostsForUser(userId: number) { 
    return this.http.get('http://localhost:3000/posts/' + userId.toString())
  }

  eliminarPostSegunId(postId:number)
  {
    console.log(typeof(postId))
    console.log(postId)
    return this.http.delete('http://localhost:3000/posts/' + postId.toString())
    
    
  }
}
