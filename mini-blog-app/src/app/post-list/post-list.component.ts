import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service'; // Inietta il nostro servizio
import { CommonModule } from '@angular/common'; // Necessario per *ngFor
import { RouterLink } from '@angular/router'; // Necessario per la navigazione

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink], // Importa le direttive e il RouterLink
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // Array che ospiterà i dati
  posts: Post[] = [];

  // Il servizio viene iniettato nel costruttore
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // Carica i post dall'array locale
    this.posts = this.postService.getPosts(); 
  }
}