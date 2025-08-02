import { useEffect, useState } from "react";
import NewJob from "./NewJob";
import AdminLogin from "./AdminLogin";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [islogged, setIsLogged] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLogged(isLoggedIn);
  }, [adminLogin]);

  return (
    <section>
      <div className="navbar-main">
        <div className="flex justify-between my-auto w-[838px] h-[48px] relative top-4 left-6">
          <div className="w-[44px] h-[44.68px]">
            <a href="/">
              <img src="/img/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="font-Satoshi flex space-x-5 my-auto w-[613px]">
            <div className="py-3 px-4 hover:shadow rounded-[10px] transform transition-transform duration-300 ease-in-out hover:scale-115">
              <div>Home</div>
            </div>
            <div className="py-3 px-4 hover:shadow rounded-[10px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-115">
              <div>Find Jobs</div>
            </div>
            <div className="py-3 px-4 hover:shadow rounded-[10px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-115">
              <div>Find Talents</div>
            </div>
            <div className="py-3 px-4 hover:shadow rounded-[10px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-115">
              <div>About us</div>
            </div>
            <div className="py-3 px-4 hover:shadow rounded-[10px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-115">
              <div>Testimonals</div>
            </div>
          </div>
          <div className="my-auto">
            {islogged ? (
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
                className="bg-[#8a17e2] cursor-pointer rounded-full text-white py-2 px-5"
              >
                Create Jobs
              </button>
            ) : (
              <button
                onClick={() => {
                  setAdminLogin(true);
                }}
                className="bg-[#8a17e2] cursor-pointer rounded-full text-white py-2 px-5"
              >
                Admin Login
              </button>
            )}
          </div>
        </div>
      </div>
      {isOpen && <NewJob isOpen={isOpen} setIsOpen={setIsOpen} />}
      {adminLogin && (
        <AdminLogin adminLogin={adminLogin} setAdminLogin={setAdminLogin} />
      )}
    </section>
  );
}

export default Navbar;
