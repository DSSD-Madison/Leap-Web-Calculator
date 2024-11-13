<script>
    import Control from './Control.svelte';
    import OutputComponent from './OutputComponent.svelte';
  </script>
  
  <main>
    <!-- Display the Control component -->
    <Control />
  
    <!-- Display the OutputComponent component -->
    <OutputComponent />
  </main>
  
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
  </style>