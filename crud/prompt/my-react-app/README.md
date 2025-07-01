# My React App with TypeScript

This project is a React application built with TypeScript that features a user-friendly web GUI. The application includes a header with a search box and a dropdown menu, a footer, a left sidebar, and a dynamic body that displays different sets of icons based on user selection. Additionally, it supports dark mode and light mode.

## Features

- **Header**: Contains a search box and a dropdown menu with four selections.
- **Sidebar**: Includes three navigation items for easy access.
- **Icon Display**: Dynamically shows different sets of five icons based on the selected dropdown option.
- **Theme Toggle**: Allows users to switch between dark mode and light mode.
- **Responsive Design**: The layout is designed to be responsive and user-friendly.

## Project Structure

```
my-react-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── IconSet.tsx
│   │   └── ThemeToggle.tsx
│   ├── icons
│   │   ├── IconSet1.tsx
│   │   ├── IconSet2.tsx
│   │   ├── IconSet3.tsx
│   │   └── IconSet4.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── styles
│   │   ├── App.css
│   │   └── theme.css
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- React
- TypeScript
- CSS
- npm

## License

This project is licensed under the MIT License.