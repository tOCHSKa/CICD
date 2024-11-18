<template>
    <label class="switch" >
        <input type="checkbox" >
        <span class="slider round"></span>
    </label>
</template>



<style scoped>
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    box-sizing: border-box;
}
.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    box-sizing: border-box;
}
input:checked+.slider {
    background-color: #E03122;
}
input:checked+.slider:before {
    transform: translateX(26px);
}
.slider.round {
    border-radius: 100px;
    border: 2px solid #E03122;
    box-sizing: border-box;
    margin: -2px;
}
.slider.round:before {
    border-radius: 100px;
    
}
</style>