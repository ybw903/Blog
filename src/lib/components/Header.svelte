<script>
    import Button from './Button.svelte'
</script>

<header class="Header">
    <div class="Header-Box">
        <h2>Daylog</h2>
        <a href="#/write">
            <Button content={"새 글 작성" }/>
        </a>   
    </div>
</header>

<style lang="scss">
    .Header {
        height: 4em;
    }
    .Header-Box {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>