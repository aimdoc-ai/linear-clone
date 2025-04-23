import { Room } from "@/app/Room";
import RoomErrors from "@/components/RoomErrors";
import { Issue } from "@/components/Issue";
import { Nav } from "@/components/Nav";
import { Inbox } from "@/components/Inbox";
import { DisplayWhenInboxOpen } from "@/components/InboxContext";
import { ComponentContext } from "@doable.sh/sdk";
export const revalidate = 0;

export default async function PageHome({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Room issueId={id}>
      <div className="flex flex-row h-full">
        <nav className="p-2 w-[200px] xl:w-[250px]">
          <Nav />
        </nav>
        <main className="m-2 border flex-grow bg-neutral-50 rounded flex flex-row overflow-hidden">
          <DisplayWhenInboxOpen>
            <div className="border-r w-[200px] xl:w-[300px]">
              <Inbox />
              <ComponentContext
                description="This is the inbox area"
                name="Inbox"
                path="/"
              />
            </div>
          </DisplayWhenInboxOpen>
          <div className="flex-grow">
            <Issue issueId={id} />
            <ComponentContext
              description={`This is the issue detail area for the issue with id: ${id}`}
              name="Issue Detail"
              path="/"
            />
          </div>
        </main>
      </div>
      <RoomErrors />
      <ComponentContext 
        description="Page displaying a single issue with all its details and interactions"
        name="Issue Detail Page"
      />
    </Room>
  );
}
