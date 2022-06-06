<script lang="ts">
    import PostCard from "./PostCard.svelte";
    import {posts} from '../store/store'
</script>
<section>
    <div class="Posts-Container">
        {#each $posts as post, index}
            <PostCard title={post.title} content={post.content}/>
        {/each}
    </div>
</section>

<style lang="scss">
    .Posts-Container {
        display: flex;
        flex-wrap: wrap;
    }
</style>