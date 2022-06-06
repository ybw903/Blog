<script>
    export let title;
    export let content;
</script>

<div class="Post-Card">
    <h4>{title}</h4>
    <div>{content}</div>
</div>

<style lang="scss">
    .Post-Card {
        width: 20rem;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
        padding: 1em;

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