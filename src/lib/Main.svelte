<script>
  import { writable } from 'svelte/store';
  import Control from './Control.svelte';
  import OutputComponent from './OutputComponent.svelte';
  import Navbar from './Navbar.svelte';

  let estimatedCost = writable(0);
</script>

<svelte:head><link rel="icon" type="image/x-icon" href="../src/images/favicon.png"/></svelte:head>
  
<main>
  <Navbar/>
  <div class="main-container">
    <Control {estimatedCost} />
    <OutputComponent {estimatedCost} />
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    gap: 25px;
    transition: 250ms;
    flex-wrap: wrap;
    font-family: Poppins;
  }
  .main-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 25px;
      font-family: Poppins;
      transition: 250ms;
  }
</style>