<template>
  <div>
    <appHeader></appHeader>
  </div>
</template>

<script>
import appHeader from "@/components/Header/appHeader";
  export default {
    components: {
      appHeader,
    },
    
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;900&display=swap');

.no__vision {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

ol,ul,li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

</style>
