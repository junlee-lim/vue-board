<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import httpService from '@/services/httpService';

const route = useRoute();
const router = useRouter();
const state = reactive({
    data: {
        id:0,
        title: '',
        contents: '',
        createAt: ''
    }
});

onMounted(async()=>{
    console.log('route.params.id: ', route.params.id);
    state.data = await httpService.findById(route.params.id);
})

// const doDelete = async() => {
//     const result = await httpService.delete(route.params);
//     console.log(result);
// }

const doDelete = async () =>{
    if(!confirm('정말 삭제하시겠습니까?')){
        return;}

    const params = {
        id: state.data.id
    }

    const result = await httpService.delete(params);
    console.log(result);

    if(result === 1){
        router.push({
            path: '/'
        });
    }
}
</script>

<template>
<h3>Detail</h3>
<div>id: {{ state.data.id }}</div>
<div>title: {{ state.data.title }}</div>
<div>date: {{ state.data.createAt }}</div>
<div>content: {{ state.data.contents }}</div>
<div>
    <button @click="doDelete">delete</button>
    <router-link :to="`/mod/${state.data.id}`">
        <button>modify</button>
    </router-link>
</div>
</template>

<style scoped>

</style>