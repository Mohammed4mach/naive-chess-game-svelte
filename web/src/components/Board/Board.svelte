<script lang="ts">
  import type { Side, White, Black } from '$lib/types';

  const white : White = 'white';
  const black : Black = 'black';

  let isWhite : boolean        = false;
  const positionSides : Side[] = $state([]);

  for(let i = 0; i < 8; i++)
  {
      isWhite = !isWhite;

      for(let j = 0; j < 8; j++)
      {
        const side : Side = isWhite ? 'white' : 'black';
        positionSides.push(side);

          isWhite = !isWhite;
      }
  }
</script>

<section class="w-full max-w-212.5 grid grid-cols-8 justify-center items-center border-15 border-double border-black">
  {#each positionSides as side}
    {@render cell(side)}
  {/each}
</section>

{#snippet cell(side : Side = 'white')}
  <div
    class="flex justify-center items-center aspect-square"
    class:bg-white={side === white}
    class:bg-black={side === black}
  >

  </div>
{/snippet}

