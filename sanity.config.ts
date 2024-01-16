import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { resolveProductionUrl } from "./resolveProductionUrl";
import schemas from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  title:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
    "Product Design Portfolio of Zac Halbert",
  apiVersion: "2023-12-22",
  basePath: "/admin",
  schema: { types: schemas },
  productionUrl: resolveProductionUrl,
  plugins: [deskTool(), codeInput(), visionTool()],
});

export default config;
