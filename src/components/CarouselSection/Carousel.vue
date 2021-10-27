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
    <img src="" alt="" />
  </div>
</template>
<script lang="ts" src="./Carousel.ts" />
