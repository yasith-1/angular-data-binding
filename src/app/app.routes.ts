import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Services } from './services/services';

// Add routes
export const routes: Routes = [
    {
        path: '',
        component: Home
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
    }
];
