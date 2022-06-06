<script lang="ts">
    let dummyData = [{title: 'test1', description: 'test1'},{title: 'test2', description: 'test2'}]
</script>
<section>
    <div>
        {#each dummyData as data, index}
            <div>{data.title}</div>
            <div>{data.description}</div>
        {/each}
    </div>
</section>

<style lang="scss">
    
</style>