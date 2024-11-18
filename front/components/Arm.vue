<template>

        <div class="divImg">
            <img src="../assets/img/arm.png" alt="arm" class="img">
        </div>

</template>
<script setup>

</script>
<style scoped>
.img {
    width: 100%;
    height: auto;
}
@media screen and (min-width: 1000px) {
    .divImg {
        display: flex;
        justify-content: flex-end;
    }
    .img {
        width: 50%;
    }
}
    
</style>