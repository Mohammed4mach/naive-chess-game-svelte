<script lang="ts">
  export interface PieceProps {
    children?: any;
  };

  const { children, onclick } : PieceProps = $props();
</script>

<button>
  {@render children()}
</button>

