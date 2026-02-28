import { createContext, useContext, useState, useCallback } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('benichem_cart', [])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [notification, setNotification] = useState(null)

  const showNotification = useCallback((message) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 3000)
  }, [])

  const addToCart = useCallback((product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
    setIsCartOpen(true)
    showNotification(`${product.name} added to basket`)
  }, [setCart, showNotification])

  const removeFromCart = useCallback((productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }, [setCart])

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== productId))
      return
    }
    setCart(prev =>
      prev.map(item => item.id === productId ? { ...item, quantity } : item)
    )
  }, [setCart])

  const clearCart = useCallback(() => setCart([]), [setCart])

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cart, isCartOpen, setIsCartOpen,
      addToCart, removeFromCart, updateQuantity, clearCart,
      totalItems, totalPrice,
      notification, showNotification,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
