<template>
  <div class="circle">
    <div class="circle__3">
      <div class="circle__text">
        <div class="circle__title">You are almost ready to go!</div>
        <div class="circle__description">Please check your email to reset your password</div>
      </div>
      <div class="circle__2">
        <div class="circle__1">
          <div class="circle__img">
            <img src="" alt="email"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.circle {
  border: 1px solid red;
  /*position: absolute;*/
  min-width: 290px;
  width: 380px;
  min-height: 290px;
  height: 380px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 40px rgba(231, 231, 231, 0.5);
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  /*  left: 0;
    right: 0;*/
  margin-top: 20px;
  z-index: 1;
}

.circle__3 {
  width: 100%;
  height: 100%;
  padding: 70px;
  background-color: rgba(251, 248, 248, 0.45);
  box-shadow: 0px 0px 42px rgba(231, 231, 231, 0.36);
  border-radius: 50%;
  left: 0;
  right: 0;
  position: relative;
}

.circle__2 {
  width: 100%;
  height: 100%;
  padding: 75px;
  background-color: rgba(254, 254, 254, 0.54);
  box-shadow: 0 0 42px rgba(231, 231, 231, 0.11);
  border-radius: 50%;
  left: 0;
  right: 0;
  position: relative;
}

.circle__1 {
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.54);
  box-shadow: 0 0 42px rgba(231, 231, 231, 0.43);
  border-radius: 50%;
  left: 0;
  right: 0;
  position: relative;
}

.circle__img {
  width: 150px;
  margin: 0 auto;
  padding-top: 57px;
}

.circle__text {
  position: absolute;
  text-align: center;
  bottom: 247px;
  font-family: 'Exo 2', sans-serif;
  font-style: normal;
  z-index: 2;
}

.circle__title {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #2a74db;
}

.circle__description {
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 1px;
  color: #000;
}
</style>