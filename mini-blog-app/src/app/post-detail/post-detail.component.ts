import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Per leggere i parametri e RouterLink
import { PostService } from '../services/post.service';
import { Post } from '../post';
import { CommonModule } from '@angular/common'; // Per *ngIf e la pipe date

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    // Ottiene l'ID dalla URL.
    // Il '+' converte la stringa in numero.
    const postId = +this.route.snapshot.paramMap.get('id')!;
    
    // Recupera il post dall'array locale tramite il Service
    this.post = this.postService.getPost(postId);
  }
}