export default {
  state: {  
    cards: [],
    modalVisible: false,
    cardDraggable: true,
    currentCard: {}
  },

  mutations: {
    setCards(state, payload) {
      state.cards = payload
    },

    updateCards(state) {
      localStorage.setItem('cards', JSON.stringify(state.cards))
    },

    loadCards(state) {
      const arr = [
        { 
          id: 1,
          dropZoneId: 1,
          title: 'title 1', 
          descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio maxime aliquam doloremque impedit explicabo ad ut necessitatibus facere aut nisi tempore nesciunt cupiditate accusantium magnam pariatur corrupti, aliquid voluptate consequatur.'
        },
        { 
          id: 2,
          dropZoneId: 2,
          title: 'title 2', 
          descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio maxime aliquam doloremque impedit explicabo ad ut necessitatibus facere aut nisi tempore nesciunt cupiditate accusantium magnam pariatur corrupti, aliquid voluptate consequatur.' 
        },
      ]

      if (localStorage.getItem('cards')) {
        state.cards = JSON.parse(localStorage.getItem('cards'))
      } else {
        state.cards = arr
      }
    },

    showModal(state) {
      state.modalVisible = true
    },

    hideModal(state) {
      state.modalVisible = false
    },

    isCardDraggable(state) {
      console.log('ckeck');
      state.cardDraggable = !state.cardDraggable
    },

    setCurrentCard(state, payload) {
      state.currentCard = payload
    }, 
  },

  getters: {
    getCards(state) {
      return state.cards
    },

    getModalVisible(state) {
      return state.modalVisible
    },

    getCardDraggable(state) {
      return state.cardDraggable
    },

    getCurrentCard(state) {
      return state.currentCard
    },
  },

  actions: {
  }
}