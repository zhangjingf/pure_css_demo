<template>
  <div class="wave_circle">
    <div class="wrapper">
      <div class="wave"></div>
    </div>
  </div>
</template>
<style lang="scss">
.wave_circle {
  position: relative;
  padding: 0;
  margin: 0;
  color: #ffffff;
}
.wrapper {
  width: 100%;
  display: flex;
  background: #ff5722;
  min-height: 100vh;
  align-items: center;
}
.wave {
  display: inline-block;
  position: absolute;
  width: 70px;
  height: 70px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.wave:before,
.wave:after {
  position: absolute;
  content: "";
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  // transform: translate(-50%, -50%);
  animation: wave 1.2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.wave:after {
  animation-delay: -0.4s;
}
@keyframes wave {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>