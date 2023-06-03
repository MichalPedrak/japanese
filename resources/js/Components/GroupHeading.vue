<template>



    <div class="group-table-heading  groups fadeIn flex  justify-between">

        <div>
            <p class="w-75 text-start dark:text-white">Nazwa grupy</p>
        </div>
        <div>
            <p>Ilość fiszek</p>
        </div>
        <div>
            <p>Poziom trudności</p>
        </div>

        <div class="edit-section flex gap-5">

            <p>Edycja</p>

            <p>Pokaż fiszki</p>

            <p>Usuń</p>

        </div>


    </div>


</template>

<script setup>

</script>

<style scoped>
.group-table-heading  div{
    width: 20%;
    text-align: start;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
}
.group-table-heading  .edit-section{
    width: 30%;
    /*text-align: start;*/
    display: flex;
    justify-content: space-around;
}

.group-table-heading  p{
    font-weight: 600;
    font-size: 16px;

}
</style>

