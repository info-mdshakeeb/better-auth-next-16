"use client";
import { ConvexReactClient, ConvexProvider as Provider } from "convex/react";
import React from "react";

import { env } from "@/env";

const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL);
export function ConvexProvider({ children }: { children: React.ReactNode }) {
  return <Provider client={convex}>{children}</Provider>;
}
