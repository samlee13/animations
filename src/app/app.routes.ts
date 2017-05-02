import { Routes } from '@angular/router';
import { HomePage , ConPage, PurPage } from '../pages/pages';

export const appRoutes: Routes= [
    { path: 'pages-home' , component: HomePage },
    { path: 'pages-contact' , component: ConPage },
    { path: 'pages-pur' , component: PurPage },
]