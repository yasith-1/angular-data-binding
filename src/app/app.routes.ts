import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Services } from './services/services';
import { NotFound } from './not-found/not-found';

// Add routes
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'services',
        component: Services
    },
    // If not found matching load that
    {
        path: '**',
        component: NotFound
    }
];
