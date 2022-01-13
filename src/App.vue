<template>
  <div id="main">
    <div id="sidebar">
      <ul class="sidebar__nav">
        <li class="nav__item">
          <p @click="this.$router.push('/')">T</p>
        </li>
      </ul>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');

.run {
    background: #64925d;
    color:rgb(230, 230, 230);
    width: 100px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
    border: 0;
    box-shadow: 0px 0px 12px rgba(162, 162, 162, 0.25);
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
}

.collect {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.collect h1{ 
  margin: 0px;
}

* {
  font-family: 'Roboto' !important;
}

ul, li {
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
  padding: 0;
  margin: 0;
}

.sidebar__nav {
  margin-top: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.nav__item {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #84C17A;
  transition: all 0.3s;
}

.nav__item:hover {
    background: #6a9e61;
  }

.nav__item p{
  color: #f3f3f3;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  font-size:28px;
  font-size:28px;
  margin: 0px;
}

p {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

#main {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  display: flex;
}

#content {
  width: 100%;
}

#content .view {
  margin-top: 40px;
  margin-left: 50px;
}

#content .view  h1 {
  text-align: left;
  margin-bottom: 0px;
}

#content .view  h3 {
  text-align: left;
  margin-bottom: 40px;
  color: rgb(85, 85, 85);
  font-style: italic;
}

#sidebar {
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 70px;
  height: 100%;
}

</style>
