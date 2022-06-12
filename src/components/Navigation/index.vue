<script setup lang="ts">
import Icon from '../Icon/index.vue';
import {globalState} from '../../store/index';


</script>

<template>
  <div class="intro-page">
    <nav class="navigation">
      <a href="#" class="nav-link" @click="() => {
        globalState.createDoc('kkk')
      }">
        <Icon>
          <font-awesome-icon icon="folder-plus" />
        </Icon>
        <span>Novo documento</span>
      </a>
      <a href="#" class="nav-link">
        <Icon>
          <font-awesome-icon icon="folder-open" />
        </Icon>
        <span>Abrir Recente</span>
      </a>
      <a href="#" class="nav-link">
        <Icon>
          <font-awesome-icon icon="share-alt-square" />
        </Icon>
        <span>Partilhar da nuvem</span>
      </a>
    </nav>

  </div>
</template>

<style scoped>
.intro-page {
  padding: 0 15px;
}

.navigation {
  display: flex;
  flex-direction: column;
}

.navigation .nav-link {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
</style>