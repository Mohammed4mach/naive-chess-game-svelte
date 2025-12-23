<script lang="ts">
  import { setLocale, getLocale } from '$lib/paraglide/runtime';
  import { m } from '$lib/paraglide/messages';
  import { Button } from '@components';

  let locale = getLocale();
  let toggleLocale = () => locale === 'en' ? setLocale('ar') : setLocale('en');
</script>

<main>
  <section class="flex min-w-6">
    <Button onclick={toggleLocale}>{locale == 'en' ? 'العربية' : 'English'}</Button>
  </section>

  <h1>Vite + Svelte</h1>
  <h2>{m.hello_user({username: 'Moha4mach'})}</h2>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
