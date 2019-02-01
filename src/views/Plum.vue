<template>
  <div class="plum">
    <div class="circle">
      <div class="box box1">
        <div class="dot dot1"></div>
      </div>
      <div class="box box5">
        <div class="dot dot5"></div>
      </div>
      <div class="box box9">
        <div class="dot dot9"></div>
      </div>
      <div class="box box13">
        <div class="dot dot13"></div>
      </div>
      <div class="box box17">
        <div class="dot dot17"></div>
      </div>
      <div class="box box21">
        <div class="dot dot21"></div>
      </div>
      <div class="box box25">
        <div class="dot dot25"></div>
      </div>
      <div class="box box29">
        <div class="dot dot29"></div>
      </div>
      <div class="box box33">
        <div class="dot dot33"></div>
      </div>
      <div class="box box37">
        <div class="dot dot37"></div>
      </div>
      <div class="box box41">
        <div class="dot dot41"></div>
      </div>
      <div class="box box45">
        <div class="dot dot45"></div>
      </div>
      <div class="box box49">
        <div class="dot dot49"></div>
      </div>
      <div class="box box53">
        <div class="dot dot53"></div>
      </div>
      <div class="box box57">
        <div class="dot dot57"></div>
      </div>
      <div class="box box61">
        <div class="dot dot61"></div>
      </div>
      <div class="box box65">
        <div class="dot dot65"></div>
      </div>
      <div class="box box69">
        <div class="dot dot69"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.plum {
    height: 500px;
  overflow-x: hidden;
  background-color: #4b384c;
}
/*#E2A9E5, #632C65, #4B384C*/
@keyframes wave- {
  0% {
    height: 0%;
    width: 0%;
    background-color: #632c65;
  }
  50% {
    height: 10%;
    width: 100%;
    background-color: #e2a9e5;
  }
  100% {
    height: 0%;
    width: 0%;
    background-color: #632c65;
  }
}
@keyframes wave {
  0% {
    height: 0%;
    width: 0%;
    background-color: #632c65;
  }
  50% {
    height: 33%;
    width: 33%;
    background-color: #e2a9e5;
  }
  100% {
    height: 0%;
    width: 0%;
    background-color: #632c65;
  }
}
.circle {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 15vw;
  width: 15vw;
  transition: 1s;
  transform: translate(-50%, -50%) rotate(-5deg);
  color: rgba(0, 0, 0, 0.4);
  border-radius: 100vw;
  text-align: center;
  line-height: 15vw;
}
.dot {
  position: absolute;
  top: 5%;
  left: 50%;
  height: 0%;
  width: 0%;
  transition: 1s;
  background-color: #0000ff;
  border-radius: 100vw;
  transform: translate(-50%, -50%);
  animation: wave- 3600ms linear infinite;
}
.circle:hover .dot {
  animation-name: wave;
  animation-iteration: infinite;
  animation-duration: 3600ms;
}
.box {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dot1 {
  animation-delay: 50ms;
}
.dot2 {
  animation-delay: 100ms;
}
.dot3 {
  animation-delay: 150ms;
}
.dot4 {
  animation-delay: 200ms;
}
.dot5 {
  animation-delay: 250ms;
}
.dot6 {
  animation-delay: 300ms;
}
.dot7 {
  animation-delay: 350ms;
}
.dot8 {
  animation-delay: 400ms;
}
.dot9 {
  animation-delay: 450ms;
}
.dot10 {
  animation-delay: 500ms;
}
.dot11 {
  animation-delay: 550ms;
}
.dot12 {
  animation-delay: 600ms;
}
.dot13 {
  animation-delay: 650ms;
}
.dot14 {
  animation-delay: 700ms;
}
.dot15 {
  animation-delay: 750ms;
}
.dot16 {
  animation-delay: 800ms;
}
.dot17 {
  animation-delay: 850ms;
}
.dot18 {
  animation-delay: 900ms;
}
.dot19 {
  animation-delay: 950ms;
}
.dot20 {
  animation-delay: 1000ms;
}
.dot21 {
  animation-delay: 1050ms;
}
.dot22 {
  animation-delay: 1100ms;
}
.dot23 {
  animation-delay: 1150ms;
}
.dot24 {
  animation-delay: 1200ms;
}
.dot25 {
  animation-delay: 1250ms;
}
.dot26 {
  animation-delay: 1300ms;
}
.dot27 {
  animation-delay: 1350ms;
}
.dot28 {
  animation-delay: 1400ms;
}
.dot29 {
  animation-delay: 1450ms;
}
.dot30 {
  animation-delay: 1500ms;
}
.dot31 {
  animation-delay: 1550ms;
}
.dot32 {
  animation-delay: 1600ms;
}
.dot33 {
  animation-delay: 1650ms;
}
.dot34 {
  animation-delay: 1700ms;
}
.dot35 {
  animation-delay: 1750ms;
}
.dot36 {
  animation-delay: 1800ms;
}
.dot37 {
  animation-delay: 1850ms;
}
.dot38 {
  animation-delay: 1900ms;
}
.dot39 {
  animation-delay: 1950ms;
}
.dot40 {
  animation-delay: 2000ms;
}
.dot41 {
  animation-delay: 2050ms;
}
.dot42 {
  animation-delay: 2100ms;
}
.dot43 {
  animation-delay: 2150ms;
}
.dot44 {
  animation-delay: 2200ms;
}
.dot45 {
  animation-delay: 2250ms;
}
.dot46 {
  animation-delay: 2300ms;
}
.dot47 {
  animation-delay: 2350ms;
}
.dot48 {
  animation-delay: 2400ms;
}
.dot49 {
  animation-delay: 2450ms;
}
.dot50 {
  animation-delay: 2500ms;
}
.dot51 {
  animation-delay: 2550ms;
}
.dot52 {
  animation-delay: 2600ms;
}
.dot53 {
  animation-delay: 2650ms;
}
.dot54 {
  animation-delay: 2700ms;
}
.dot55 {
  animation-delay: 2750ms;
}
.dot56 {
  animation-delay: 2800ms;
}
.dot57 {
  animation-delay: 2850ms;
}
.dot58 {
  animation-delay: 2900ms;
}
.dot59 {
  animation-delay: 2950ms;
}
.dot60 {
  animation-delay: 3000ms;
}
.dot61 {
  animation-delay: 3050ms;
}
.dot62 {
  animation-delay: 3100ms;
}
.dot63 {
  animation-delay: 3150ms;
}
.dot64 {
  animation-delay: 3200ms;
}
.dot65 {
  animation-delay: 3250ms;
}
.dot66 {
  animation-delay: 3300ms;
}
.dot67 {
  animation-delay: 3350ms;
}
.dot68 {
  animation-delay: 3400ms;
}
.dot69 {
  animation-delay: 3450ms;
}
.dot70 {
  animation-delay: 3500ms;
}
.dot71 {
  animation-delay: 3550ms;
}
.dot72 {
  animation-delay: 3600ms;
}

.box1 {
  transform: translate(-50%, -50%) rotate(5deg);
}
.box2 {
  transform: translate(-50%, -50%) rotate(10deg);
}
.box3 {
  transform: translate(-50%, -50%) rotate(15deg);
}
.box4 {
  transform: translate(-50%, -50%) rotate(20deg);
}
.box5 {
  transform: translate(-50%, -50%) rotate(25deg);
}
.box6 {
  transform: translate(-50%, -50%) rotate(30deg);
}
.box7 {
  transform: translate(-50%, -50%) rotate(35deg);
}
.box8 {
  transform: translate(-50%, -50%) rotate(40deg);
}
.box9 {
  transform: translate(-50%, -50%) rotate(45deg);
}
.box10 {
  transform: translate(-50%, -50%) rotate(50deg);
}
.box11 {
  transform: translate(-50%, -50%) rotate(55deg);
}
.box12 {
  transform: translate(-50%, -50%) rotate(60deg);
}
.box13 {
  transform: translate(-50%, -50%) rotate(65deg);
}
.box14 {
  transform: translate(-50%, -50%) rotate(70deg);
}
.box15 {
  transform: translate(-50%, -50%) rotate(75deg);
}
.box16 {
  transform: translate(-50%, -50%) rotate(80deg);
}
.box17 {
  transform: translate(-50%, -50%) rotate(85deg);
}
.box18 {
  transform: translate(-50%, -50%) rotate(90deg);
}
.box19 {
  transform: translate(-50%, -50%) rotate(95deg);
}
.box20 {
  transform: translate(-50%, -50%) rotate(100deg);
}
.box21 {
  transform: translate(-50%, -50%) rotate(105deg);
}
.box22 {
  transform: translate(-50%, -50%) rotate(110deg);
}
.box23 {
  transform: translate(-50%, -50%) rotate(115deg);
}
.box24 {
  transform: translate(-50%, -50%) rotate(120deg);
}
.box25 {
  transform: translate(-50%, -50%) rotate(125deg);
}
.box26 {
  transform: translate(-50%, -50%) rotate(130deg);
}
.box27 {
  transform: translate(-50%, -50%) rotate(135deg);
}
.box28 {
  transform: translate(-50%, -50%) rotate(140deg);
}
.box29 {
  transform: translate(-50%, -50%) rotate(145deg);
}
.box30 {
  transform: translate(-50%, -50%) rotate(150deg);
}
.box31 {
  transform: translate(-50%, -50%) rotate(155deg);
}
.box32 {
  transform: translate(-50%, -50%) rotate(160deg);
}
.box33 {
  transform: translate(-50%, -50%) rotate(165deg);
}
.box34 {
  transform: translate(-50%, -50%) rotate(170deg);
}
.box35 {
  transform: translate(-50%, -50%) rotate(175deg);
}
.box36 {
  transform: translate(-50%, -50%) rotate(180deg);
}
.box37 {
  transform: translate(-50%, -50%) rotate(185deg);
}
.box38 {
  transform: translate(-50%, -50%) rotate(190deg);
}
.box39 {
  transform: translate(-50%, -50%) rotate(195deg);
}
.box40 {
  transform: translate(-50%, -50%) rotate(200deg);
}
.box41 {
  transform: translate(-50%, -50%) rotate(205deg);
}
.box42 {
  transform: translate(-50%, -50%) rotate(210deg);
}
.box43 {
  transform: translate(-50%, -50%) rotate(215deg);
}
.box44 {
  transform: translate(-50%, -50%) rotate(220deg);
}
.box45 {
  transform: translate(-50%, -50%) rotate(225deg);
}
.box46 {
  transform: translate(-50%, -50%) rotate(230deg);
}
.box47 {
  transform: translate(-50%, -50%) rotate(235deg);
}
.box48 {
  transform: translate(-50%, -50%) rotate(240deg);
}
.box49 {
  transform: translate(-50%, -50%) rotate(245deg);
}
.box50 {
  transform: translate(-50%, -50%) rotate(250deg);
}
.box51 {
  transform: translate(-50%, -50%) rotate(255deg);
}
.box52 {
  transform: translate(-50%, -50%) rotate(260deg);
}
.box53 {
  transform: translate(-50%, -50%) rotate(265deg);
}
.box54 {
  transform: translate(-50%, -50%) rotate(270deg);
}
.box55 {
  transform: translate(-50%, -50%) rotate(275deg);
}
.box56 {
  transform: translate(-50%, -50%) rotate(280deg);
}
.box57 {
  transform: translate(-50%, -50%) rotate(285deg);
}
.box58 {
  transform: translate(-50%, -50%) rotate(290deg);
}
.box59 {
  transform: translate(-50%, -50%) rotate(295deg);
}
.box60 {
  transform: translate(-50%, -50%) rotate(300deg);
}
.box61 {
  transform: translate(-50%, -50%) rotate(305deg);
}
.box62 {
  transform: translate(-50%, -50%) rotate(310deg);
}
.box63 {
  transform: translate(-50%, -50%) rotate(315deg);
}
.box64 {
  transform: translate(-50%, -50%) rotate(320deg);
}
.box65 {
  transform: translate(-50%, -50%) rotate(325deg);
}
.box66 {
  transform: translate(-50%, -50%) rotate(330deg);
}
.box67 {
  transform: translate(-50%, -50%) rotate(335deg);
}
.box68 {
  transform: translate(-50%, -50%) rotate(340deg);
}
.box69 {
  transform: translate(-50%, -50%) rotate(345deg);
}
.box70 {
  transform: translate(-50%, -50%) rotate(350deg);
}
.box71 {
  transform: translate(-50%, -50%) rotate(355deg);
}
.box72 {
  transform: translate(-50%, -50%) rotate(360deg);
}
</style>