<script setup></script>

<template>
  <RouterView />
</template>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: #eff7f0; /* wrapper랑 동일 */
    min-height: 100%;
  }
  /* 스크롤바 숨기기 */
  body {
    -ms-overflow-style: none; /* IE */
    scrollbar-width: none; /* Firefox */
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  button,
  button a,
  button span {
    color: inherit !important;
  }

  button a {
    text-decoration: none !important;
  }
</style>
