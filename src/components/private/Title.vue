<template>
  <div class="section-divider">
    <span class="line"></span>
    <span class="title"><slot /></span>
    <span class="line"></span>
  </div>
</template>

<style>
  .section-divider {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 40px 0 24px;
  }

  .section-divider .line {
    flex: 1;
    height: 1px;
    background-color: #e0e0e0;
  }

  .section-divider .title {
    margin: 0 12px;
    font-size: 13px;
    letter-spacing: 1px;
    color: #888;
    font-weight: 500;
    white-space: nowrap;
  }
</style>
