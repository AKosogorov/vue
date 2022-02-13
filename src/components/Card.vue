<template>
  <v-card 
    @click="openCard"    
    :draggable="this.getCardDraggable()"
    @dragstart="onDrag($event, card)"
  >
    <v-card-title>
      {{card.title}}
    </v-card-title>
    <v-card-text>
      {{card.descr}}
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapMutations(['setCurrentCard', 'showModal']),
    ...mapGetters(['getCardDraggable']),

    openCard() {
      this.setCurrentCard(this.card)
      this.showModal()
    },
    onDrag(e, card) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('dropCardId', card.id.toString())
      e.dataTransfer.setData('dropCardDropZoneId', card.dropZoneId.toString())      
    },
  }
}
</script>

<style>

</style>