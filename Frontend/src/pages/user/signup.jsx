import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-icon.png";
import toast from "react-hot-toast";
import BackToHome from "../../components/back-to-home";
import axios from "../../utils/axios";

export default function Signup() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [acceptTnC, setAcceptTnC] = React.useState(false); 
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault(); 

    if (!acceptTnC) {
      toast.error("You must accept the Terms and Conditions to register.");
      return;
    }

    
      const { data } = await axios.post("/user/register", {
        name,
        email,
        password,
      });
      toast.success(data?.message);
      localStorage.setItem("userId", data?.user?._id);
      navigate("/user-profile");
    
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
        <div className="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"
          id="particles-snow"
        ></div>
        <div className="container relative z-3">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
              <Link to="/">
                <img src={logo} className="mx-auto" alt="" />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Signup</h5>
              <form className="text-start" action=" " onSubmit={submitHandler}>
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="name">
                      Your Name:
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Harry"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="email">
                      Email Address:
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="password">
                      Password:
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center w-full mb-0">
                      <input
                        className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        checked={acceptTnC}
                        onChange={() => setAcceptTnC(!acceptTnC)}
                        id="AcceptTnC"
                      />
                      <label
                        className="form-check-label text-slate-400"
                        htmlFor="AcceptTnC"
                      >
                        I Accept{" "}
                        <Link to="" className="text-red-500">
                          Terms And Condition
                        </Link>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full"
                  >
                    Register
                  </button>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Already have an account?{" "}
                    </span>{" "}
                    <Link
                      to="/login"
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <BackToHome />
    </>
  );
}
