<script lang="ts">
    import {push} from 'svelte-spa-router'
    import {posts, postId} from '../store/store';
    let title;
    let content;
    const onBtnClick = ()=> {
        posts.update(prev => [...prev, {title: title, content: content, id: $postId}]);
        postId.update(prev => prev + 1);
        push('/');
    }
</script>

<section class="Wrapper">
    <div class="Title-Input">
        <label for="Title">제목</label>
        <input type="text" name="Title" bind:value={title}/>

    </div>
    <div class="Content-Input">
        <label for="Content">내용</label>
        <textarea name="Content" rows="5" cols="33" bind:value={content}/>
    </div>
    <div class="Btn-Box">
        <button on:click={onBtnClick}>저장</button>
    </div>
</section>

<style lang="scss">
    .Wrapper {
        display: flex;
        flex-direction: column;
    }
    .Title-Input {
        display: flex;
        align-items: center;
        > label {
            padding-right: 1em;
        }
    }
    .Content-Input {
        display: flex;
        align-items: center;
        margin-top: 2em;
        > label {
            padding-right: 1em;
        }
    }
    .Btn-Box {
        margin-top: 2em;
        display: flex;
        
    }
</style>