import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";

export default function Home() {
  // const { userId } = auth();

  // if (userId) redirect("/messages");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-20 ">
        <ThemeToggleButton />
      </div>
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Next GPT" width={100} height={100} />
        <span className="text-4x1 fromt-extrabold tracking-tight lg:text-5x1">
          Next GPT
        </span>
      </div>
      <p className="max-wpprose text-center">
        Next GPT that allows users to engage with the AI model in real-time.
      </p>
      <Button size="lg" asChild variant="outline">
        <Link href="/messages">Get Started</Link>
      </Button>
    </main>
  );
}

// xXrRuR5oo2T5OpSQ
