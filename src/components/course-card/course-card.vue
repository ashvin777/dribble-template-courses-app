<script src="./course-card.js"></script>
<style src="./course-card.scss" scoped></style>

<template>
  <div class="course-card">
    <img :src="course.image"/>

    <div class="title">{{course.title}}</div>
    <div class="author">{{course.author}}</div>
    <progress-bar :progress="course.percentCompletion"></progress-bar>
  </div>
</template>
