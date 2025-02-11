<script>
import image from './images/LEAP-logo-transparent.png';
</script>
<style>
    .logo {
        transform: scale(0.1);
        display: flex;
        align-self: center;
    }

    .navbar {
        height: 50px;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        width: 100px;
        /* margin-left: 15px; */
    }
</style>

<div class="navbar">
    <img class="logo" src={image} alt="LEAP Logo">
</div>