import { Injectable } from '@angular/core';
import { PostUser } from '../module/post.service';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';


const httpOption = {
  headers: new HttpHeaders({'Content-Type'  : 'application/json'})
 };


@Injectable({
  providedIn: 'root'
})
export class PostService {

 
  postUrl : string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http : HttpClient) { }

    getPosts() : Observable<PostUser[]> { //<PostUser[]>
      return this.http.get<any>(this.postUrl);
    }

    savePost(post): Observable<any>{
      return this.http.post<any>(this.postUrl,post,httpOption);
    }

    updatePost(post): Observable<any> {
       const url = `${this.postUrl}/${post.id}`;
       return this.http.put<any>(url,post); 
    }

    removePost(post): Observable<any>{
      const id = typeof post === 'number' ? post : post.id;
      const url = `${this.postUrl}/${id}`;
      return this.http.delete<any>(url); 

    }

    getPostById(id) : Observable<any> { 
      const url = `${this.postUrl}/${id}`;
      console.log("The url is >>>>>>>>>>>>>>>>>>>>>>.",url);
      return this.http.get<any>(url);
    }

}
