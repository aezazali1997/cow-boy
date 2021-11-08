<template>
  <div :class="classes.wrapper">
    <div :class="classes.links">
      <div :class="classes.list">
        <span>Explore</span>
        <ul>
          <router-link to="#">
            <li>Cowboy 3</li>
          </router-link>
          <router-link to="#">
            <li>Cowboy 4</li>
          </router-link>
          <router-link to="#">
            <li>Cowboy 4 ST</li>
          </router-link>
          <router-link to="#">
            <li>App</li>
          </router-link>
          <router-link to="#">
            <li>services</li>
          </router-link>
          <router-link to="#">
            <li>reviews</li>
          </router-link>
          <router-link to="#">
            <li>stories</li>
          </router-link>
          <router-link to="#">
            <li>circular</li>
          </router-link>
          <router-link to="#">
            <li>business</li>
          </router-link>
        </ul>
      </div>
      <div :class="classes.list">
        <span>About</span>
        <ul>
          <router-link to="#">
            <li>careers</li>
          </router-link>
          <router-link to="#">
            <li>press</li>
          </router-link>
          <router-link to="#">
            <li>contact us</li>
          </router-link>
        </ul>
      </div>
      <div :class="classes.list">
        <span>Help</span>
        <ul>
          <router-link to="#">
            <li>Support</li>
          </router-link>
          <router-link to="#">
            <li>Delivery</li>
          </router-link>
          <router-link to="#">
            <li>Returns</li>
          </router-link>
          <router-link to="#">
            <li>Warrenty</li>
          </router-link>
        </ul>
      </div>
      <div :class="classes.list">
        <span>Connect</span>
        <ul>
          <router-link to="#"><li>Facebook</li></router-link>
          <router-link to="#">
            <li>Delivery</li>
          </router-link>
          <router-link to="#">
            <li>Twitter</li>
          </router-link>
        </ul>
      </div>
      <div :class="classes.form">
        <span>Join our news letter</span>
        <form>
          <input type="text" placeholder="Email" :class="classes.email" />
          <input type="submit" value="&rarr;" :class="classes.submit" />
        </form>
      </div>
    </div>
    <div :class="classes.terms">
      <h1 :class="classes.title">Cowboy<sub>*</sub></h1>
      <div :class="classes.termAndConditions">
        <!-- select box -->
        <select :class="classes.select">
          <option value="US">United Utates</option>
          <option value="UK">United Kingdom</option>
          <option value="sverige">Sverige/English</option>
          <option value="osterriech">Osterreiech</option>
          <option value="netherland">Netherland</option>
          <option value="luxembourge">Luxembourge/English</option>
          <option value="italia">Italia/English</option>
          <option value="france">France</option>
          <option value="espania">Espania/English</option>
          <option value="deutshland">Deutshland/English</option>
          <option value="denmark">Denmark/English</option>
          <option value="belgie">Belgie/Netherland</option>
          <option value="belgique">Belgique/Francias</option>
        </select>
        <div :class="classes.termsLinks">
          <a href="">Terms of Use</a>
          <a href="">Privacy policy</a>
          <a href="">&copy; 2021 Cowboy</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./FooterLower.ts" />
