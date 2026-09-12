// BeardGloss cart store — plain JS + localStorage.
// No framework/backend dependency, so it works on static Astro pages
// and is easy to swap for a real cart API later.

const CART_KEY = 'beardgloss_cart_v1';

function readRaw() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Cart read failed, resetting cart.', err);
    return [];
  }
}

function writeRaw(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart:updated', { detail: { items } }));
}

export function getCart() {
  return readRaw();
}

export function addToCart(product, quantity = 1) {
  const items = readRaw();
  const existing = items.find((i) => i.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      slug: product.slug,
      quantity,
    });
  }

  writeRaw(items);
  return items;
}

export function updateQuantity(id, quantity) {
  let items = readRaw();

  if (quantity <= 0) {
    items = items.filter((i) => i.id !== id);
  } else {
    items = items.map((i) => (i.id === id ? { ...i, quantity } : i));
  }

  writeRaw(items);
  return items;
}

export function removeFromCart(id) {
  const items = readRaw().filter((i) => i.id !== id);
  writeRaw(items);
  return items;
}

export function clearCart() {
  writeRaw([]);
}

export function getCartCount() {
  return readRaw().reduce((sum, i) => sum + i.quantity, 0);
}

export function getCartTotal() {
  return readRaw().reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export function formatZAR(amount) {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  }).format(amount);
}

// Keeps every open tab/page in sync when the cart changes elsewhere.
export function onCartChange(callback) {
  window.addEventListener('cart:updated', (e) => callback(e.detail.items));
  window.addEventListener('storage', (e) => {
    if (e.key === CART_KEY) callback(readRaw());
  });
}
