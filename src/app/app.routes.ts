import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';

// Add routes
export const routes: Routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/contact',
        component: Contact
    }
];
