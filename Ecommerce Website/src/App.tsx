import { BrowserRouter } from "react-router-dom";
import { EcommerceContextProvider } from "./context/ecommerceContext";

function App() {
  return (
    <EcommerceContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </EcommerceContextProvider>
  );
}

export default App;
