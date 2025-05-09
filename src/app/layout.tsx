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
        <div className="bg-black text-white py-2 text-center text-sm font-medium">
          <a href="https://github.com/aimdoc-ai/linear-clone" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            View source code on GitHub
          </a>
        </div>
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
