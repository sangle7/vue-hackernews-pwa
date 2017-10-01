<template>
  <div id="app">
    <my-navbar></my-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
body,html{
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.3125;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    box-sizing: border-box;
}

h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .3rem;
}

@media screen and (min-width: 600px) {
    body,
    html {
        font-size: 16px;
    }
}

@media screen and (min-width: 360px) {
    body,
    html {
        font-size: 15px;
    }
}

h2,
p {
    font: inherit;
    font-size: 100%;
    margin: 0;
}
</style>
