<template>
     <v-radio-group v-model="answer" vertical>
            <v-radio v-for="item in 4" :key="item" :label="item+''" :value="item">
                <!-- <span>{item.orderby}.{item.text}</span> -->
            </v-radio>
        </v-radio-group>
</template>
<script>
export default {
    name:"Lianxi",
    data(){
        return{
            answer:''
        }
    }
  
}
</script>
<style>

</style>


