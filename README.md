# Shopping Cart Simulator

A learning and portfolio project that simulates browsing products and managing a shopping cart with React and Tailwind CSS.

## Live Demo

[your-vercel-link](https://your-vercel-link.vercel.app)

## Screenshot

![Screenshot](./screenshots/home.png)

## Features

- Browse eight products in a responsive product grid.
- Add products to the cart, remove them, and adjust quantities.
- View the item count and cart subtotal, updated as the cart changes.
- See an empty-cart state when no items are in the cart.
- Review an order summary with line totals, subtotal, 8% tax, and grand total.
- Cancel checkout without changing the cart, or confirm the order and view a success screen.
- Cart contents are saved in local storage.
- Responsive layouts adapt to mobile, tablet, and desktop screen sizes.

## Tech Stack

- React and React DOM
- JavaScript (ES modules)
- Tailwind CSS v4 with the Vite plugin
- Vite
- Font Awesome icons for React
- ESLint

## Getting Started

### Prerequisites

- Node.js and npm

### Install and run

Clone the repository and enter the project directory:

```bash
git clone https://github.com/MarahOrfahli/shopping_cart_simulator.git
cd shopping_cart_simulator
```

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

## Project Structure

```text
src/
├── App.jsx                         # Connects the products, cart, and order success views
├── main.jsx                        # Starts the React application
├── index.css                       # Loads Tailwind CSS
├── assets/products/                # Product images
├── data/products.json              # Product catalog
├── hooks/
│   ├── cartContext.jsx             # Cart state and cart actions
│   ├── sidebarContext.jsx          # Cart sidebar open state
│   └── useLocalStorage.js          # Persists cart state in local storage
└── components/
    ├── main/main.jsx               # Product grid
    ├── nav/nav.jsx                 # Store navigation and cart item count
    ├── product_card/productCard.jsx # Product details and add-to-cart button
    ├── shopping_cart_card/
    │   └── shoppingCartCard.jsx     # Cart item controls and line price
    ├── sidebar/sidebar.jsx         # Cart panel, subtotal, and checkout entry
    ├── checkout_modal/
    │   └── CheckoutModal.jsx       # Order summary and confirmation actions
    └── order_success/
        └── OrderSuccess.jsx        # Order confirmation and return action
```

## What I Learned

- Splitting an interface into reusable React components.
- Passing data and actions between components with props and context.
- Calculating cart totals from state with `reduce`.
- Using array methods such as `map` and `filter` to update and display cart items.

## Possible Future Improvements

- Add product search and category filters.
- Add unit and interaction tests.
- Improve keyboard focus management for dialogs.
- Add an accessible product image and description experience.

## Note

This project is a simulation and does not process real payments.

## Author

Marah Orfahli · [GitHub](https://github.com/MarahOrfahli)
