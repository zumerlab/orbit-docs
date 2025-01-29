<script>
  import { onMount } from 'svelte';
    onMount(async () => {
    await import('../../assets/orbit.min.js');
  });
  let msg = 'Svelte';
</script>

<style lang="css">
  @import 'https://unpkg.com/@zumer/orbit@latest/dist/orbit.css';
  .satellite {
    background: var(--o-cyan-light) !important;
    border: none !important;
  }
  o-arc {
    --o-fill: var(--o-cyan-light)  !important;
  }
  .bigbang {
    height: 300px;
  }
  .gravity-spot {
    --o-force: 600px
  }
</style>
    
<div class="bigbang not-content">
  <div class="gravity-spot">
    <div class="orbit">
      <div class="satellite grow-1x at-center">{msg}</div>
    </div>
    <div class="orbit-2 range-180 from-180">
      <o-arc shape="circle" class="shrink-50"></o-arc>
    </div>
    <div class="orbit-3 range-270 ">
      <o-arc shape="circle" class="shrink-50"></o-arc>
    </div>
  </div>
</div>