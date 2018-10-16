import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { MenuComponent } from '../components/menu/menu.component';

export const routes = [
    { path: 'home', component: HomeComponent},
    { path: 'menu', component: MenuComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];