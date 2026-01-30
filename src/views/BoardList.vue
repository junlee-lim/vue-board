<script setup>
import httpService from '@/services/httpService';
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const state = reactive({
    list: []
});

onMounted(async() => {
    const result = await httpService.findAll();
    state.list = result;
});

const moveToDetail = id => {
    router.push(`/detail/${id}`)
}

</script>

<template>
<h3>게시판</h3>
<p v-if="state.list.length === 0">작성된 글이 하나도 없습니다.</p>
<table v-else>
    <tr>
        <th>id</th>
        <th>title</th>
        <th>created date</th>
    </tr>
    <tr v-for="item in state.list" :key="item.id" @click="moveToDetail(item.id)">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.createAt }}</td>
    </tr>
</table>
</template>

<style scoped>
table{border-collapse: collapse; width: 100%;}
table, th, td{border: 1px solid #ccc;}
th, td{padding: 10px;}
tr:hover{background-color: aliceblue;}
td:hover{cursor: pointer;}
tr:first-child{background-color: gray;}
</style>