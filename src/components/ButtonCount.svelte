<script>
    import { count } from "../store/store";

    function handlClick() {
        count.update(n => n + 1)
    }
</script>

<style>
    button {
        background: #f76027;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 0.3rem .6rem;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>

<button on:click={handlClick}>
    Click {$count === 0 ? '' : $count}
</button>