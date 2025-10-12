import { Injectable } from '@angular/core';
import { Post } from '../post'; // Risale a 'src/app/post.ts'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Array locale con dati iniziali
  private posts: Post[] = [
    { id: 1, titolo: "Primo Post", contenuto: "Contenuto del post numero uno. Dettagli sul routing.", autore: "Mario Rossi", dataCreazione: new Date('2024-01-10') },
    { id: 2, titolo: "Angular Routing", contenuto: "Imparare il routing in Angular è fondamentale per creare applicazioni multi-pagina.", autore: "Marco Bianchi", dataCreazione: new Date('2024-02-15') },
    { id: 3, titolo: "Bootstrap in Azione", contenuto: "Utilizzo delle classi CSS di Bootstrap per un layout responsive e professionale.", autore: "Giulia Verdi", dataCreazione: new Date('2024-03-20') },
    { id: 4, titolo: "Componenti Angular", contenuto: "I componenti sono i mattoni fondamentali di ogni applicazione.", autore: "Mario Rossi", dataCreazione: new Date('2024-04-25') },
    { id: 5, titolo: "Gestione dei Form", contenuto: "Dati in input e output tramite i Reactive Forms per aggiungere nuovi post.", autore: "Chiara Neri", dataCreazione: new Date('2024-05-30') }
  ];

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  // Metodo per aggiungere un nuovo post
  addPost(newPost: Omit<Post, 'id' | 'dataCreazione'>): number {
    const id = this.posts.length > 0 ? Math.max(...this.posts.map(p => p.id)) + 1 : 1;
    const postToAdd: Post = {
      ...newPost,
      id: id,
      dataCreazione: new Date()
    };
    this.posts.push(postToAdd);
    return id; // Restituisce l'ID per navigare al dettaglio
  }
}