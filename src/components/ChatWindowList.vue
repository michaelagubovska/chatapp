<template>
  <q-scroll-area style="height: 100%;">
     <q-list>
      <q-item v-if="data.messages.length == 0" class="chat-list--empty">
        <p>There are no messages in this chat yet.</p>
      </q-item>
      <q-item v-for="message in data.messages" :key="message.text">
        <q-item-section avatar>
          <q-icon color="dark" name="bookmark" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ message.id }}</q-item-label>
          <q-item-label caption>{{ message.text }}</q-item-label>
          <q-separator class="q-mt-sm"  />
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
  <q-btn color="primary" icon="add" label="CLEAR CHAT WINDOW" @click="clearChatHistory" :disabled="!data.messages" rounded class="chat-window__btn"/>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { Observable, Observer } from 'rxjs';
  import { messageService } from 'src/services/Messageservice';

  interface IMessage {
    id: string
    text: string
  };

  const data = reactive({ messages: [] as IMessage });

  const subscription = messageService.getMessage().subscribe((message) => {
      if (message) {
        data.messages.push({id: message.text.id, text: message.text.text});
      } else {
        data.messages = [];
      }
  });

  const clearChatHistory = () => {
    data.messages.length = 0;
  };
</script>

<style>
  .chat-list--empty {
    margin-top: 48px;
    justify-content: center;
  }
</style>
