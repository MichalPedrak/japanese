<template>
      <div class="user-info lg:my-10 flex flex-row-reverse gap-5 p-6 lg:flex-row flex-wrap items-center justify-center">
            <img height="150" width="150" style="border-radius: 50%"
                 src="https://i.pinimg.com/564x/8e/db/9b/8edb9b0c4cbcfb0573951a6122d8fc22.jpg">

            <div class="user-name flex flex-wrap lg:mt-5  items-center justify-center">
                <span>Witaj</span>
                <span>Hayato Angor</span>
            </div>
        </div>
</template>
<script>
export default {
  name: 'UserProfile'
}
</script>
<style scoped>
.user-info{
    max-height: 250px;
}

.user-name span{
    text-align: center;
    width: 100%;
}

@media all and (max-width: 992px){
    .user-info img{
        width: 50px;
        height: 50px;
    }
    .user-name{
        display: none;
    }

}
</style>
