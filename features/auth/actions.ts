"use server";

import { api } from "@/convex/_generated/api";
import { createAuth } from "@/convex/auth";
import { getToken } from "@/lib/auth-server";
import catchAsync from "@/lib/catch-async";

import { fetchMutation } from "convex/nextjs";

export async function loginUser({
  email, password,
}: {
  email: string;
  password: string;
}) {
  return catchAsync(async () => {
    await createAuth
  });
}


export async function updatePassword({
  currentPassword,
  newPassword,
}: {
  currentPassword: string;
  newPassword: string;
}) {

  return catchAsync(async () => {
    const token = await getToken();
    if (!token) {
      throw new Error("User is not authenticated.");
    }
    await fetchMutation(
      api.users.updateUserPassword,
      { currentPassword, newPassword },
      { token }
    );
    return { success: true };
  });
}