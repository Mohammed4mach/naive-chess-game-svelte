<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Board from './Board.svelte';

  const { Story } = defineMeta({
    title: 'Chess Board',
    component: Board,
  });
</script>

<Story
  name="Regular"
/>

