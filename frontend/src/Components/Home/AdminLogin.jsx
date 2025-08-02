import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
function AdminLogin({adminLogin,setAdminLogin}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const AdminUsername = import.meta.env.VITE_USERNAME;
    const AdminPassword = import.meta.env.VITE_PASSWORD;
    if(data.username==AdminUsername && data.password==AdminPassword){
        localStorage.setItem("isLoggedIn","true");
        toast.success("Login Successfully");
        setAdminLogin(false)
    }
    else{
        toast.error("Username or Password is incorrect !");
    }
    reset();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
      <div className="bg-white rounded-xl w-full max-w-xl p-8 shadow-lg">
        <div className="flex justify-between items-center mb-3 relative">
          <h2 className="text-2xl font-bold text-center w-full">
            Login to Admin Panel
          </h2>
          <button onClick={()=>{
            setAdminLogin(false)
          }} className="absolute right-0 bg-blue-600 cursor-pointer text-white p-2 rounded-lg">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-[600] text-gray-700">
                Admin Username <span className="text-red-500">*</span>
              </label>
              <input
                {...register("username", {
                  required: {
                    value: true,
                    message: "Admin Username is required",
                  },
                })}
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Admin Username"
              />
              {errors.username && (
                <div className="text-red-500 font-semibold">
                  {errors.username.message}
                </div>
              )}
            </div>
             <div>
              <label className="block text-sm font-[600] text-gray-700">
                Admin Password <span className="text-red-500">*</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Admin Password is required",
                  },
                })}
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Admin Password"
              />
              {errors.password && (
                <div className="text-red-500 font-semibold">
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>
          <div className="mt-3 flex justify-center items-center">
                <button className="bg-blue-500 cursor-pointer text-white p-2 rounded">Login as Admin</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
