<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  emits: ['toggle', 'remove'],
  methods: {
    emitToggle(id) {
      this.$emit('toggle', id);
    },
    emitRemove(id) {
      this.$emit('remove', id);
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id" style="margin: 5px">
      <div class="container" style="text-align: justify">
        <div class="item" style="text-align: left">
          <input
            style="margin-right: 10px"
            type="checkbox"
            :checked="item.completed"
            @change="() => emitToggle(item.id)"
          />
          <span v-if="!item.completed">{{ item.text }}</span>
          <span v-else style="text-decoration: line-through">{{ item.text }}</span>
        </div>
        <div class="item" style="text-align: right; margin-right: 5px">
          <button @click="() => emitRemove(item.id)"  style="border-radius: 10px">刪除/ delete</button>
        </div>
      </div>
    </li>
  </ul>
</template>
