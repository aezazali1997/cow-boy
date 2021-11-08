<template>
  <div :class="classes.container">
    <p :class="classes.cowboy">Cowboy at your service</p>
    <h3 :class="classes.heading">
      A network of support at the ready and on the road.
    </h3>
    <button :class="classes.btn">learn more</button>
    <div :class="classes.imgContainer">
      <div>
        <img :src="footerImage1" alt="" />
        <h1>theft insurance</h1>
        <span>&rarr;</span>
      </div>
      <div>
        <img :src="footerImage2" alt="" />
        <h1>cowboy mobile service</h1>
        <span>&rarr;</span>
      </div>
      <div>
        <img :src="footerImage3" alt="" />
        <h1>in-App support</h1>
        <span>&rarr;</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./FooterUpper.ts" />
