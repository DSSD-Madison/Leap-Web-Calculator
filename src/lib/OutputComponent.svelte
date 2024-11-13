<script>
    export let estimatedCost;
  </script>
  
  <div class="estimated-cost">
    <p>ESTIMATED COSTS:<br /></p>
    <p>$<span>{estimatedCost}</span></p>
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