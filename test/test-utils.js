import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { ToastProvider } from "react-toast-notifications";

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  )
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export * from '@testing-library/react'
export { customRender as render };