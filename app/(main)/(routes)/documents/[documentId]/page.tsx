'use client';

import Cover from '@/components/cover';
import Toolbar from '@/components/toolbar';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import * as React from 'react';

export interface IDocumentIdPageProps {
  params: {
    documentId: Id<'documents'>;
  }
}

export default function DocumentIdPage ({
  params
}: IDocumentIdPageProps) {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId
  })

  if(document === undefined) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (document === null) {
    return <div>Not Found</div>
  }

  return (
    <div className='pb-40'>
      <Cover url={document.coverImage} />
      <div className='md:max-w-3xl lg:max-w-4xl mx-auto'>
        <Toolbar initialData={document} />
      </div>
    </div>
  );
}
