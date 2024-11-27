<script>
  import { writable } from 'svelte/store';
  import Control from './Control.svelte';
  import OutputComponent from './OutputComponent.svelte';

  let estimatedCost = writable(0);
</script>


  <main>
    <Control {estimatedCost} />
    <OutputComponent {estimatedCost} />
  </main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  main {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 25px;
      font-family: Poppins;
      height: 100vh;
      transition: 250ms;
  }
</style>