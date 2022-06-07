<script>
    import {push} from 'svelte-spa-router'
    export let post;
    const onClickHandler = () => {
        push(`/post/${post.id}`);
    }
</script>

<div class="Post-Card" on:click={onClickHandler}>
    <h4>{post.title}</h4>
    <div>{post.content}</div>
</div>

<style lang="scss">
    .Post-Card {
        width: 20rem;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 0.2) 0px 4px 16px 2px;
        padding: 1em;
        margin: 1rem;

        >h4 {
            font-size: 1rem;
            margin: 0px 0px 0.25rem;
            line-height: 1.5;
            word-break: break-word;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
</style>