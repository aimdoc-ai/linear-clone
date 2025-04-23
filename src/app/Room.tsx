"use client";

import { RoomProvider } from "@liveblocks/react/suspense";
import { LiveList, LiveObject } from "@liveblocks/client";
import { useSearchParams } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { getRoomId } from "@/config";
import { ComponentContext } from "@doable.sh/sdk";

export function Room({
  children,
  issueId,
}: {
  children: ReactNode;
  issueId: string;
}) {
  const roomId = useExampleRoomId(getRoomId(issueId));

  return (
      <RoomProvider
        id={roomId}
        initialStorage={{
          meta: new LiveObject({ title: "Untitled issue" }),
          properties: new LiveObject({
            progress: "none",
            priority: "none",
            assignedTo: "none",
          }),
          labels: new LiveList([]),
          links: new LiveList([]),
        }}
      >
        {children}
        <ComponentContext 
      description="Collaborative room where multiple users can work on issues together"
      name="Collaboration Room"
    />
      </RoomProvider>
  );
}

/**
 * This function is used when deploying an example on liveblocks.io.
 * You can ignore it completely if you run the example locally.
 */
function useExampleRoomId(roomId: string) {
  const params = useSearchParams();
  const exampleId = params?.get("exampleId");

  const exampleRoomId = useMemo(() => {
    return exampleId ? `${roomId}-${exampleId}` : roomId;
  }, [roomId, exampleId]);

  return exampleRoomId;
}
