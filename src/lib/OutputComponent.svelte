<script>
  import { writable } from 'svelte/store';

  export let estimatedCost = writable(0);
  let cost = 0;

  // Subscribe to the writable store
  estimatedCost.subscribe((value) => cost = value);
</script>

<div class="estimated-cost">
  <p>Estimated Costs:<br /></p>
  <p>$<span>{cost.toFixed(2)}</span></p>
</div>

<style>
  .estimated-cost {
      background-color: #ffd15c;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      color: white;
      width: 350px;
      font-family: Poppins;
      cursor: default;
      animation: fadeInUp 0.5s ease forwards;
      transform: translateY(20px);
      opacity: 0;
  }

  p {
      margin: 0;
  }

  @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>