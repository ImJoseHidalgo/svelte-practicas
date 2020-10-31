<script>
    import Button from './Button.svelte';

    let someText = `Frontend Developer in Training`;
    let count = 0;
    let styles = { darkMode: false};

    function handleClick() {
        count += 1;
    }
    function toggle() {
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle('dark-mode');
    }
</script>

<style>
    p {
        color: var(--theme-colo);
    }
</style>

<div class="About">
    {#if !styles.darkMode}
        <p>{someText}</p>
        {:else}
        <p>Hello Dark Mode</p>
    {/if}

    <Button 
    text='Click' 
    count={count} 
    on:click={handleClick}
    />
    <Button 
    text={styles.darkMode ? 'LightMode 🌞' : 'DarkMode 🌒'}
    on:click={toggle}
    />
    <button on:click={handleClick}>
        Click {count === 0 ? '' : count}
    </button>
    <button on:click={toggle}> {styles.darkMode ? 'LightMode 🌞' : 'DarkMode 🌒'}</button>
</div>