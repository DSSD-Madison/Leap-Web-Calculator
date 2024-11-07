<script>
    let mainSquareFootage = 1000;
    let hasBasement = false;
    let basementSquareFootage = 500;
</script>

<style>
    :global(body) {
        font-family: Arial, sans-serif;
        background-color: #f8f9fa;
        color: #333;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .component-container {
        background-color: white;
        padding: 2rem;
        border-radius: 25px;
        max-width: 400px;
        width: 100%;
        border: 2px solid #007bff;
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
        border: 1px solid #ced4da;
        border-radius: 8px;
        outline: none;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    input[type="number"]:focus {
        border-color: #007bff;
    }

    input[type="range"] {
        width: 100%;
        height: 4px;
        background: #007bff;
        outline: none;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    .checkbox-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
    }

    .checkbox-group input[type="checkbox"] {
        transform: scale(1);
        transition: transform 0.2s ease;
    }

    .checkbox-group input[type="checkbox"]:checked {
        transform: scale(1.2);
    }

    .checkbox-label {
        font-size: 1rem;
        color: #495057;
        transition: color 0.3s ease;
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
            <input
                type="range"
                min="100"
                max="10000"
                bind:value={mainSquareFootage}
                aria-label="Main Square Footage Slider"
            />
        </div>
    </div>

    <div class="form-group checkbox-group">
        <input
            type="checkbox"
            bind:checked={hasBasement}
            id="hasBasement"
            aria-describedby="basementDescription"
        />
        <label for="hasBasement" class="checkbox-label">Has Basement</label>
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
                <input
                    type="range"
                    min="100"
                    max="5000"
                    bind:value={basementSquareFootage}
                    aria-label="Basement Square Footage Slider"
                />
            </div>
        </div>
    <!-- {/if} -->

    <button class="submit-btn">Submit</button>
</div>