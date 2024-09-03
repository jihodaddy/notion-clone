"use client";

import { useScrollTop } from "@/hook/use-scroll-top";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export default function Navbar() {
  const { isAuthenticated, isLoading} = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      'z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6',
      scrolled && 'border-b shadow-sm'
    )}>
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full
      flex items-center gap-x-2">
        {isLoading && (
          <Spinner />
        )}
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant={"ghost"} size={'sm'}>
              Log in
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size={'sm'}>
              Get Yestion free
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Button variant={'ghost'} size={'sm'} asChild>
            <Link href={'/documents'}>
              Enter Yestion
            </Link>
          </Button>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </div>
  )
}