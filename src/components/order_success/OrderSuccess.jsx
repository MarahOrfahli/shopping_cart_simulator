const OrderSuccess = ({ onBackToProducts }) => (
  <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
    <section className="w-full max-w-lg rounded-lg bg-white p-8 text-center shadow-md sm:p-10">
      <h1 className="text-2xl font-bold text-gray-900">
        Your order has been received!
      </h1>
      <button
        type="button"
        onClick={onBackToProducts}
        className="mt-6 rounded-md bg-green-900 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
      >
        Back to Products
      </button>
    </section>
  </main>
);

export default OrderSuccess;
