<style scoped src="./navbar.scss"></style>

<template>
  <nav>

    <div class="left">
      <slot name="left" />
    </div>

    <div class="title">
      <slot/>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>

  </nav>
</template>
