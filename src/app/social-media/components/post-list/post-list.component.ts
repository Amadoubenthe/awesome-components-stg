import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts(): void {
    this.posts$ = this.route.data.pipe(map((data) => data['posts']));
  }
}
