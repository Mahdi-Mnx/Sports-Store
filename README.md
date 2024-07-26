
# GOG E-commerce Platform

Welcome to GOG, your one-stop destination for premium sports apparel and footwear. This e-commerce platform provides a seamless shopping experience for athletes and sports enthusiasts, offering top-quality products to enhance performance and style.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Pages](#pages)
- [State Management](#state-management)
- [Styling](#styling)
- [Animations](#animations)
- [Toasts](#toasts)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

GOG is an e-commerce platform built with React. It features a clean and responsive design, allowing users to browse products, add items to their cart, and proceed through a smooth checkout process. The project demonstrates advanced React concepts such as context API for state management, custom hooks, routing, and the use of external libraries for styling, animations, and toast notifications.

## Features

- User-friendly navigation and product browsing.
- Dynamic product filtering by category, size, and price.
- Shopping cart with add, remove, increase, and decrease item quantity functionalities.
- Checkout process with form validation.
- Toast notifications for various actions (e.g., adding to cart, placing orders).
- Responsive design for wep devices.
- Persistent state using localStorage.

## Technologies Used

- React
- React Router
- Context API
- Tailwind CSS
- Framer Motion
- React Hot Toast
- HTML5 & CSS3
- JavaScript (ES6+)

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Mahdi-Mnx/Sports-Store.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Build the project for production:**
    ```bash
    npm run dev
    ```

4. **Demo Live:**
```
https://sports-store-eta.vercel.app
```
## Components

### CartContext.js
This component uses the Context API and useReducer to manage the state of the shopping cart. It provides functionalities such as adding, removing, increasing, and decreasing items in the cart.

### CartPage.js
Displays the items added to the cart, allows users to adjust quantities, and proceed to checkout. It also shows the total price of the items in the cart.

### CheckoutPage.js
Manages the checkout process, including form validation and submission. Upon successful order placement, it displays a toast notification and clears the cart.

### Product.js
Displays individual product details and allows users to add items to the cart.

## Pages

### About.js
Provides information about the GOG e-commerce platform.

### HelpSupport.js
Contains frequently asked questions (FAQs) and contact information for customer support.

### PrivacyPolicy.js
Details the privacy policy of the GOG platform, explaining how user data is collected, used, and protected.

### TermsConditions.js
Outlines the terms and conditions for using the GOG platform.

## State Management

State management in this project is handled using the Context API and useReducer. The `CartContext` component is used to manage the state of the shopping cart, providing actions to add, remove, and update items.

## Styling

Styling is achieved using Tailwind CSS, a utility-first CSS framework. Tailwind CSS allows for rapid and efficient styling by providing utility classes that can be composed to build complex designs.

## Animations

Animations are implemented using Framer Motion, a powerful animation library for React. It is used to add smooth animations to components, enhancing the user experience.

## Toasts

React Hot Toast is used for displaying toast notifications. Custom styles are applied to the toasts to match the overall design of the platform.

### Example Toast Notification:

```javascript
import toast from "react-hot-toast";
```



## Authors
#### GOG Project
```
Maxamed Abdifitaax C1211332
```
```
Mahdi Abdulkadir   C1211314
```
```
Shuceyb Maxamed    C1210950
```
