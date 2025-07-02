import React from "react";

console.log("main.tsx is executing - START");

try {
  console.log("Creating basic HTML content");
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found!");
    document.body.innerHTML = "<h1 style='color: red;'>Root element not found!</h1>";
  } else {
    console.log("Root element found, adding simple content");
    rootElement.innerHTML = "<h1 style='color: green; padding: 20px;'>JavaScript is working! (Simple HTML)</h1>";
    
    console.log("Now trying React...");
    
    // Dynamic import to catch any React loading errors
    import("react-dom/client").then(({ createRoot }) => {
      console.log("React DOM loaded successfully");
      import("./App").then((AppModule) => {
        console.log("App module loaded successfully");
        const App = AppModule.default;
        console.log("Creating React root");
        const root = createRoot(rootElement);
        console.log("Rendering React app");
        root.render(React.createElement(App));
        console.log("React app rendered successfully");
      }).catch(error => {
        console.error("Error loading App module:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        rootElement.innerHTML = "<h1 style='color: red;'>Error loading App: " + errorMessage + "</h1>";
      });
    }).catch(error => {
      console.error("Error loading React DOM:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      rootElement.innerHTML = "<h1 style='color: red;'>Error loading React DOM: " + errorMessage + "</h1>";
    });
  }
} catch (error) {
  console.error("Error in main.tsx:", error);
  const errorMessage = error instanceof Error ? error.message : String(error);
  document.body.innerHTML = "<h1 style='color: red;'>Error in main.tsx: " + errorMessage + "</h1>";
}

console.log("main.tsx is executing - END");
