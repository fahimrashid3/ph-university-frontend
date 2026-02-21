"use client";

import { useLoginMutation } from "@/src/redux/features/auth/authApi";
import { setUser } from "@/src/redux/features/auth/authSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import { verifyToken } from "@/src/utils/verifyToken";
import { useForm } from "react-hook-form";

type LoginFormInputs = {
  id: string;
  password: string;
};

export default function Login() {
  const dispatch =useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [login, { isError }] = useLoginMutation();


  const onSubmit = async (data: LoginFormInputs) => {

    try {
      const res = await login(data).unwrap();
      const user =verifyToken(res.data.accessToken);
      console.log("Login Success:", res);
      dispatch(setUser({user,token:res.data.accessToken}))
      // redirect or store token here
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* ID Field */}
        <div>
          <label className="block mb-1 font-medium">User ID</label>
          <input
            type="text"
            {...register("id", { required: "ID is required" })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.id && (
            <p className="text-red-500 text-sm">{errors.id.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Error Message */}
        {isError && (
          <p className="text-red-500 text-sm">
            Login failed. Please check credentials.
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          // disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          login
          {/* {isLoading ? "Logging in..." : "Login"} */}
        </button>
      </form>
    </div>
  );
}