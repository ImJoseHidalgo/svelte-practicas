<script>
	import About from './components/About.svelte';
	import Text from './components/Text.svelte';
	import Person from './components/Person.svelte';
	import Skills from './components/Skills.svelte';
	import Input from './components/Input.svelte';
	import Photos from "./components/Photos.svelte";
	import ButtonCount from "./components/ButtonCount.svelte";
	
	export let name;
	export let lastName;
	let svelteLogo = 'https://arepa.s3.amazonaws.com/svelte-logo.png';
	
	const data = {
		name: 'Joseph',
		lastName: 'Hidalgo',
		edad: 24,
	}
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About/>
	<Text anotherText='Hola bb'/>
	<Text />
	<Person {...data}/>
	<Skills />
	<Input />
	<ButtonCount />
	<Photos />
	<img src={svelteLogo} alt="svelte">
</main>

<style>
	:global(body) {
		background: #0d1648;
		color: #c4c4c4;
	}
	:global(:root) {
		--theme-color: #fff;
	}
	:global(body.dark-mode) {
		background: #000;
		color: #fff;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	main img {
		width: 30%;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>