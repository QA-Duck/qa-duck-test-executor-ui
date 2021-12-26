<template>
  <div id="main">
    <div id="sidebar">
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');


* {
  font-family: 'Roboto' !important;
}

body, html {
  height: 100%;
  padding: 0;
  margin: 0;
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
