"use client";
import { useEffect, useState } from "react";

export default function useToken() {
  const [Token, setToken] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tempToken = localStorage.getItem("token");
      setToken(tempToken);
    }
  }, []);
  return Token;
}
