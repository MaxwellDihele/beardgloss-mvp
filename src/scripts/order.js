// Stores the just-placed order in sessionStorage so /success can render
// a real summary without needing a backend for this MVP.
const ORDER_KEY = 'beardgloss_last_order';

export function saveOrder(order) {
  sessionStorage.setItem(ORDER_KEY, JSON.stringify(order));
}

export function getLastOrder() {
  try {
    const raw = sessionStorage.getItem(ORDER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function generateOrderNumber() {
  const rand = Math.floor(1000 + Math.random() * 9000);
  const date = new Date();
  const stamp = `${date.getFullYear().toString().slice(-2)}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  return `BG-${stamp}-${rand}`;
}
