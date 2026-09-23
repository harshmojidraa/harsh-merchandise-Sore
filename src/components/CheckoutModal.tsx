import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Truck, ChevronRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    cartDiscount,
    clearCart,
    navigateToHome
  } = useStore();

  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Chen',
    email: 'alex.chen@example.com',
    address: '1600 Amphitheatre Pkwy',
    city: 'Mountain View',
    state: 'CA',
    zip: '94043'
  });
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'gpay' | 'card'>('gpay');
  const [orderNumber, setOrderNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen) return null;

  const shippingCost = shippingMethod === 'express' ? 9.99 : cartSubtotal >= 50 ? 0 : 4.99;
  const tax = cartSubtotal * 0.0825;
  const finalTotal = Math.max(0, cartSubtotal - cartDiscount + shippingCost + tax);

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedOrder = `GMS-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setIsProcessing(false);
      setStep('success');
      clearCart();
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('shipping');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={handleClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-[#F8F9FA]">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
              G
            </span>
            <span className="text-sm font-bold text-gray-900">Google Merchandise Store • Checkout</span>
          </div>
          <button onClick={handleClose} className="p-1 text-gray-400 hover:text-gray-900 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 'shipping' && (
            <form onSubmit={handleSubmitShipping} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Shipping Address</h3>
                <p className="text-xs text-gray-500 mt-0.5">Enter where your official gear should be delivered.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full text-xs bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full text-xs bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full text-xs bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full text-xs bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full text-xs bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Shipping Speed Selection */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-gray-700 mb-2">Delivery Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setShippingMethod('standard')}
                    className={`p-3 rounded-2xl border cursor-pointer flex flex-col justify-between ${
                      shippingMethod === 'standard'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold text-gray-900">Standard Delivery</span>
                    </div>
                    <span className="text-[11px] text-gray-500 mt-1">3–5 Business Days</span>
                    <span className="text-xs font-bold text-gray-900 mt-2">
                      {cartSubtotal >= 50 ? 'FREE' : '$4.99'}
                    </span>
                  </div>

                  <div
                    onClick={() => setShippingMethod('express')}
                    className={`p-3 rounded-2xl border cursor-pointer flex flex-col justify-between ${
                      shippingMethod === 'express'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-bold text-gray-900">Priority Express</span>
                    </div>
                    <span className="text-[11px] text-gray-500 mt-1">1–2 Business Days</span>
                    <span className="text-xs font-bold text-gray-900 mt-2">$9.99</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md inline-flex items-center gap-2"
                >
                  <span>Continue to Payment</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Payment & Review</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Shipping to {formData.address}, {formData.city}</p>
                </div>
                <button
                  onClick={() => setStep('shipping')}
                  className="text-xs text-blue-600 font-semibold hover:underline"
                >
                  Edit Shipping
                </button>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-gray-700">Select Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setPaymentMethod('gpay')}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex items-center gap-3 ${
                      paymentMethod === 'gpay'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center font-bold text-xs text-blue-600">
                      G
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Google Pay</div>
                      <div className="text-[10px] text-gray-500">Fast 1-touch checkout</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex items-center gap-3 ${
                      paymentMethod === 'card'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-gray-700" />
                    <div>
                      <div className="text-xs font-bold text-gray-900">Credit Card</div>
                      <div className="text-[10px] text-gray-500">Visa, Mastercard, Amex</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="bg-[#F8F9FA] rounded-2xl p-4 space-y-2 border border-gray-200">
                <div className="text-xs font-bold text-gray-800">Order Summary ({cart.length} items)</div>
                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs text-gray-600">
                      <span className="truncate max-w-[240px]">
                        {item.quantity}x {item.product.name} ({item.selectedColor})
                      </span>
                      <span className="font-semibold text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-2 space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${cartSubtotal.toFixed(2)}</span>
                  </div>
                  {cartDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${cartDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Sales Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-gray-900 pt-1 border-t border-gray-200">
                    <span>Total Due</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>256-bit encrypted checkout</span>
                </div>
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleCompleteOrder}
                  className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  {isProcessing ? (
                    <span>Authorizing...</span>
                  ) : (
                    <span>Pay ${finalTotal.toFixed(2)} with {paymentMethod === 'gpay' ? 'Google Pay' : 'Card'}</span>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center animate-in zoom-in duration-300">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight text-gray-900">
                  THANK YOU FOR YOUR ORDER!
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  We've received your order and sent a receipt confirmation to{' '}
                  <strong className="text-gray-900">{formData.email}</strong>.
                </p>
              </div>

              <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-200 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-500">Order Number:</span>
                  <span className="font-mono font-bold text-gray-900">{orderNumber}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-500">Estimated Delivery:</span>
                  <span className="font-bold text-gray-900">3–5 Business Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping To:</span>
                  <span className="font-semibold text-gray-900">{formData.address}, {formData.city}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    handleClose();
                    navigateToHome();
                  }}
                  className="px-8 py-3.5 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md"
                >
                  CONTINUE BROWSING MERCHANDISE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
