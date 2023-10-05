<template>
  <q-page class="row" style="min-height: 100%;">
  <header>
      <p class="header__subtitle">Material Design</p>
      <div class="header__title-wrapper">
        <h1 class="header__title">Simple Chat Application</h1>
        <q-btn class="header__btn" :disabled="chatStore.peopleList.length >= 9 ? true : false" color="primary" icon="add" label="ADD NEW PERSON" rounded @click="addNewPerson"/>
      </div>
      <hr>
    </header>
    <body>
      <section class="chat-wrapper">
        <div class="chat-fields">
          <chat-field v-for="person in chatStore.peopleList" :key="person.id" :name="'Person ' + person.id"/>
        </div>
        <div class="chat-window">
          <h2 class="chat-window__title">Chat Window</h2>
          <div class="chat-window__list">
            <chat-window-list></chat-window-list>
          </div>
        </div>
      </section>
    </body>
  </q-page>
</template>

<script setup lang="ts">
  import ChatWindowList from 'components/ChatWindowList.vue';
  import ChatField from 'components/ChatField.vue';
  import { storeToRefs } from 'pinia';
  import { useChatStore } from 'src/store/chat.ts';

  const chatStore = useChatStore();

  const addNewPerson = () => {
    chatStore.addPerson();
  };
</script>

<style scope>
  header {
    width: 100%;
    margin: 32px 32px 0 32px;

    .header__subtitle {
      font-size: 16px;
      margin: 0;
    }

    .header__title-wrapper {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      justify-content: space-between;
      margin: 0 0 32px 0;
    }

    .header__btn {
      margin: auto 0;
    }

    .header__title {
      font-size: 48px;
      line-height: 4.8rem;
      margin: 0
    }
  }

  .chat-wrapper {
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    margin-bottom: 12px;
  }

  .chat-fields {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 16px;
    grid-auto-flow: column;
    grid-row-gap: 0px;
    margin-left: 16px;
  }

  .chat-window {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 0 16px;
    margin-right: 16px;
  }

  .chat-window__title {
    font-size: 16px;
    line-height: 1.6rem;
    margin-top: 0;
  }

  .chat-window__list {
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
