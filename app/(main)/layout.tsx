'use client';

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_compoents/navigation";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export default function MainLayout({children}:{children: React.ReactNode}) {
  const {isAuthenticated, isLoading} = useConvexAuth()

  if(isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size={"lg"} />
      </div>
    )
  }

  return (
    <SignedIn>
      <div className="h-full flex dark:bg-['#1F1F1F']">
        <Navigation />
        <main className="flex-1 h-full overflow-auto">
          {children}
        </main>
      </div>
    </SignedIn>
  )
}