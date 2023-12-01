<script>
import { ref } from 'vue';
import { v4 as uuid } from 'uuid';

export default {
  emits: ['add'],
  setup(_, { emit }) {
    const text = ref('');

    function emitAdd() {
      if (text.value.trim()) {
        emit('add', { id: uuid(), text: text.value, completed: false });
        text.value = '';
      }
    }

    return {
      text,
      emitAdd,
    };
  },
};
</script>

<template>
  <div style="text-align: center">
    <input type="text" v-model="text" style="border-radius: 10px; margin-right: 5px" @keyup.enter="emitAdd" />
    <button @click="emitAdd" style="border-radius: 10px">新增/add</button>
  </div>
  <div>
  <br />
  </div>
</template>
