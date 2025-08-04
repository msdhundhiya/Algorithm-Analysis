# Sorting Algorithm Visualizer 📊

### An interactive, real-time web application for analyzing and comparing classic sorting algorithms, built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

### ➡️ [**Live Demo**](https://msdhundhiya.github.io/Algorithm-Analysis/)

---

This project was built to demystify the abstract concepts of sorting algorithms by providing a hands-on, visual tool. It allows users to see not just the result of a sort, but also the performance implications of their choices through key metrics.

## ✨ Core Features

* **Real-Time Algorithm Analysis:** Select from a comprehensive list of algorithms (Bubble, Selection, Insertion, Merge, Quick, Heap) and instantly see the impact on your data.
* **Flexible Data Input:** Users can either type a custom comma-separated list of numbers or upload a local data file (`.txt`, `.csv`) for maximum flexibility.
* **In-Depth Performance Metrics:** The application calculates and displays critical performance statistics for each sort:
    * **Execution Time:** High-precision timing (in milliseconds) to gauge the speed of the algorithm.
    * **Comparisons:** The total number of times two elements were compared.
    * **Swaps/Writes:** The total number of times an element was moved or swapped.
* **Modern & Responsive UI:** Built with Tailwind CSS, the interface is clean, intuitive, and fully responsive, providing a seamless experience on any device.
* **Seamless Navigation:** Built as a Single-Page Application (SPA) using React Router for instant, smooth navigation between different algorithm pages without page reloads.

---

## 🏛️ Architectural Overview

This project was designed with a modern, modular architecture to ensure scalability and maintainability.

* **Component-Based UI:** The interface is built from small, reusable React components (`Nav`, `DataInput`, `Results`) that are composed together to build complex pages.
* **Separation of Concerns with Custom Hooks:** All business logic, state management, and the sorting algorithms themselves are encapsulated within a custom `useSorting` hook. This keeps the UI components clean and focused solely on presentation.
* **Client-Side Routing:** `React Router` handles all navigation, using dynamic route parameters (`/sort/:algorithm`) to render the correct page and pass the selected algorithm to the logic layer.

---

## 🛠️ Tech Stack

| Category      | Technology                                    |
| ------------- | --------------------------------------------- |
| **Core** | JavaScript (ES6+), HTML5, CSS3                |
| **Framework** | [React.js](https://react.dev/)                |
| **Build Tool**| [Vite](https://vitejs.dev/)                   |
| **Routing** | [React Router](https://reactrouter.com/)      |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/)      |

---

## 🚀 Getting Started

To get a local copy up and running, please follow these steps.

### **Prerequisites**

Ensure you have [Node.js](https://nodejs.org/) (v16 or later) and npm installed on your system.

### **Installation & Setup**

1.  **Clone the repository to your local machine:**
    ```bash
    git clone [https://github.com/msdhundhiya/Algorithm-Analysis.git](https://github.com/msdhundhiya/Algorithm-Analysis.git)
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd Algorithm-Analysis
    ```

3.  **Install all the required dependencies:**
    ```bash
    npm install
    ```

4.  **Start the Vite development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`. The server will automatically reload when you make changes to the code.

---

## 🗺️ Future Roadmap

This project has a solid foundation for future expansion. Potential next steps include:

* **Implement Code Display:** Build the UI component to display the language-specific code examples from the `codeExamples.js` data file.
* **Create a Visualizer Component:** Develop a new component that provides a graphical, bar-chart representation of the sorting process as it happens.
* **Add More Algorithms:** Expand the `useSorting` hook to include more advanced algorithms like Radix Sort or Bucket Sort.

