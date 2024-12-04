# 🚀 Octars - E-commerce React App

Octars is a modern, fast, and scalable e-commerce application built using React and Vite. This doc offers a streamlined setup to quickly get started with the application.

---

## ✨ Features

- **Vite:** Utilizes Vite for fast development and optimized production builds.
- **Tailwind CSS:** Easily customize the app's design with Tailwind CSS, providing a responsive, utility-first CSS framework.
- **Shadcn:** UI framework to ease of use with tailwind css with components.
- **React Router:** Smooth routing for seamless navigation across different pages, such as home, product listings, and cart.
- **Redux:** State management with Redux for handling complex app states like user authentication and cart management.

---

## 🛠️ Installation

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/DManuProj/ShopingCart.git
cd ShopingCart
```

### 2. Install Dependencies
```bash
npm install
# or if you prefer yarn
yarn install
```

### 3. 🚦 Running the Application
```bash
npm run dev
# or if you prefer yarn
yarn dev
```
This will start the Vite development server


## 📚 Documentation
The project comes pre-configured with Vite, React Router, Tailwind CSS, and Redux. You can modify and extend this template to fit your needs.

App Structure:

src/ - Contains all the source code, including components, pages, and assets.
public/ - Contains static assets like images, icons, etc.
store/ - Includes Redux slices for state management (authentication, cart, etc.).

Stylying:

For stylying we have used shadcn with tailwind css for more robust and modern UI designs.

React Router:
The application uses React Router for routing. You can manage routes in src/App.jsx.
Redux Store:

Redux is used for state management. It is set up in the store/ directory, 

src/slices - where you can find slices for managing user authentication and cart data.


# 📚 Additional Features Implemented
## 1. UI Styling: ShadCN with TailwindCSS

   ### ShadCN: 
   Utilized ShadCN components to provide consistent, modern UI elements for dropdown menus, buttons, and avatars. ShadCN components were customized with TailwindCSS for a responsive and flexible layout.
   
   ### TailwindCSS: 
   TailwindCSS was used for utility-first styling, ensuring fast, efficient, and customizable design. It helps with creating responsive layouts and enhancing the user experience.

## 2. Local Storage: Persistence of Cart and Authentication State

   ### Cart Persistence: 
   Used LocalStorage to persist the shopping cart state even after the page reloads. Each user's cart is associated with their unique user ID. The cart data is stored under a key like cart_<userId>,   ensuring that each   user sees their own cart data.
   ### User Authentication: 
   The current user’s authentication state is also stored in LocalStorage under the key currentUser. This allows users to remain logged in across page reloads.
   On login/logout, the relevant data (cart and authentication state) is managed in LocalStorage, so the user's cart and session persist even after refreshing the browser.

## 3 Search and Filter Products

   ### Search Functionality: 
   A search bar was added to filter products by name. Users can type into the search bar, and the product list will dynamically update to show matching results.
   ### Filter by Category: 
   Additional filters were implemented for products, allowing users to filter by category. This enhances the product browsing experience, especially in cases with a large number of products.    



