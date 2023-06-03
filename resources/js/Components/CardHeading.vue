<template>


    <div class="cards-table-heading  groups fadeIn flex  justify-between drag-item">

        <div>
            <p class="w-75 text-start dark:text-white">Pojęcie</p>
        </div>

        <div>
            <p class="w-75 text-start dark:text-white">Definicja</p>
        </div>


        <div class="flex gap-16 edit-section">

            <p>Edytuj</p>
            <p>Usuń</p>


        </div>



    </div>




</template>

<script setup>




</script>

<style scoped>
.cards-table-heading  div{
    width: 20%;
    text-align: start;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
}
.cards-table-heading  .edit-section{
    width: 30%;
    display: flex;
    justify-content: space-around;
}



.cards-table-heading  p{
    font-weight: 600;
    font-size: 16px;

}
</style>

