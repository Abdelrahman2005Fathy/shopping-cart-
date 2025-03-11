// types/types.ts
export interface Product { 
  name: string;
  price: number;
  quantity: number;
  image: string; 
}

// تعريف الحالة الخاصة بـ shopping
export interface ShoppingState {
  products: Product[]; // قائمة المنتجات
  quantity: number;    // الكمية الإجمالية
  total: number;       // المجموع الإجمالي
}

// تعريف RootState
export interface RootState {
  shopping: ShoppingState; // ربط الـ shopping بـ shopping state
}
