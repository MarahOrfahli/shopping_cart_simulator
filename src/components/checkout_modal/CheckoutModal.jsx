const TAX_RATE = 0.08;
const formatCurrency = (cents) => `$${(cents / 100).toFixed(2)}`;

const CheckoutModal = ({ cartItems, onConfirm, onCancel }) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Math.round(item.price * 100) * item.quantity,
    0
  );
  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + tax;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-5 shadow-xl sm:p-6"
      >
        <h2 id="checkout-title" className="text-xl font-bold text-gray-900">
          Order summary
        </h2>
        <ul className="mt-5 divide-y divide-gray-200">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 py-3 text-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-medium text-gray-800">
                {item.name} <span className="text-gray-500">× {item.quantity}</span>
              </span>
              <span className="text-gray-700">
                {formatCurrency(Math.round(item.price * 100) * item.quantity)}
              </span>
            </li>
          ))}
        </ul>

        <dl className="mt-4 space-y-2 border-t border-gray-200 pt-4 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-600">Subtotal</dt>
            <dd className="font-medium text-gray-900">{formatCurrency(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Tax (8%)</dt>
            <dd className="font-medium text-gray-900">{formatCurrency(tax)}</dd>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-3 text-base font-bold">
            <dt className="text-gray-900">Grand total</dt>
            <dd className="text-gray-900">{formatCurrency(total)}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-md bg-green-900 px-5 py-3 font-medium text-white hover:bg-green-700"
          >
            Confirm Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default CheckoutModal;
