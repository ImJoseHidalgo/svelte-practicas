<script>
    import { onMount } from "svelte";

    let characters = [];

    onMount(async () => {
        console.log('onMount');
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        characters = data.results;
    })
</script>

<style>
    .Photos {
        max-width: 1000px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px;
    }
    .Photos figure {
        margin: 0;
    }
    .Photos figure img {
        width: 100%;
    }
</style>

<div class="Photos">
    {#each characters as character}
        <figure>
            <img src={character.image} alt={character.name}>
            <figcaption>{character.name}</figcaption>
        </figure>
        {:else}
        <p>Loading...</p>
    {/each}
</div>