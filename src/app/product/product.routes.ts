import { ProductPage } from './list/product-page';
import { ProductDetailPage } from './detail/product-detail-page';

export const ProductRoutes = [
    { path: '', component: ProductPage },
    { path: 'product/:id', component: ProductDetailPage },
  ];
  