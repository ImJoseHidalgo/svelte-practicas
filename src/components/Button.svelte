<script>
    export let count = 0;
    export let text;
</script>

<div class="Button">
    <button on:click>
        {text}
        {count === 0 ? '' : count}
    </button>
</div>