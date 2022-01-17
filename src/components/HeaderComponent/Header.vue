<template>
    <header class="header">
        <h1 class="header__title">{{title}}</h1>
    </header>
</template>

<script>
export default {
    name:"HeaderComponent",
    data(){
        return{
            title: "Our users"
        }
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
    }

    .header__title{
        font-family: var(--font-family-all);
        padding-top: 50px;
        margin-bottom: 50px;
        text-align: center;
        font-size: 48px;
        font-weight: bold;
        color: var(--color-texts);
    }

    @media(min-width: 768px){
        .header__title{
            margin-bottom: 50px;
            font-size: 80px;
        }
    }

    @media(min-width: 1440px){
        .header__title{
            margin-bottom: 50px;
            font-size: 85px;
        }
    }
</style>