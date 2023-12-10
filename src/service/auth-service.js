import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export const getUser = async () => {
  const user = await getServerSession(authOption);
  return user?.user;
};
