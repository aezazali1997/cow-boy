<template>
  <div id="dotWrapper" :class="classes.dotContainer">
    <span
      v-for="(image, ind) in images"
      :key="ind"
      :id="ind"
      :class="classes.dot"
    ></span>
  </div>
</template>
<script lang="ts" src="./ActiveCircle.ts" />
