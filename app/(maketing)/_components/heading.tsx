'use client';

import { Button } from '@/components/ui/button';
import * as React from 'react';
import { ArrowRight } from 'lucide-react'
import { useConvexAuth } from 'convex/react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';

export default function Heading () {
  const {isAuthenticated, isLoading} = useConvexAuth();

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas, Documents & Plans. Unified. Welcome 
        to <span className='underline'>Yestion</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        Yestion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className='w-full flex items-center justify-center'>
          <Spinner size={'lg'}/>
        </div>
      )}
      {!isLoading && (
        <>
          <SignedIn>
            <Button asChild>
              <Link
                href={'/documents'}
              >
                Enter Yestion
                <ArrowRight className='h-4 w-4 ml-2'/>
              </Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>
              <Button>
                Get Yestion free
                <ArrowRight className='h-4 w-4 ml-2'/>
              </Button>
            </SignInButton>
          </SignedOut>
        </>
      )}
    </div>
  );
}
