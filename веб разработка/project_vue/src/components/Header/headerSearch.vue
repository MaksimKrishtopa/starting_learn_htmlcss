<template>
   <div class="header__search">
        <img src="@/assets/img/search__icon.svg" alt="Search Icon"/>
        <input
          type="text"
          placeholder="Search..."/>
   </div>
 </template>
   
 <script>
   
 </script>
   
 <style scoped>
    
    .header__search {
        font-family: 'Roboto', sans-serif;
        width: 465px;
        height: 54px;
        border-radius: 45px;
        background: #FFF;
        display: flex;
        align-items: center;
        padding-left: 25px;
        margin-left: 150px;
        margin-top: 10px;
        margin-bottom: 20px;
    }


    .header__search img {
        width: 19px;
        height: 19px;
        margin-right: 10px;
    }

    .header__search input {
        border: none;
        outline: none;
        width: 90%;
        height: 80%;
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 400;
        color: rgba(6, 14, 33, 0.50);
    }
 
 </style>
   