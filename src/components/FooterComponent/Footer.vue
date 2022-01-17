<template>
    <footer class="footer">
        <p class="footer__text">{{text}}</p>
    </footer>
</template>

<script>
export default {
   name: "FooterComponent",
   data(){
       return {
           text: "Development by @diego"
       }
   } 
}
</script>

<style scoped>
    .footer__text{
        font-size: 12px;
        text-align: center;
        font-family: var(--font-family-all);
        color: var(--color-footer);
        font-weight: 300;
        margin-top: 50px;
        padding-bottom: 16px;
    }

    @media(min-width: 768px){
        .footer__text{
            font-size: 18px;
            margin-top: 0;
            margin-top: 35px;
        }
    }

    @media(min-width: 1440px){
        .footer__text{
            font-size: 18px;
            margin-top: 0;
            margin-top: 35px;
        }
    }
</style>