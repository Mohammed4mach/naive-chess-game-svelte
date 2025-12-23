import { mount } from 'svelte';
import App from './App.svelte';
import { getLocale } from '$lib/paraglide/runtime';

let locale        = getLocale();
let textDirection = locale === 'en' ? 'ltr' : 'rtl'

document.documentElement.lang = getLocale();
document.documentElement.dir  = textDirection;

const app = mount(App, {
  target: document.getElementById('app')!,
});

export default app;
