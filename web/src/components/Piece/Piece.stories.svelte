<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Piece from './Piece.svelte';

  const { Story } = defineMeta({
    title: 'Piece',
    component: Piece,
  });
</script>

<Story
  name="Regular"
>
  Piece
</Story>

