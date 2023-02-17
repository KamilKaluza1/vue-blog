<template>
    <div class="spinner"></div>
</template>


<style>
.spinner{
    display: block;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 5px solid transparent;
    border-radius: 50%;
    border-bottom-color: black;
    animation: spin 0.5s ease infinite;
}

@keyframes spin{
    to {transform: rotate(360deg);}
}
</style>