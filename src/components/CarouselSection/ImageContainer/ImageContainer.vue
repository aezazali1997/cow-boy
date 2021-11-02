<template>
  <div id="carousel" :class="classes.container">
    <img
      v-for="image in images"
      :key="image.id"
      :src="image"
      alt=""
      :class="classes.image"
    />
  </div>
</template>
<script lang="ts" src="./ImageContainer.ts" />
