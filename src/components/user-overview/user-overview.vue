<script src="./user-overview.js"></script>
<style src="./user-overview.scss" scoped></style>

<template>
  <div class="user">
    <div class="image">
      <img src="../../assets/profile.jpeg"/>
    </div>

    <div class="caption">
      <div class="name">Ashvin Suthar</div>
      <div class="role">Senior User Interface Developer</div>
    </div>

    <div class="statistics">
      <div class="state" v-for="(stat, index) in stats" :key="index">
        <div class="count">{{stat.count}}</div>
        <div class="name">{{stat.name}}</div>
      </div>
    </div>
  </div>
</template>

