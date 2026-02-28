export function formatPrice(value) {
  const num = Number(value) || 0
  return '£' + num.toFixed(2)
}

export function getProductImageUrl(product) {
  if (product?.image) return product.image
  const category = product?.category ?? 'Product'
  const text = encodeURIComponent(
    category.length > 18 ? category.substring(0, 18) + '...' : category
  )
  return `https://placehold.co/400x300/17255d/7094E0?text=${text}`
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
