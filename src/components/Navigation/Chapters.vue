<template>
  <q-list class="no-padding">
    <q-item-label class="chapter-header text-black no-padding" header>Оглавление</q-item-label>
    <div class="row items-start justify-between">
      <div @click="loadChapter(chapter.link)" v-for="chapter in chapters" :key="chapter.id" class="no-padding col-12 chapter-item" >
        <q-item-section>
        <span>
          {{ chapter.label }}
        </span>
        </q-item-section>
      </div>
    </div>
  </q-list>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Chapters',
  computed: {
    ...mapGetters([
      'book',
      'chapters'
    ])
  },
  methods: {
    loadChapter (link) {
      EventBus.$emit('clickShowOverlayMenuButton')
      EventBus.$emit('loadCfi', link)
    }
  }
}
</script>

<style scoped lang="scss">
  .chapter-header {
    display: inline-block;
    font-size: 28px;
    font-weight: 600;
    margin: 38px 0;
    line-height: 39px;
  }
  .chapter-item {
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 42px;
    cursor: pointer;
  }
</style>
