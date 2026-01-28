<script setup>
import httpService from '@/services/httpService';
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const state = reactive({
  board: {
    id: 0,
    title: '',
    contents: ''
  }
});

const submit = async () => {
  if(!state.board.title){
    alert('write title!');
    return;
  }else if(!state.board.contents){
    alert('write contents!');
    return;
  }

  if(state.board.id === 0){
    const result = await httpService.save(state.board);
    console.log(result);

    if(result === 'success'){
      state.board = '';
      router.push({
        path: '/'
      });
    }else{
      alert('failed');
    }
  }else{
    const result = await httpService.update(state.board);
    if(result){
      router.push(`/detail/${state.board.id}`)
    }
  }
}

onMounted(async () => {
  if(route.params.id){
    const id = route.params.id;
    state.board = await httpService.findById(id);
  }
})

</script>

<template>
<h3>dddd</h3>
<div>
    <label>title: <input type="text" v-model="state.board.title"></label>
</div>
<div>
    <label>contents: <textarea v-model="state.board.contents"></textarea></label>
</div>
<div>
    <button @click="submit">save</button>
</div>
</template>

<style scoped>

</style>