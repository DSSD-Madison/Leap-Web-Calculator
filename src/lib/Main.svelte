<script>
    import Control from './Control.svelte';
    import OutputComponent from './OutputComponent.svelte';
  </script>

<div class="container">
<main>
    <!-- Display the Control component -->
    <Control />
    <!-- Display the OutputComponent component -->
    <OutputComponent />
</main>
</div>
  <style>
    main {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }
    :global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0; /* Light gray background for the entire page */
    }
    .container {
      background-color: #ced4da;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 90%;
      box-sizing: border-box; /* Include border in the element's total width and height */
    }
  </style>