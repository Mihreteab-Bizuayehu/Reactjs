import { useState } from "react"

type User = {
  fullName: string;
  email: string;

}

const CaseTwo = () => {

  const [user, setUser] = useState<User | null>(null);

  const loginHandler = () => {
    setUser({ fullName: "Mihreteab Bizuayehu",email:"mera@gmail.com" });
  }
  
  const logoutHandler = () => {
    setUser(null);
  }

  return (
    <div>
      {user ? (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col self-start mb-5 gap-3">
            <p className=" font-bold text-xl">Name: {user.fullName}</p>
            <p className=" font-bold text-xl">Email: {user.email}</p>
          </div>
          <button
            className="self-center py-[10px] px-[25px] rounded-lg bg-red-500 text-white font-bold text-xl text-center"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="text-center font-bold text-xl mb-5">Please Login!</p>
          <button
            className="self-center py-[10px] px-[25px] rounded-lg bg-green-500 text-white font-bold text-xl text-center"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default CaseTwo