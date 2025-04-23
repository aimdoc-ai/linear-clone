import { Nav } from "@/components/Nav";
import { liveblocks } from "@/liveblocks.server.config";
import { RoomWithMetadata } from "@/config";
import { IssuesList } from "@/components/IssuesList";
import { ComponentContext } from "@doable.sh/sdk";

export const revalidate = 0;

export default async function PageIssue() {
  const rooms = (await liveblocks.getRooms()).data as RoomWithMetadata[];
  return (
    <div className="flex flex-row h-full">
      <ComponentContext
        description="This here is the Nav area and Issue List area"
        name="Issue"
        path="/"
      />
      <nav className="p-2 w-[200px] xl:w-[250px]">
        <Nav />
      </nav>
      <main className="m-2 border flex-grow bg-neutral-50 rounded">
        <ComponentContext 
          description="List of all issues in the project"
          name="Issues List"
        />
        <IssuesList initialRooms={rooms} />
        <ComponentContext
          description={JSON.stringify(rooms)}
          name="Rooms"
          path="/"
        />
        <ComponentContext 
          description="Button to create a new issue"
          name="Create Issue Button"
        />
      </main>
    </div>
  );
}
