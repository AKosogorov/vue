<template>
  <v-container>
    <v-form>
      <v-card-title>
        Добавьте новую карточку
      </v-card-title>
      <v-text-field
        v-model="title"
        :label="labelTitle"
        outlined
      />
      <v-textarea
        v-model="descr"
        :label="labelDescr"
        outlined
      />
      <v-btn           
        color="green darken-1" 
        class="mr-4 white--text"
        @click="addCard"
      >
        Добавить
      </v-btn>
      <v-btn 
        color="red darken-1" 
        class="white--text" 
        @click="toMain"
      >
        Отмена        
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data: () => ({
    labelTitle: 'Название',
    labelDescr: 'Описание',
    title: '',
    descr: '',
  }),
  
  methods: {
    ...mapMutations(['setCards', 'updateCards']),
    ...mapGetters(['getCards']),

    addCard() {
      this.labelTitle = 'Название'
      this.labelDescr = 'Описание'

      const title = this.title.trim()
      const descr = this.descr.trim()

      const validate = () => {
        let isValid = true

        if(title.length === 0) {
          this.labelTitle = 'Название не может быть пустым'
          isValid = false
        }

        if(descr.length < 10) {
          this.labelDescr = 'Описание должно быть длиннее 10 символов'
          isValid = false
        }

        return isValid
      }

      if(validate()) {
        const card = {
          id: Date.now(),
          title: title,
          descr: descr,
          dropZoneId: this.getCards().length + 1
        }
  
        const cards = this.$store.getters.getCards
        cards.push(card);
  
        this.setCards(cards)
        this.updateCards()
  
        this.title = ''
        this.descr = ''

        this.toMain()
      }
    },

    toMain() {
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>