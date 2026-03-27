import { atom } from 'nanostores';

export const isCartOpen = atom(false);
export const isModalOpen = atom(false); // Para el nuevo modal
export const cartItems = atom([]);

// Agregar o incrementar cantidad
export function addCartItem(item) {
  const items = cartItems.get();
  const existingItem = items.find(i => i.name === item.name);
  
  if (existingItem) {
    cartItems.set(items.map(i => 
      i.name === item.name ? { ...i, quantity: (i.quantity || 1) + 1 } : i
    ));
  } else {
    cartItems.set([...items, { ...item, quantity: 1 }]);
  }
  isCartOpen.set(true);
}

// Disminuir cantidad
export function decreaseQuantity(name) {
  const items = cartItems.get();
  const item = items.find(i => i.name === name);
  
  if (item.quantity > 1) {
    cartItems.set(items.map(i => 
      i.name === name ? { ...i, quantity: i.quantity - 1 } : i
    ));
  } else {
    removeFromCart(name);
  }
}

// Eliminar producto completamente
export function removeFromCart(name) {
  cartItems.set(cartItems.get().filter(i => i.name !== name));
}