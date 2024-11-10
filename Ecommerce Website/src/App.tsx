import { BrowserRouter } from "react-router-dom";
import { EcommerceContextProvider } from "./context/ecommerceContext";
import Routes from "./routes/Routes";

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
