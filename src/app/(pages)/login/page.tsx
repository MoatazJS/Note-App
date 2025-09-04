"use client";
export const dynamic = "force-dynamic";
import { apiServices } from "@/lib/ApiCalls/services";
import { LoginFormSchema, LoginFormValues } from "@/lib/validations/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/home"); // redirect if token exists
    }
  }
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });
  async function handleLoginSubmit(data: LoginFormValues) {
    setIsLoading(true);
    try {
      const response = await apiServices.loginApi(data);
      console.log(response);
      if (window) {
        localStorage.setItem("token", response.token);
      }
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
      reset();
      console.log(localStorage.getItem("token"));
    }
  }

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-700">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>
        <p className="text-slate-400 text-center mt-2">
          Login to access your notes ✨
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleLoginSubmit)}
          className="mt-8 space-y-5"
        >
          {/* Email */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-purple-500/20"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-slate-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-purple-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
