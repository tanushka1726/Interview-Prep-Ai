import { useNavigate } from "react-router-dom";
const Forbidden = () => {
    const navigate = useNavigate();
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">403 - Forbidden</h1>
        <p className="mb-6">You are not allowed to access this page.</p>
        <button
          className="btn-primary"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    );
  };
  
  export default Forbidden;
  