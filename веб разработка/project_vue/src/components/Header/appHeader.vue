<template>
    <header class="header">
        <div class="header__container">
            <div class="logo">
                <img src="@/assets/img/Logo.svg" alt="Logo">
            </div>
            <headerSearch></headerSearch>
            <headerNav></headerNav>
        </div>
    </header>
</template>
  
<script>
import headerSearch from "@/components/Header/headerSearch";
import headerNav from "@/components/Header/Nav/headerNav";
  export default {
    components: {
      headerSearch,headerNav,
    },
    
  }
  
</script>
  
<style scoped>

.header {
  position: sticky;
  top: 0;
  width: 100%;
  background: #060E21;
  box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.08);
  z-index: 1000;
}
.header__container {
    margin: 0 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo {
    padding-top: 35px;
    padding-bottom: 25px;
}
  
</style>
  