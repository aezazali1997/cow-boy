<template>
  <div id="wrapper" :class="classes.wrapper">
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
      <div id="transformLeft1" :class="classes.moveLeft">
        <img :src="moveLeft1" alt="" />
        <img :src="moveLeft2" alt="" />
        <img :src="moveLeft3" alt="" />
      </div>
      <div id="transformLeft2" :class="[classes.moveLeft, classes.marginTop7]">
        <img :src="moveLeft4" alt="" />
        <img :src="moveLeft5" alt="" />
      </div>
      <div :class="classes.mid">
        <img :src="phoneImage" alt="" />
      </div>
      <div id="transformRight1" :class="classes.moveRight">
        <img :src="moveRight1" alt="" />
        <img :src="moveRight2" alt="" />
      </div>
      <div
        id="transformRight2"
        :class="[classes.moveRight, classes.marginTop7]"
      >
        <img :src="moveRight3" alt="" />
        <img :src="moveRight4" alt="" />
        <img :src="moveRight5" alt="" />
      </div>
      <div :class="classes.mediaRight">
        <img :src="right1" alt="" />
        <img :src="right2" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./DiscoverApp.ts" />
