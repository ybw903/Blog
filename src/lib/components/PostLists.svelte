<script lang="ts">
import PostCard from "./PostCard.svelte";

    let dummyData = [{title: 'test1', content: 'test1'},{title: 'test2', content: 'test2'}]
</script>
<section>
    <div class="Posts-Container">
        {#each dummyData as data, index}
            <PostCard title={data.title} content={data.content}/>
        {/each}
    </div>
</section>

<style lang="scss">
    .Posts-Container {
        display: flex;
        flex-wrap: wrap;
    }
</style>