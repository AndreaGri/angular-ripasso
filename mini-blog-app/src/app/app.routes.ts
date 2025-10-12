import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';

export const routes: Routes = [
  // Rotta principale: mostra la lista dei post
  { path: '', component: PostListComponent },

  // Rotta per la creazione di un nuovo post (Pagina con Routing)
  { path: 'new', component: NewPostFormComponent },

  // Rotta per il dettaglio del post (con parametro ID)
  { path: 'post/:id', component: PostDetailComponent },

  // Rotta jolly per reindirizzare alla home
  { path: '**', redirectTo: '' }
];