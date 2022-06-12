

<script setup lang="ts">
import { PayloadEventOpenMenu } from './page.interface'

defineProps({ statePage: { default: 'edit', type: String } })

const emit = defineEmits<{
  (event: 'OpenSelectMenu', payload: PayloadEventOpenMenu): void;
  (event: 'OpenContextMenu', payload: PayloadEventOpenMenu): void;

}>()


function handlerPointerUp(e: PointerEvent): void {
  emit("OpenSelectMenu", { event: e, x: e.clientX, y: e.clientY })
}
function handlerContextMenu(e: MouseEvent): void {
  e.preventDefault()
  emit('OpenContextMenu', { event: e, x: e.clientX, y: e.clientY })
}
</script>



<template>
  <div class="paga" @pointerup="handlerPointerUp" :contenteditable="
  statePage == 'edit' ? 'true' : statePage == 'no-edit' ? 'false' : 'false'" @contextmenu="handlerContextMenu">
    <h1>New Page</h1>
  </div>
</template>
<style scope>
.paga {
  width: 100%;
  height: 700px;
  background-color: var(--light-full);
  overflow-x: hidden;
  margin-bottom: 15px;
  outline: none;
  padding-left: 15px;
  padding-top: 15px;
  box-shadow: var(--shadow-light);
}
</style>