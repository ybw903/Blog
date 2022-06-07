import Home from "../lib/pages/Home.svelte";
import Write from "../lib/pages/Write.svelte";
import Post from "../lib/pages/Post.svelte";

export default {
  "/": Home,
  "/write": Write,
  "/post/:id": Post,
};
