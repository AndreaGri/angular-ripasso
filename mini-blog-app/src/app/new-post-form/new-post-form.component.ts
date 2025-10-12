import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Per [(ngModel)]
import { CommonModule } from '@angular/common';

// Tipo per i dati raccolti dal form
interface NewPostData {
  titolo: string;
  contenuto: string;
  autore: string;
}

@Component({
  selector: 'app-new-post-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink], // Importa FormsModule per i form
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent {
  // Modello dati associato al form
  newPost: NewPostData = {
    titolo: '',
    contenuto: '',
    autore: ''
  };

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  // Gestione dell'invio del form
  onSubmit(): void {
    if (this.newPost.titolo && this.newPost.contenuto && this.newPost.autore) {
      // Aggiunge il post al Service e ottiene il nuovo ID
      const newId = this.postService.addPost(this.newPost); 
      
      // Reindirizza l'utente al dettaglio del post appena creato
      this.router.navigate(['/post', newId]); 
    } else {
      alert("Per favore, compila tutti i campi.");
    }
  }
}