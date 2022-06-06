<script>
    export let title;
    export let content;
</script>

<div class="Post-Card">
    <div>{title}</div>
    <div>{content}</div>
</div>

<style lang="scss">
    .Post-Card {
        width: 20rem;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    }
</style>