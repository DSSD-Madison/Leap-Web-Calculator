<script>
    import Control from './Control.svelte';
    import OutputComponent from './OutputComponent.svelte';
    let estimatedCost = 0;
  </script>
  
  <svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap" rel="stylesheet">
  </svelte:head>
  <main>
    <!-- Display the Control component -->
    <Control />
  
    <!-- Display the OutputComponent component -->
    <OutputComponent {estimatedCost}/>
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