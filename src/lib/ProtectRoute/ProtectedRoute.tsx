"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // redirect if not logged in
    }
  }, [router]);

  return <>{children}</>;
}
