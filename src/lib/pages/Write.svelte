<script lang="ts">

</script>

<section class="Wrapper">
    <div class="Title-Input">
        <label for="Title">제목</label>
        <input type="text" name="Title"/>

    </div>
    <div class="Content-Input">
        <label for="Content">내용</label>
        <textarea name="Content" rows="5" cols="33"/>
    </div>
    <div class="Btn-Box">
        <button>저장</button>
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