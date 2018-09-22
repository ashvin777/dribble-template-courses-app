<script src="./my-courses.js"></script>
<style src="./my-courses.scss" scoped></style>

<template>
  <div class="my-courses">
    <div class="title large">My courses</div>

    <div class="courses">
      <course-card v-for="(course, index) in courses" :key="index" :course="course"></course-card>
    </div>
  </div>
</template>

