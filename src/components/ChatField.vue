<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section>
      <q-input type="textarea" min-rows="2" max-height="128" outlined v-model="text" :label="title" stack-label :dense="dense" placeholder="Enter your message here..." />
      <div class="chat-field__btn-wrapper">
        <q-btn color="secondary" icon="keyboard_arrow_right" label="SEND" rounded class="chat-field__btn"/>
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatField',
  props: {
    title: {
      type: String,
      default: ''
    },
  }
});
</script>

<style>
  .chat-field__btn-wrapper {
    text-align: end;
    margin-top: 12px;
  }

  .chat-field__btn {
    .on-left {
      margin-right: 8px;
      color: black;
    }

    .q-btn__content span {
      color: black;
      font-weight: 400;
    }
  }
</style>
