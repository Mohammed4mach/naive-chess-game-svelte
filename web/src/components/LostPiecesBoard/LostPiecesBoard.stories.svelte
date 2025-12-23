<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LostPiecesBoard from './LostPiecesBoard.svelte';

  const { Story } = defineMeta({
    title: 'Lost Pieces Board',
    component: LostPiecesBoard,
  });
</script>

<Story
  name="Regular"
/>

