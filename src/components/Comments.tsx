"use client";

import { useThreads, ClientSideSuspense } from "@liveblocks/react/suspense";
import { ThreadData } from "@liveblocks/client";
import { Composer, Thread } from "@liveblocks/react-ui";
import { useState } from "react";
import { ComponentContext } from "@doable.sh/sdk";

export function Comments() {
  return (
    <>
      <div className="font-medium">Comments</div>
      <ClientSideSuspense
        fallback={
          <>
            <div className="bg-gray-100/80 animate-pulse h-[130px] rounded-lg my-6" />
          </>
        }
      >
        <ThreadList />
        <Composer className="border border-neutral-200 !my-4 rounded-lg overflow-hidden shadow-sm bg-white" />
      </ClientSideSuspense>
      <ComponentContext 
        description="Comment section where users can discuss the issue"
        name="Issue Comments"
      />
      <ComponentContext 
        description="Input field for adding new comments to the issue"
        name="Comment Input"
      />
    </>
  );
}

function ThreadList() {
  const { threads } = useThreads();

  if (threads.length === 0) {
    return null;
  }

  return (
    <div className="">
      {threads.map((thread) => (
        <CustomThread key={thread.id} thread={thread} />
      ))}
    </div>
  );
}

function CustomThread({ thread }: { thread: ThreadData }) {
  const [open, setOpen] = useState(!thread.resolved);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="border border-neutral-200 my-4 rounded-lg overflow-hidden shadow-sm bg-white w-full text-sm text-left flex items-center h-10 px-3"
      >
        ✓ Thread resolved
      </button>
    );
  }

  return (
    <Thread
      key={thread.id}
      thread={thread}
      className="border border-neutral-200 my-4 rounded-lg overflow-hidden shadow-sm bg-white"
      onResolvedChange={(resolved) => {
        if (resolved) {
          setOpen(false);
        }
      }}
    />
  );
}
