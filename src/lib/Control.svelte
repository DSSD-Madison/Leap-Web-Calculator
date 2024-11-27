<script>
    import { writable } from 'svelte/store';
    export let estimatedCost = writable(0);

    let mainSquareFootage = 1000;
    let hasBasement = false;
    let basementSquareFootage = 500;

    function handleFormSubmission() {
        const totalSquareFootage = mainSquareFootage + (hasBasement ? basementSquareFootage : 0);
        let cost = 400;

        if (totalSquareFootage > 2000) {
            cost += (totalSquareFootage - 2000) * 0.20;
        }

        estimatedCost.set(cost); // Update the store
    }
</script>

<style>
    .component-container {
        background-color: #fff;
        padding: 2rem;
        border-radius: 15px;
        width: 300px;
        transform: translateY(20px);
        opacity: 0;
        animation: fadeInUp 0.5s ease forwards;
        overflow: hidden;
        transition: height 0.4s ease;
        color: #545444;
        border: 2px solid #edf5fd;
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .form-group {
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;
    }

    .form-title {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        font-weight: bold;
    }

    .slider-input-group {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    input[type="number"] {
        width: 100%;
        padding: 0.5rem;
        border: 2px solid #edf5fd;
        border-radius: 8px;
        outline: none;
        font-size: 1rem;
        transition: 250ms;
        font-family: Poppins;
    }

    input[type="number"]:hover {
        border-color: #ffd15c;
    }

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none; 
        width: 100%;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        border-radius: 16px;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        height: 12px;
        background: #ccc;
        border-radius: 16px;
    }

    input[type="range"]::-moz-range-track {
        height: 12px;
        background: #ccc;
        border-radius: 16px;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none; 
        height: 12px;
        width: 12px;
        background-color: #fff;
        border-radius: 50%;
        border: 2px solid #ffd15c;
        box-shadow: -407px 0 0 400px #ffd15c;
    }

    input[type="range"]::-moz-range-thumb {
        height: 12px;
        width: 12px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #ffd15c;
        box-shadow: -407px 0 0 400px #ffd15c;
    }

    .checkbox-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
        flex-direction: row;
    }
    .checkbox-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .checkbox-label {
        font-size: 1rem;
        color: #545444;
        transition: color 0.3s ease;
        cursor: pointer;
    }

    .submit-btn {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        background-color: #ffd15c;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: 250ms;
        text-align: center;
        outline: none;
        font-family: Poppins;
    }

    .submit-btn:hover {
        filter: brightness(0.95);
    }

    .basement-group {
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .has-basement .basement-group {
        opacity: 1;
        transform: translateY(0);
        transition: 250ms;
    }

    .component-container.has-basement {
        height: auto;
    }
</style>

<div class="component-container {hasBasement ? 'has-basement' : ''}">
    <div class="form-group">
        <h1 class="form-title">Main Square Footage</h1>
        <div class="slider-input-group">
            <input
                type="number"
                bind:value={mainSquareFootage}
                min="100"
                max="10000"
                aria-label="Main Square Footage"
            />
        </div>
        <br />
        <input
                type="range"
                min="100"
                max="10000"
                bind:value={mainSquareFootage}
                aria-label="Main Square Footage Slider"
        />
    </div>

    <div class="form-group checkbox-group">
        <label for="hasBasement" class="checkbox-label">Has Basement?</label>
        <div class="checkbox-container">
            <input type="checkbox" bind:checked={hasBasement} id="hasBasement" aria-describedby="basementDescription"/>
        </div>
    </div>

        <div class="form-group basement-group">
            <div class="form-title">Basement Square Footage</div>
            <div class="slider-input-group">
                <input disabled={!hasBasement} type="number" bind:value={basementSquareFootage} min="100" max="5000" aria-label="Basement Square Footage"/>
            </div>
            <br />
            <input disabled={!hasBasement} type="range" min="100" max="5000" bind:value={basementSquareFootage} aria-label="Basement Square Footage Slider"/>
        </div>
<button on:click={handleFormSubmission} class="submit-btn">Submit</button>
</div>