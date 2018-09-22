<script src="./dashboard.js"/>
<style src="./dashboard.scss" scoped>

</style>

<template>
  <div class="page">

    <navbar>
      <div slot="left">
        <i class="fas fa-arrow-left"></i>
      </div>

      <div slot="right">
        <i class="far fa-bell"></i>
      </div>
    </navbar>

    <userOverview></userOverview>

    <myCourses></myCourses>

  </div>
</template>

