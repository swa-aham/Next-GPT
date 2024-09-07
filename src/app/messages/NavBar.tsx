import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";
import { UserButton } from "@clerk/nextjs";
export default function NavBar() {
  return (
    <div className="p-4 shadow ">
      <div className="flex flex-wrap gap-3 items-center justify-between max-w-7x1 ">
        <Link href="/messages" className="flex items-center gap-1">
          <Image src={logo} alt="Next Logo" width={40} height={40}></Image>
          <span className="font-bold">Next GPT</span>
        </Link>

        <div className="flex items-center gap-2">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
            }}
          />
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
}
