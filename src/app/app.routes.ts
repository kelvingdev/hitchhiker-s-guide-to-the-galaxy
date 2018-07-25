import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent}
]