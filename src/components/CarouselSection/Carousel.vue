<template>
  <div
    :class="classes.container"
    :style="{
      cursor:
        cursor > 1920 / 2
          ? `url(${cursorRight}), auto`
          : `url(${cursorLeft}), auto`,
    }"
  >
    <img :src="images[1]" alt="" :class="classes.image" />
    <img :src="redDotImage" alt="" :class="classes.redDot" />
  </div>
</template>
<script lang="ts" src="./Carousel.ts" />
