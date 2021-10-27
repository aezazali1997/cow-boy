<template>
  <div>
    <div :class="classes.imgContainer">
      <img :src="img" alt="" :class="classes.image" />
    </div>
    <div :class="classes.exploreContainer">
      <h1>Cowboy 4</h1>
      <h3>One smooth, agile ride.</h3>
      <button>Explore</button>
    </div>
    <div :class="classes.footer">
      <PreOrder bicycleTitle="C4" />
    </div>
  </div>
</template>
<script lang="ts" src="./Banner.ts" />
