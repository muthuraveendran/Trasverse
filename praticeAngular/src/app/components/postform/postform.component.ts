import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  constructor(private postservice : PostService) { }

  @Output() newPost : EventEmitter<any> = new EventEmitter();
  @Output() updatePostButton : EventEmitter<any> = new EventEmitter();
  @Input() currentPost;
  @Input() isEdited;

  ngOnInit(): void {


  }

  addPost(title , body){
    if(!title || !body ){
      alert("Please enter the value")
    }
    else{
      this.postservice.savePost({title, body} ).subscribe
      (post => {
        // console.log(">>post>>", post);
        this.newPost.emit(post);
        this.currentPost ={
          id:"0",
          title:'',
          body:''
        } 
      })
    }
  }

  updatePost(){
    this.isEdited = false;
    this.postservice.updatePost(this.currentPost).subscribe(data =>{
      console.log(data,">>>>>>>>data>>>>>>>>>>>>>>>>>>");
      this.updatePostButton.emit(data);
    })
  }

}
