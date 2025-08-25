import React from "react";
import Portfolio from "./components/Portfolio";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Portfolio />
    </ThemeProvider>
  );
}
export default App;