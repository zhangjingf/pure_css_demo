<template>
  <div class="frame">
    <div>
      <div class="headline">
        <div>your daily progress</div>
      </div>
      <div class="circle-big">
        <div class="text">
          2758<div class="small">kcal</div>
        </div>
        <svg>
          <circle
            class="bg"
            cx="57"
            cy="57"
            r="52"
          ></circle>
          <circle
            class="progress"
            cx="57"
            cy="57"
            r="52"
          ></circle>
        </svg>
      </div>
      <div class="circles-small">
        <div class="circle-small">
          <div class="text">8563<br /><span class="small">steps</span></div>
          <svg>
            <circle
              class="bg"
              cx="40"
              cy="40"
              r="37"
            ></circle>
            <circle
              class="progress one"
              cx="40"
              cy="40"
              r="37"
            ></circle>
          </svg>
        </div>
        <div class="circle-small">
          <div class="text">6,2<br /><span class="small">km</span>
          </div>
          <svg>
            <circle
              class="bg"
              cx="40"
              cy="40"
              r="37"
            ></circle>
            <circle
              class="progress two"
              cx="40"
              cy="40"
              r="37"
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	data () {
		return {}
	}
}
</script>
<style lang="scss">
@import url(https://fonts.googleapis.co/css?family=montserrat:600,400,300);

.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 3px;
  box-shadow: .5rem .5rem 1rem rgba(0, 0, 0, 0.6);
  overflow: hidden;
  background: #413951;
  background: linear-gradient(145deg, #413951 0%, #201c29 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#413951', endColorstr='#201c29',GradientType=0 );
  color: #fff;
  font-family: 'montserrat', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	display: flex;
	justify-content: center;
	align-items: center;
}

.headline {
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
}

.circle-big {
  position: relative;
  width: 114px;
  height: 114px;
  margin: 30px auto 25px auto;
}

.circle-big svg {
  width: 114px;
  height: 114px;
}

.circle-big .bg {
  fill: none;
  stroke-width: 10px;
  stroke: #343035;
}

.circle-big .progress {
  fill: none;
  stroke-width: 10px;
  stroke: #9a0fe0;
  stroke-linecap: round;
  stroke-dasharray: 326.56;
  stroke-dashoffset: 60;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: big 1.5s ease-in-out;
}

.circle-big .text {
  position: absolute;
  width: 100%;
  top: 37px;
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  line-height: 22px;
}

.circle-big .text .small {
  font-size: 14px;
  color: #fff;
}

.circles-small {
  margin: 0 auto;
  width: 400px;
  height: 80px;
  text-align: center;
}

.circle-small {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 20px;
}

.circle-small svg {
  width: 80px;
  height: 80px;
}

.circle-small .bg {
  fill: none;
  stroke-width: 6px;
  stroke: #343035;
}

.circle-small .progress {
  fill: none;
  stroke-width: 6px;
  stroke: pink;
  stroke-linecap: round;
  stroke-dasharray: 232.36;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.circle-small .progress.one {
  stroke-dashoffset: 80;
  animation: one 2.5s ease-in-out, appear 1s;
}

.circle-small .progress.two {
  stroke-dashoffset: 140;
  animation: two 3.5s ease-in-out, appear 2s;
}

.circle-small .text {
  position: absolute;
  width: 100%;
  top: 26px;
  font-size: 17px;
  text-align: center;
  font-weight: 400;
  line-height: 16px;
}

.circle-small .text .small {
  font-size: 12px;
  color: #fff;
}

@keyframes big {
  from {
    stroke-dashoffset: 326.56;
  }
  to {
    stroke-dashoffset: 60;
  }
}

@keyframes one {
  from {
    stroke-dashoffset: 232.36;
  }
  to {
    stroke-dashoffset: 80;
  }
}

@keyframes two {
  from {
    stroke-dashoffset: 232.36;
  }
  to {
    stroke-dashoffset: 140;
  }
}

@keyframes appear {
	0%, 50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>

