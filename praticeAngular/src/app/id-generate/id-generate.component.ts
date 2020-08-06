import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-id-generate',
  templateUrl: './id-generate.component.html',
  styleUrls: ['./id-generate.component.css']
})
export class IdGenerateComponent implements OnInit {

  newData;

  constructor(
    private route : ActivatedRoute,
    private postservice : PostService
  ) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
   this.postservice.getPostById(id).subscribe(data =>{
    this.newData = data;
    console.log(">>>>>>>The New data is>>>>>>>",this.newData);
   } );
  }

}
