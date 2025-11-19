import { Routes } from '@angular/router';
import { Bandas } from './pages/bandas/bandas-list/bandas';


export const routes: Routes = [
    { path: '', component: Bandas },
    { path: 'bandas', component: Bandas }
];
