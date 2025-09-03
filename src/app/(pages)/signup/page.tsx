"use client";

import {
  RegisterFormSchema,
  RegisterFormValues,
} from "@/lib/validations/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    mode: "onChange",
  });

  function handleSignUp(data: RegisterFormValues) {
    console.log(data);
  }

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-700">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center">
          Create an Account
        </h1>
        <p className="text-slate-400 text-center mt-2">
          Sign up to start keeping your notes safe ✨
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(handleSignUp)} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">Name</label>
            <input
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
              type="name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name?.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">Email</label>
            <input
              required
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
              required
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

          {/* Age */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">Age</label>
            <input
              {...register("age", { valueAsNumber: true })}
              required
              type="number"
              placeholder="18"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age?.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">
              Phone Number
            </label>
            <input
              required
              {...register("phone")}
              type="tel"
              placeholder="+20 123 456 7890"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone?.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-purple-500/20"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-slate-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
