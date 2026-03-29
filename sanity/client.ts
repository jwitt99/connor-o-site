import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.PROJECT_ID ?? "0",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});