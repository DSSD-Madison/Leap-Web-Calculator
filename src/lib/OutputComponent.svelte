<script>
  import { writable } from 'svelte/store';

  export let estimatedCost = writable(0);
  let cost = 0;

  // Subscribe to the writable store
  estimatedCost.subscribe((value) => cost = value);
</script>

<div class="estimated-cost">
  <p>ESTIMATED COSTS:<br /></p>
  <p>$<span>{cost}</span></p>
</div>

<style>
  .estimated-cost {
      background-color: #007bff;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      font-weight: bold;
      color: white;
      width: 350px;
  }

  p {
      margin: 0;
  }
</style>