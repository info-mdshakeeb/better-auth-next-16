"use client";
import React from "react";

import { Toaster } from "../ui/sonner";
import { ConvexProvider } from "./convex-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ConvexProvider>
        {children}
        <Toaster position="top-center" />
      </ConvexProvider>
    </>
  );
}
