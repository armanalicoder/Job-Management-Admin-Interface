import HomePage from "./Components/Home/HomePage";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 h-[1024px]">
      <ToastContainer
        position="top-center"
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="light" 
        limit={1} 
      />
      <HomePage />
    </div>
  );
}

export default App;
