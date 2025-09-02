import Image from "next/image";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <LoginButton></LoginButton>
      <p className="font-bold">From client components</p>
      <UserInfo></UserInfo>
      <p className="font-bold">From server components</p>
      {JSON.stringify(session)}

    </div>
  );
}
