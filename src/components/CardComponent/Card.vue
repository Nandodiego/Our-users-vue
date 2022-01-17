<template>
    <div>
        <div class="main__container">
            <img class="container__image" :src=image alt="">
            <p class="container__name">{{name}}</p>
            <p class="container__number">{{cell}}</p>
            <p class="container__email">{{email}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        image: {
            type: String,
            default: 'Logo not found'
        },
        name: {
            type: String,
            default: 'Name not found'
        },
        cell:{
            type: String,
            default: 'Cell not found'
        },
        email: {
            type: String,
            default: 'Email not found'
        }
    }
}
</script>

<style scoped>
    .main__container{
        width: 160px;
        padding-top: 16px;
        min-height: 160px;
        border: var(--border-divs);
        margin-bottom: 20px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        filter: var(--filter-shadow-div-users);
    }
    .container__image{
        width: 90px;
        height: 90px;
        border: var(--border-images);
        cursor: pointer;
        border-radius: 50%;
    }
    .container__name{
        width: 100%;
        padding-top: 8px;
        font-size: 16px;
        text-align: center;
        font-weight: 600;
        color: var(--color-texts);
        font-family: var(--font-family-all);
    }
    .container__number{
        width: 100%;
        text-align: center;
        font-size: 10px;
        font-family: var(--font-family-all);
        color: var(--color-texts);
        padding-bottom: 14px;
    }
    .container__email{
        display: none;
    }

    @media(min-width: 768px){
        .main__container{
            width: 320px;
            min-height: 340px;
        }
        
        .container__image{
            width: 180px;
            height: 180px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .container__name{
            font-size: 32px;
        }

        .container__number{
            padding-bottom: 0;
            font-size: 16px;
        }

        .container__email{
            width: 100%;
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            font-size: 16px;
            color: var(--color-texts);
            font-family: var(--font-family-all);
        }
    }

    @media(min-width: 1440px){
        .main__container{
            width: 322px;
            min-height: 333px;
            margin-bottom: 50px;
            padding-top: 16px;
        }

        .container__image{
            width: 180px;
            height: 180px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .container__name{
            font-size: 32px;
        }

        .container__number{
            padding-bottom: 0;
            font-size: 16px;
        }

        .container__email{
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 16px;
            color: var(--color-texts);
            font-family: var(--font-family-all);
            padding-top: 6px;
        }
    }
</style>