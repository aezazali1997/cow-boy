<template>
  <div
    :class="classes.wrapper"
    :style="{
      cursor:
        cursor > 1920 / 2
          ? `url(${cursorRight}), auto`
          : `url(${cursorLeft}), auto`,
    }"
  >
    <ImageContainer :cursor="cursor" />
    <img :src="redDotImage" alt="" :class="classes.logoBottom" />
    <ActiveCircle />
  </div>
</template>
<script lang="ts" src="./Carousel.ts" />
