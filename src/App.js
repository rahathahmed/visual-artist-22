
import './App.css';

import AuthProvider from "./Pages/Context/AuthProvider";

import Routing from "./Route/RoutingGate";

function App() {
  return (
    <AuthProvider>
        <Routing/>
    </AuthProvider>
  );
}

export default App;
