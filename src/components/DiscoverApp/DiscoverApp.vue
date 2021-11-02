<template>
  <div :class="classes.wrapper">
    <div :class="classes.txtWrapper">
      <h1 :class="classes.heading">It's a great day for ride.</h1>
      <p :class="classes.txt">
        At the heart of a Cowboy, is your road companion. Connected to you and
        any path you take.
      </p>
      <button :class="classes.btn">Discover the app</button>
    </div>
    <div :class="classes.imageWrapper">
      <div :class="classes.mediaLeft">
        <img :src="left1" alt="" />
        <img :src="left2" alt="" />
      </div>
      <div :class="classes.moveLeft">
        <img :src="moveLeft1" alt="" />
        <img :src="moveLeft2" alt="" />
        <img :src="moveLeft3" alt="" />
      </div>
      <div :class="classes.moveLeft">
        <img :src="moveLeft4" alt="" />
        <img :src="moveLeft5" alt="" />
      </div>
      <div :class="classes.mid">
        <img :src="phoneImage" alt="" />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script lang="ts" src="./DiscoverApp.ts" />
