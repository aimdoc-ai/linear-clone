"use client";

import {
  ClientSideSuspense,
  useMutation,
  useStorage,
} from "@liveblocks/react/suspense";
import { LABELS } from "@/config";
import { Select } from "@/components/Select";
import { PlusIcon } from "@/icons/PlusIcon";
import { ImmutableStorage } from "@/liveblocks.config";
import { ComponentContext } from "@doable.sh/sdk";

export function IssueLabels({
  storageFallback,
}: {
  storageFallback: ImmutableStorage;
}) {
  return (
    <ClientSideSuspense
      fallback={
        <div className="text-sm flex gap-1.5 justify-start items-start font-medium max-w-full flex-wrap min-h-[26px] pointer-events-none">
          {LABELS.filter((label) =>
            storageFallback.labels.includes(label.id)
          ).map(({ id, text }) => (
            <div
              key={id}
              className="text-sm font-medium rounded-full px-2 py-0.5 border shadow-xs flex items-center gap-1.5 select-none text-neutral-700"
            >
              <div className="bg-neutral-400/60 rounded-full w-2 h-2" />
              {text}{" "}
              <div className="text-base leading-none pb-0.5 text-neutral-400">
                ×
              </div>
            </div>
          ))}
        </div>
      }
    >
      <ComponentContext
        description="The labels we can add to the issue are set here. It's a dropdown with the labels and a plus icon to add a new label."
        name="Issue Labels"
      />
      <Labels />
    </ClientSideSuspense>
  );
}

function Labels() {
  const labels = useStorage((root) => root.labels);

  const addLabel = useMutation(({ storage }, labelId) => {
    storage.get("labels").push(labelId);
  }, []);

  const removeLabel = useMutation(({ storage }, labelId) => {
    const index = storage.get("labels").findIndex((label) => label === labelId);
    storage.get("labels").delete(index);
  }, []);

  const LABEL_LIST = LABELS.map((label) => ({
    ...label,
    disabled: labels.includes(label.id),
  }));

  return (
    <div className="text-sm flex gap-1.5 justify-start items-start font-medium max-w-full flex-wrap">
      {LABELS.filter((label) => labels.includes(label.id)).map(
        ({ id, text }) => (
          <div
            key={id}
            className="text-sm font-medium rounded-full px-2 py-0.5 border shadow-xs flex items-center gap-1.5 select-none text-neutral-700"
          >
            <div className="bg-neutral-400/60 rounded-full w-2 h-2" />
            {text}{" "}
            <ComponentContext
              description={`Remove the "${text}" label from this issue`}
              name="Remove Label Button"
            />
              <button
                className="text-base leading-none pb-0.5 text-neutral-400"
                onClick={() => removeLabel(id)}
              >
                ×
              </button>
          </div>
        )
      )}
      <div className="overflow-hidden bg-transparent rounded-full transition-colors h-[26px]">
        <ComponentContext
          description="Dropdown menu to add a new label to the issue. Click the plus icon to see available labels. Labels options are: bug, feature, engineering, design, and/or product."
          name="Add Label Dropdown"
        />
          <Select
            id="add1-label"
            value={"add"}
            items={[
              {
                id: "add",
                jsx: <PlusIcon className="w-4 h-4 -mt-0.5" />,
              },
              ...LABEL_LIST,
            ]}
            adjustFirstItem="hide"
            onValueChange={(value) => {
              addLabel(value);
            }}
          />
      </div>
    </div>
  );
}
