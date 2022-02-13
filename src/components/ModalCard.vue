<template>
  <v-dialog
    v-model="$store.getters.getModalVisible"
    width="600px"
    @click:outside="hideModal"
  >
    <v-card>
      <v-card-title>
        {{getCurrentCard().title}}
      </v-card-title>
      <v-card-text>
        {{getCurrentCard().descr}}
      </v-card-text>
      <v-card-actions>
        <v-btn 
          color="red darken-1" 
          class="white--text"
          @click="onDelete"
        >
          Удалить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  
  export default {  
    methods: {
      ...mapMutations(['setCards', 'updateCards', 'hideModal']),
      
      ...mapGetters(['getCards', 'getCurrentCard']),

      onDelete() {
        let cards = this.getCards()
        const id = this.getCurrentCard().id
        const zoneId = this.getCurrentCard().dropZoneId

        cards = cards
          .filter(card => card.id !== id)
          .map(card => {
            if(card.dropZoneId > zoneId) {
              card.dropZoneId = card.dropZoneId - 1
            }
            return card
          })

        this.setCards(cards)
        this.updateCards()
        this.hideModal()
      }
    }
  }
</script>

<style>

</style>