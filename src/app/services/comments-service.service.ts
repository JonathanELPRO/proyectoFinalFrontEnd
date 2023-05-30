import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  obtenerComentariosForPost(postId: number) {
    return this.http.get('http://localhost:3000/comments/' + postId.toString())
  }
}
