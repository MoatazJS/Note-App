// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useToken from "@/lib/hooks/TokenHook";

// export default function ProtectRoute({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();
//   const token = useToken();
//   useEffect(() => {
//     if (!token) {
//       router.push("/login"); // redirect if not logged in
//     }
//   }, [router, token]);

//   return <>{children}</>;
// }
