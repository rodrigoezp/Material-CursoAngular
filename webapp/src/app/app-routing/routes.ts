import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { DishdetailComponent } from '../components/dishdetail/dishdetail.component';

export const routes = [
    { path: 'home', component: HomeComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    { path: 'dishdetail/:id', component: DishdetailComponent },
    { path: '**', redirectTo: '/home' }
];