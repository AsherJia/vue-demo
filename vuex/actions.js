const initNote = {
    id: +new Date(),
    title: '我的笔记',
    content: '第一篇笔记内容',
    favorite: false
};

// 模拟初始化数据
const initData = {
    show: 'all',
    notes: [initNote],
    activeNote: initNote
};

export const initStore = ({ dispatch }) => {
    dispatch('INIT_STORE', initData)
};

export const addNote = ({ dispatch }) => {
    dispatch('ADD_NOTE')
}

export const editNote = ({ dispatch }, currentNote) => {
    dispatch('EDIT_NOTE', currentNote)
}

export const deleteNote = ({ dispatch }) => {
    dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
    dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
    dispatch('TOGGLE_FAVORITE')
}

export const updateShow = ({ dispatch }, show) => {
    dispatch('SET_SHOW_ALL', show)
}
