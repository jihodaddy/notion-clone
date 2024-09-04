"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hook/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  const {isAuthenticated,isLoading} = useConvexAuth()
  const scrolled = useScrollTop()

return (
    <div className={cn(`z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6`,scrolled && 'border-b shadow-sm')}>
      <Logo/>
      <div className="md:ml-auto md:justify-end flex gap-x-2 justify-between items-center w-full">
        {isLoading && (
          <Spinner/>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant='ghost' size='sm'>
                Login
              </Button>
            </SignInButton>
              <SignInButton mode="modal">
              <Button  size='sm'>
                Get Joshion free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant='ghost' size='sm' asChild>
              <Link href='/documents'>
                Enter Jotion
              </Link>
            </Button>
            <UserButton />
          </>
        )}
        <ModeToggle/>
      </div>
    </div>
  )
}