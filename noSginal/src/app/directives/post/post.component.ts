import {Component} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {Post} from "../../model/Post";
import {PostService} from "../../services/post.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  displayedColumns: String[] = ['title','text', 'visibility', 'likes'];
  //posts: DataSource<any> = new PostDataSource(this.postService);
  posts: Array<Post>;

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(
      val => this.posts = val);
  }

  delete(id: number) {
    this.postService.delete(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  toDate(timestamp: number): Date {
    return new Date(timestamp)
  }
}

  export class PostDataSource extends DataSource<any> {
  constructor(private postService: PostService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.postService.getPosts();
  }

  disconnect() {
  }

}
