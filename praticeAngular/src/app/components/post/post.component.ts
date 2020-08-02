import { Component, OnInit } from '@angular/core';
import { PostUser } from 'src/app/module/post.service';
import { PostService } from '../../service/post.service'
import { from } from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService : PostService) { }

  posts  : PostUser[];

  currentPost = {
    id:"0",
    title:"",
    body:""
  }

  isEdited : boolean = false;

  // currentPost;

  ngOnInit(): void {
    this.postService.getPosts().subscribe( postdata =>{

      console.log(postdata);
      this.posts = postdata;

    })
  }

  onNewPost(post) {
    // console.log(">>>>>>>>>>>post>>>>>>>>>>>>>>>>>", post);
    this.posts.unshift(post);
  }

  onUpdatedPost(post){
    this.posts.forEach((curr,index) => {
      console.log(">>>>>>>>>index>>>>>>>>>>>>>>>>>>>>>>>>>",index);
      console.log(">>>>>>>>>curr>>>>>>>>>>>>>>>>>>>>>>>>>",curr);

      if(post.id === curr.id){
        console.log(">>>>>>>>>Inside sss>>>>>>>>>>>>>>>>>>>>>>>>>",this.posts);
        this.posts.splice(index,1);
        this.posts.unshift(post);
        this.isEdited=false;
        this.currentPost ={
          id:"0",
          title:'',
          body:''
        } 
             
      }
      
    });
  }


  updateData(post) {
    // console.log(">>>>>The post value is>>>>>>", post);
    this.currentPost = post;
    this.isEdited = true;
  }

  removePost(post){
    this.postService.removePost(post.id).subscribe(data =>{
      this.posts.forEach((curr,index) => {
        if(post.id === curr.id){
          this.posts.splice(index, 1);

        }
      })
   
  });

}
}
