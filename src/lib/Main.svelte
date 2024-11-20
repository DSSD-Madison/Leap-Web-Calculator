<script>
  import { writable } from 'svelte/store';
  import Control from './Control.svelte';
  import OutputComponent from './OutputComponent.svelte';

  let estimatedCost = writable(0);
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <!-- Pass the writable store to Control and OutputComponent -->
  <Control {estimatedCost} />
  <OutputComponent {estimatedCost} />
</main>

<style>
  main {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 20px;
      font-family: Arial, Helvetica, sans-serif;
  }
</style>