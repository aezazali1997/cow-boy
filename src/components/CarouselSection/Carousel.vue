<template>
  <div
    id="carousel"
    :class="classes.container"
    :style="{
      cursor:
        cursor > 1920 / 2
          ? `url(${cursorRight}), auto`
          : `url(${cursorLeft}), auto`,
    }"
  >
    <img :src="images[0]" alt="" :class="classes.image" />
    <img :src="images[1]" alt="" :class="classes.image" />
    <img :src="images[2]" alt="" :class="classes.image" />
    <img :src="images[3]" alt="" :class="classes.image" />
    <img :src="images[4]" alt="" :class="classes.image" />
    <img :src="redDotImage" alt="" :class="classes.redDot" />
    <span :class="classes.dot"></span>
    <span :class="classes.dot"></span>
    <span :class="classes.dot"></span>
  </div>
</template>
<script lang="ts" src="./Carousel.ts" />
