<template>
  <div
    :class="classes.navbar"
    :style="{ backgroundColor: scrollPos === 0 ? '#272926' : 'black' }"
  >
    <Logo />
    <Menu />
  </div>
</template>
<script lang="ts" src="./Navbar.ts" />
