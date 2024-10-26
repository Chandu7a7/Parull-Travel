import React from "react";
import axios from "../../../utils/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import sweetAlert from "sweetalert2";

const LoginComponent = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      sweetAlert.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
      });
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post("/admin/login", {
        username: email,
        password: password,
      });

      if (data.status) {
        localStorage.setItem("adminToken", data.data.token);
        navigate("/admin/dashboardView");
      } else {
        sweetAlert.fire({
          icon: "error",
          title: "Oops...",
          text: data.message,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mt-4 items-center h-screen w-full">
      <h2 className="text-2xl dark:text-whiteSecondary text-blackPrimary font-medium max-sm:text-xl">
        Welcome to the dashboard!
      </h2>
      <div className="w-full mt-5 bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4">
          Admin Login
        </span>
        <form className="mb-4" onSubmit={submitHandler}>
          <div className="mb-4 md:w-full">
            <label
              htmlFor="email"
              className="block text-base mb-1 font-semibold"
            >
              Username
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="username"
              id="email"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-6 md:w-full">
            <label
              htmlFor="password"
              className="block text-base mb-1 font-semibold"
            >
              Password
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="uppercase text-sm  font-semibold  px-24 py-2 rounded bg-color-red text-black"
            disabled={loading}
          >
            {loading ? "Logging in..." : " Admin Login "}

         
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
