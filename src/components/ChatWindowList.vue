<template>
  <section>
     <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="dark" name="bookmark" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Person 1</q-item-label>
          <q-item-label caption>Lorem ipsum dolores.</q-item-label>
          <q-separator class="q-mt-sm"  />
        </q-item-section>
      </q-item>
    </q-list>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref,
} from 'vue';
import { Todo, Meta } from './models';

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: 'ChatWindowList',
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   },
  // },
  // setup (props) {
  //   return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')) };
  // },
});
</script>
