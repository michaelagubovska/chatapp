import { defineStore } from 'pinia';

interface IPerson {
    id: number;
};

interface IChatState {
  peopleList: Array<IPerson>;
};

export const useChatStore = defineStore('chat', {
  state: (): IChatState => ({
    peopleList: [],
  }),
  actions: {
    addPerson() {
      try {
        this.peopleList.push({ id: this.peopleList.length + 1 });
      } catch (error: any) {
        console.log(error);
      }
    },
  }
});