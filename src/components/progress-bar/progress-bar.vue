<template>
  <div class="progressbar" :data-value="progress+'%'">
    <div class="progress" :style="{ width: progress+'px' }"></div>
  </div>
</template>

<style src="./progress-bar.scss" scoped></style>

<script>
export default {
  props: [ 'progress']
}
</script>

