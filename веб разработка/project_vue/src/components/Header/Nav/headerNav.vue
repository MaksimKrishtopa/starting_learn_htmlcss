<template>
  <nav class="nav">
        <navItem>
          Home
        </navItem>
        <navItem>
          Orders
        </navItem>
        <navItem>
          Contacts
        </navItem>
    </nav>

   
</template>
  
<script>

import navItem from "@/components/Header/Nav/navItem";
  export default {
    components: {
      navItem,
    },
    
  }
  
</script>
  
<style scoped>


.nav{
  padding-left: 180px;
  display: flex;
  gap: 90px;
  font-family: 'Montserrat';
  font-size: 22px;
  font-weight: 600;
  color: #FFF;
}

</style>


  