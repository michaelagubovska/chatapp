<template>
  <q-page class="row">
  <header>
      <p class="header__subtitle">Material Design</p>
      <div class="header__title-wrapper">
        <h1 class="header__title">Simple Chat Application</h1>
        <q-btn class="header__btn" color="primary" icon="add" label="ADD NEW PERSON" rounded/>
      </div>
      <hr>
    </header>
    <body>
      <section class="chat-wrapper">
        <div class="chat-fields">
          <chat-field title="Person 1"></chat-field>
          <chat-field title="Person 1"></chat-field>
          <chat-field title="Person 1"></chat-field>
          <chat-field title="Person 1"></chat-field>
          <chat-field title="Person 1"></chat-field>
          <chat-field title="Person 1"></chat-field>
          <chat-field title="Person 1"></chat-field>
          <chat-field title="Person 1"></chat-field>
        </div>
        <div class="chat-window">
          <h2 class="chat-window__title">Chat Window</h2>
          <div class="chat-window__list">
            <chat-window-list></chat-window-list>
            <q-btn color="primary" icon="add" label="CLEAR CHAT WINDOW" rounded class="chat-window__btn"/>
          </div>
        </div>
      </section>
    </body>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ChatWindowList from 'components/ChatWindowList.vue';
import ChatField from 'components/ChatField.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'IndexPage',
  components: { ChatField, ChatWindowList },
  setup () {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
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
