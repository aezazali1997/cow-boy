<template>
  <ul :class="classes.list">
    <li>
      <router-link to="products/cowboy3">cowboy 3</router-link>
    </li>
    <li>
      <router-link to="products/cowboy4">cowboy 4</router-link>
    </li>
    <li>
      <router-link to="products/cowboy4st">cowboy 4 st</router-link>
    </li>
    <li>
      <router-link to="/app">app</router-link>
    </li>
    <li>
      <router-link to="/services">services</router-link>
    </li>
    <li>
      <router-link to="/book">book a test ride</router-link>
    </li>
    <router-link to="/book" :class="classes.order">Order Now</router-link>
  </ul>
</template>
<script lang="ts" src="./Menu.ts" />
