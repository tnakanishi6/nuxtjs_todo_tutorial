import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
        {content: '基本設計', created: '2022-05-20 16:00', deleted: true}, 
        {content: 'コーディング', created: '2022-05-20 18:00', deleted: false},
        {content: 'テスト', created: '2022-05-20 19:00', deleted: false},        
        {content: 'リリース', created: '2022-05-20 20:30', deleted: false}
      ]
    }),
  })
}

export default createStore;