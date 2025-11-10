"use server";
import { api } from "@/convex/_generated/api";
import { getToken } from "@/lib/auth-server";
import { fetchMutation } from "convex/nextjs";


export async function updatePassword({
  currentPassword,
  newPassword,
}: {
  currentPassword: string;
  newPassword: string;
}) {
  const token = await getToken();

  if (!token) {
    return {
      success: false,
      message: "User is not authenticated."
    }
  }

  await fetchMutation(
    api.users.updateUserPassword,
    { currentPassword, newPassword },
    { token }
  );


  return {
    success: true,
  };
}