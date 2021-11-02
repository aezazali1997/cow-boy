<template>
  <div :class="classes.wrapper">
    <h1 :class="classes.heading">cowboy 3</h1>
    <p :class="classes.frame">
      the quickest ride in town scores high marks for its sporty, agile frame.
    </p>
    <div :class="classes.btnWrapper">
      <button>Explore</button>
      <button>Book a test ride</button>
    </div>
    <span :class="classes.fee"
      >6 payments without fees or 1.990€ Free delivery in 10 days</span
    >
  </div>
</template>
<script lang="ts" src="./TextContainer.ts" />
