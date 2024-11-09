import { CartItem } from "./CartItem";

  export interface Order {
    id: number;
    userId: number;
    items: CartItem[];
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered';
    shippingAddress: string;
    createdAt: Date;
  }
  