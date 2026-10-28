import { products } from "./catalog";
export type CartItem = { id: string; quantity: number };
export function cartLines(items: CartItem[]) {
  return items.flatMap((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product || !Number.isInteger(item.quantity) || item.quantity < 1)
      return [];
    const quantity = Math.min(99, item.quantity);
    return [{ ...product, quantity, lineTotal: product.mockPrice * quantity }];
  });
}
export function mockSubtotal(items: CartItem[]) {
  return cartLines(items).reduce((sum, line) => sum + line.lineTotal, 0);
}
