import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Providers } from "./Providers";
import "../globals.css";
import "../liveblocks.css";
import { TaskDefinition } from "@doable.sh/sdk";

export const metadata: Metadata = {
  title: "Liveblocks",
  description:
    "This example shows how to build a project manager using Liveblocks, and Next.js.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} absolute inset-0`}>
      <head>
        <link
          href="https://liveblocks.io/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="https://liveblocks.io/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <script src="https://doable.sh/api/widget/f5bae9f7-8cfe-43e0-85bd-62fb0eba496e"></script>
      </head>
      <body className="bg-neutral-200/50 text-neutral-900 antialiased h-full w-full overflow-hidden">
        <Providers>{children}</Providers>

        <a
          className="fixed bottom-4 right-4"
          href="https://liveblocks.io"
          rel="noreferrer"
          target="_blank"
        >
          <picture>
            <source
              srcSet="https://liveblocks.io/badge-dark.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="https://liveblocks.io/badge-light.svg"
              alt="Made with Liveblocks"
              className=""
            />
          </picture>
        </a>
        <TaskDefinition id="create-issue" name="Create Issue" description="Create a new issue or new task or new work item in the project" steps={["Click the button to create a new issue button in navigation (to the right of Acme Inc)", "Fill in the issue details in the issue detail area", "Add labels to the issue", "Add a description to the issue", "Add a due date to the issue", "Add a priority to the issue", "Add a status to the issue", "Add a assignee to the issue", "Add a comment."]} />
      </body>
    </html>
  );
}
