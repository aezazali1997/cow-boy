<template>
  <div
    :style="{ display: toggleOfferBar ? 'none' : 'flex' }"
    :class="classes.offerBar"
  >
    <p>
      {{ offerText }}
      <a href="#">Configure Yours</a>
    </p>
    <button @click="closeOfferBar">X</button>
  </div>
</template>
<script lang="ts" src="./OfferBar.ts" />
