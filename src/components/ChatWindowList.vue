<template>
<div class="chat-window__list">
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
  <q-btn color="primary" icon="add" label="CLEAR CHAT WINDOW" @click="clearChatHistory" :disabled="!data.messages.length" rounded class="chat-window__btn"/>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { messageService } from 'src/services/Messageservice';

  interface IMessage {
    id: string
    text: string
  };

  const data = reactive({ messages: [] as IMessage });

  const subscription = messageService.getMessage().subscribe((message) => {
      if (message) {
        data.messages.push({id: message.id, text: message.text});
        
      } else {
        data.messages = [];
      }
  });

  const clearChatHistory = () => {
    data.messages.length = 0;
    messageService.sendMessage('');
  }
</script>

<style>
  .chat-list--empty {
    margin-top: 48px;
    justify-content: center;
  }

  .chat-window__list {
    min-height: 90vh;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-shadow: 0 0 5px grey;
  }

  .chat-window__btn {
    margin: 12px;
    align-self: self-end;
  }
</style>
