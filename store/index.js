import Vuex from 'vuex';



const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            todos: [
                { content: '基本設計', created: '2022-05-20 16:00', deleted: true },
                { content: 'コーディング', created: '2022-05-20 18:00', deleted: false },
                { content: 'テスト', created: '2022-05-20 19:00', deleted: false },
                { content: 'リリース', created: '2022-05-20 20:30', deleted: false }
            ]
        }),
        mutations: {
            insert: (state, obj) => {
                var d = new Date();
                var fmt = d.getFullYear()
                    + '-' + ('00' + (d.getMonth() + 1)).slice(-2)
                    + '-' + ('00' + d.getDate()).slice(-2)
                    + ' ' + ('00' + d.getHours()).slice(-2)
                    + ':' + ('00' + d.getMinutes()).slice(-2);
                state.todos.unshift({
                    content: obj.content,
                    created: fmt,
                    deleted: false
                })
            },
            remove: (state, obj) => {
                for (let i = 0; i < state.todos.length; i++) {
                    const ob = state.todos[i];
                    if (ob.content == obj.content && ob.created == obj.created) {
                        if (confirm('"' + ob.content + '"を削除しますか？')) {
                            state.todos[i].deleted = true;
                            return;
                        }
                    }
                }
            },
        }
    })
}
export default createStore;