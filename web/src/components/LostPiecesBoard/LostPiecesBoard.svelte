<script lang="ts">
  export interface LostPiecesBoardProps {
    children?: any;
  };

  const { children } : LostPiecesBoardProps = $props();
</script>

<section
  class={[
    "py-2 px-4", // Layout
    "font-bold", // Typography
    "border-5 border-double rounded-lg", // Perimeter
    "-translate-y-0.5 translate-x-0.5 active:translate-0", // Position
    "border-bisque-dark-900 bg-bisque text-gray-700 active:bg-bisque-dark-600 hover:bg-bisque-dark-400", // Colors
    "shadow-[-4px_2px_2px] shadow-black/10 active:shadow-none active:inset-shadow-md", // Shadow
    "cursor-pointer transition-all duration-100 ease-linear", // Misc
  ]}
>
  {@render children()}
</section>

