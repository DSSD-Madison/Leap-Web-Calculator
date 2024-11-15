<script>
    let mainSquareFootage = 1000;
    let hasBasement = false;
    let basementSquareFootage = 500;

    function handleFormSubimission() {
        console.log(mainSquareFootage / 2);
    }
</script>

<style>
    .component-container {
        background-color: #fff;
        padding: 2rem;
        border-radius: 15px;
        width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: translateY(20px);
        opacity: 0;
        animation: fadeInUp 0.5s ease forwards;
        overflow: hidden;
        transition: height 0.4s ease;
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
        color: #333;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    .slider-input-group {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    input[type="number"] {
        width: 100%;
        padding: 0.5rem;
        border: 2px solid #ced4da;
        border-radius: 8px;
        outline: none;
        font-size: 1rem;
        transition: 250ms;
    }

    input[type="number"]:hover {
        border-color: #007bff;
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
        border: 2px solid #007bff;
        box-shadow: -407px 0 0 400px #007bff;
    }

    input[type="range"]::-moz-range-thumb {
        height: 12px;
        width: 12px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #007bff;
        box-shadow: -407px 0 0 400px #007bff;
    }

    .checkbox-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
    }
    .checkbox-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .checkbox-group input[type="checkbox"] {
        height: 1rem;
        width: 1rem;
    }


    .checkbox-label {
        font-size: 1rem;
        color: #333;
        transition: color 0.3s ease;
        cursor: pointer;
    }

    .submit-btn {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        background-color: #007bff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        text-align: center;
        outline: none;
    }

    .submit-btn:hover {
        background-color: #0056b3;
        transform: scale(1.03);
    }

    .basement-group {
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .has-basement .basement-group {
        opacity: 1;
        transform: translateY(0);
    }

    .component-container.has-basement {
        height: auto;
    }
</style>

<div class="component-container {hasBasement ? 'has-basement' : ''}">
    <div class="form-group">
        <div class="form-title">Main Square Footage</div>
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
            <input
                    type="checkbox"
                    bind:checked={hasBasement}
                    id="hasBasement"
                    aria-describedby="basementDescription"
            />
        </div>
    </div>


    <!-- {#if hasBasement} -->
        <div class="form-group basement-group">
            <div class="form-title">Basement Square Footage</div>
            <div class="slider-input-group">
                <input
                    type="number"
                    bind:value={basementSquareFootage}
                    min="100"
                    max="5000"
                    aria-label="Basement Square Footage"
                />
            </div>
            <br />
            <input
                    type="range"
                    min="100"
                    max="5000"
                    bind:value={basementSquareFootage}
                    aria-label="Basement Square Footage Slider"
            />
        </div>
    <!-- {/if} -->

    <button on:click={handleFormSubimission} class="submit-btn">Submit</button>
</div>