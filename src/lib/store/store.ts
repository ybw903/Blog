import { writable } from "svelte/store";

export const posts = writable([
  { title: "test1", content: "test1" },
  { title: "test2", content: "test2" },
]);
