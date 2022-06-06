<script lang="ts">
import Header from './lib/components/Header.svelte'
import PostLists from './lib/components/PostLists.svelte'
import Router from 'svelte-spa-router'
import routes from './routes'
</script>

<main>
<Router routes={routes}/>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
