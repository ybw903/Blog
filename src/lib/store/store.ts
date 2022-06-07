import { writable } from "svelte/store";

export const posts = writable([
  { title: "test1", content: "test1", id: 1 },
  { title: "test2", content: "test2", id: 2 },
]);

export const postId = writable(3);
