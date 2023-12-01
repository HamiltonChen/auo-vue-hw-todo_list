<script>
import { ref, computed } from 'vue';
import Header from '../info/Header.vue';
import AddItem from '../functions/itemAdd.vue';
import ItemList from '../items/itemAction.vue';
import {
  getTodos,
  addTodo,
  updateTodo,
  removeTodo,
} from '../storage/storage.js';

export default {
  components: {
    Header,
    AddItem,
    ItemList,
  },
  setup() {
    const todos = ref(getTodos());

    const incompletedTodos = computed(() =>
      todos.value.filter((todo) => !todo.completed)
    );
    const completedTodos = computed(() =>
      todos.value.filter((todo) => todo.completed)
    );

    function addItem(todo) {
      addTodo(todo);
      todos.value = getTodos();
    }

    function toggleItem(id) {
      updateTodo(id, (todo) => ({ ...todo, completed: !todo.completed }));
      todos.value = getTodos();
    }

    function removeItem(id) {
      removeTodo(id);
      todos.value = getTodos();
    }

    return {
      todos,
      incompletedTodos,
      completedTodos,
      addItem,
      toggleItem,
      removeItem,
    };
  },
};
</script>

<template>
  <div>
    <Header :incompleteTodos="incompletedTodos" :todos="todos" />
    <AddItem @add="addItem" />
    <div class="container">
      <div class="item"></div>
      <div class="item" style="background-color: #FFFF93">
        <p />
        未完成事項列表 / To Do
        <hr style="border: 1px dashed #A6A600"/>
        <div v-if="incompletedTodos.length != 0">
          <ItemList
            :items="incompletedTodos"
            @toggle="toggleItem"
            @remove="removeItem"
          />
        </div>
        <div v-else>
          <ul>
            <li><span />無未完成事項</li>
          </ul>
        </div>
      </div>
      <div class="item" style="background-color: #7AFEC6; margin-left: 5px">
        <p />
        已完成事項列表 / Done
        <hr style="border: 1px dashed #FF8F59"/>
        <div v-if="completedTodos.length != 0">
          <ItemList
            :items="completedTodos"
            @toggle="toggleItem"
            @remove="removeItem"
          />
        </div>
        <div v-else>
          <ul>
            <li><span />無未完成事項</li>
          </ul>
        </div>
      </div>
      <div class="item"></div>
    </div>
  </div>
</template>
