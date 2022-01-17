<template>
    <div>
        <main class="main">
            <CardComponent 
            v-for="(user, index) in userInformation" :key="index"
            :image="user.picture.large"
            :name="user.name.first"
            :cell="user.cell"
            :email="user.email">
            </CardComponent>
        </main>
        <div class="container__button">
            <button @click="showMeMore()" class="button" type="button">Show me more</button>
        </div>
    </div>
</template>

<script>
import CardComponent from "@/components/CardComponent/Card.vue";
import {RandomUserServices} from "../../services/randomUser/randomUser.services";

export default {
    name: "MainComponent",
    components: {
        CardComponent
    },
    data(){
        return {
            userInformation: []
        }
    },
    methods: {
        async getUser() {
            try{
                const response = await RandomUserServices.getUser();
                this.userInformation = response.data.results;
            }catch(error){
                console.error(error);
            }
        },
        showMeMore(){
        }
    },
    async mounted(){
        await this.getUser();
    }
}
</script>

<style scoped>
    .main{
        width: 338px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .container__button{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .button{
        width: 130px;
        height: 28px;
        border-radius: 4px;
        border: none;
        background: #ece2e1;
        cursor: pointer;
    }

    .button:active{
        transform: scale(.9);
    }

    @media(min-width: 768px){
        .main{
            width: 670px;
        }
    }

     @media(min-width: 1440px){
        .main{
            width: 1082px;
        }
     }
</style>