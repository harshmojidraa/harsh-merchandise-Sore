import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Check, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartSubtotal,
    cartDiscount,
    appliedPromo,
    applyPromoCode,
    freeShippingThreshold,
    navigateToShop,
    setIsCheckoutOpen
  } = useStore();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ success: boolean; text: string } | null>(null);

  if (!isCartOpen) return null;

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const shippingCost = cartSubtotal >= freeShippingThreshold || cartSubtotal === 0 ? 0 : 4.99;
  const finalTotal = Math.max(0, cartSubtotal - cartDiscount + shippingCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    setPromoMessage({ success: res.success, text: res.message });
    if (res.success) {
      setPromoInput('');
    }
  };

  const handleStartCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gray-900" />
              <h2 className="text-lg font-bold text-gray-900">Your Shopping Bag</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                {cartCount} {cartCount === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          {cart.length > 0 && (
            <div className="bg-[#F8F9FA] px-6 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between text-xs font-medium text-gray-700 mb-1.5">
                {amountNeededForFreeShipping > 0 ? (
                  <span>
                    Add <strong className="text-blue-600">${amountNeededForFreeShipping.toFixed(2)}</strong> more for Free Shipping
                  </span>
                ) : (
                  <span className="text-green-700 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-green-600" />
                    You unlocked Free Standard Shipping!
                  </span>
                )}
                <span className="text-[11px] text-gray-500">${freeShippingThreshold.toFixed(0)} Goal</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%`
                  }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List OR Empty State */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
                    YOUR BAG IS EMPTY
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">
                    Discover Google merchandise and find something you'll love.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateToShop('All');
                  }}
                  className="mt-4 px-6 py-3 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm transition-all"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${idx}`} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl bg-gray-100 border border-gray-200/60 flex-shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-bold text-gray-900 leading-snug line-clamp-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                          className="text-gray-400 hover:text-red-500 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-gray-500 mt-1">
                        Color: {item.selectedColor}
                        {item.selectedSize && ` • Size: ${item.selectedSize}`}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 px-2 py-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)
                          }
                          className="text-gray-500 hover:text-gray-900 p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)
                          }
                          className="text-gray-500 hover:text-gray-900 p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Breakdown (if cart has items) */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-white space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo code (e.g. GOOGLE10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-2 text-xs uppercase placeholder:normal-case focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-xl"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p
                    className={`text-[11px] ${
                      promoMessage.success ? 'text-green-600 font-semibold' : 'text-red-500'
                    }`}
                  >
                    {promoMessage.text}
                  </p>
                )}
                {appliedPromo && (
                  <div className="flex items-center justify-between text-xs text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
                    <span>Active code: <strong>{appliedPromo}</strong> (10% OFF)</span>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
              </form>

              {/* Cost Summary */}
              <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${cartSubtotal.toFixed(2)}</span>
                </div>
                {cartDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${cartDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-gray-900">
                    {shippingCost === 0 ? (
                      <span className="text-green-600 font-bold">FREE</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Action CTA */}
              <button
                onClick={handleStartCheckout}
                className="w-full py-3.5 px-6 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>CHECKOUT • ${finalTotal.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-gray-400 text-center">
                Secure checkout powered by Google Pay & SSL encryption
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
