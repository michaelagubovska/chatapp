<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section>
      <q-input type="textarea" min-rows="2" max-height="128" outlined v-model="data.text" :label="name" stack-label :dense="dense" placeholder="Enter your message here..." />
      <div class="chat-field__btn-wrapper">
        <q-btn color="secondary" icon="keyboard_arrow_right" :disabled="!data.text" label="SEND" rounded class="chat-field__btn" @click="sendMessage(data.text)"/>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
  import { toRefs, reactive } from 'vue';
  import { messageService } from 'src/services/Messageservice';

  const props = defineProps({
    name: String
  });
  const { name } = toRefs(props);

  const data = reactive({ text: ''});
  const sendMessage = (text: string, id: string) => {
    messageService.sendMessage({text: data.text, id: name.value});
    data.text = '';
  }
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
