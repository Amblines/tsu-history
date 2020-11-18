<template>
  <div class="row">
    <div class="col-12">
      <span class="search__header">Поиск</span>
    </div>
    <div class="col-10">
      <q-input v-model="searchString" class="full-width" label-color="black" bg-color="white" label="Введите запрос" dense square
               filled>
        <template v-slot:append>
          <q-icon name="search" class="cursor-pointer"/>
        </template>
      </q-input>
    </div>
    <div class="history col-12">
      <span class="search__header">История поиска</span>
    </div>
    <div class="col-12">
      <span>Глава 1. ТГУ в 1918–1921 гг.: «Тамгосунт»(А. Л. Аврех, Н. Н. Будюкина, В. В. Канищев).</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchString: ''
    }
  }
}
</script>

<style scoped lang="scss">
.search__header {
  display: inline-block;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
}

.history {
  margin-top: 7px;
}
</style>
