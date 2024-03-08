<template>
      <div class="user-info lg:my-10 flex flex-row-reverse gap-5 px-6 py-2 lg:flex-row flex-wrap items-center justify-center">
            <img height="150" width="150" style="border-radius: 50%"
                 src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png">

            <div class="user-name flex flex-wrap lg:mt-5  items-center justify-center">
                <span>Witaj</span>
                <span>{{ name }}</span>
            </div>
        </div>
</template>
<script>
export default {
  name: 'UserProfile',
    setup(){

      let name = JSON.parse(localStorage.getItem("user")).name;

      return{
          name,
      }
    },
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

@media all and (max-width: 1024px){
    .user-info img{
        width: 50px;
        height: 50px;
    }
    .user-name{
        display: none;
    }

}
</style>
