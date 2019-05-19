import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';


export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductComponent
    },
    {
        path: '**',
        redirectTo: '/products',
        pathMatch: 'full'
    }
];
