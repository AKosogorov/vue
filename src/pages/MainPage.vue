<template>
  <v-container>
    <v-checkbox      
      label="Drag'N'Drop"
      v-model="checked"
      @change="isCardDraggable"
    ></v-checkbox>
    <ul class="grid">
      <li 
        class="drop-zone"
        v-for="zone of getCards().length"
        :key="zone"
        @drop="onDrop($event, zone)"
        @dragover.prevent
        @dragenter.prevent
      >
        <Card
          :card="getCardZone(zone)"       
          
        />
      </li>
    </ul>
    <ModalCard />
  </v-container>
</template>

<script>
import Card from '@/components/Card';
import ModalCard from '@/components/ModalCard';
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Card,
    ModalCard,
  },

  data: () => ({
    checked: true
  }),

  methods: {
    ...mapMutations(['setCards', 'updateCards', 'loadCards', 'isCardDraggable']),
      
    ...mapGetters(['getCards', 'getCardDraggable']),

    onDrop(e, dropZoneId) {
      const dropCardId = parseInt(e.dataTransfer.getData('dropCardId'))
      const dropCardDropZoneId = parseInt(e.dataTransfer.getData('dropCardDropZoneId'))
      let cards = this.getCards()

      cards = cards.map(card => {
        if (card.id === dropCardId) {
          card.dropZoneId = dropZoneId
        }

        if ((card.dropZoneId === dropZoneId) && (card.id !== dropCardId)) {
          card.dropZoneId = dropCardDropZoneId
        }
        return card
      })

      this.setCards(cards)
      this.updateCards()
    },

    getCardZone(num) {
      return this.getCards().filter(card => card.dropZoneId === num)[0]      
    }
  },

  mounted() {
    this.checked = this.getCardDraggable()    
    this.loadCards()
  },
}
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 30px;
  }
</style>