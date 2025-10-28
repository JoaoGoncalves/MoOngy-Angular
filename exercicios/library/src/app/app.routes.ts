import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { NotFound } from './pages/not-found';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'contact', loadComponent: () => import('./pages/contact').then( m => m.Contact)},
    {
        path:"books",
        canActivate: [authGuard],
        loadChildren: () => import("./pages/books/book.routes").then(m => m.routes)
    },
    {path: '**', component: NotFound },
    
];
