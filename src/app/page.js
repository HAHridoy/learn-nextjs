import Image from "next/image";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <LoginButton></LoginButton>
    </div>
  );
}
