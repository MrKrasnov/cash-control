<template>
  <div class="home">
    <div class="home-container">
      <div class="home-container-title">
        <h1>Счет</h1>
        <button>
          <img src="../../../src/assets/icon/update.svg" alt="update">
        </button>
      </div>
      <hr>
      <div class="home-container-main">
        <div class="home-container-main-score">
          <h2>Счет в валюте</h2>
          <p>12.0 P</p>
        </div>
        <div class="home-container-main-exchangeRates">
          <h2>Курс валют</h2>
          <div class="exchangeRates-active home-container-main-exchangeRates-info">
            <p>Валюта</p>
            <p>Курс</p>
            <p>Дата</p>
          </div>
          <div class="home-container-main-exchangeRates-info">
            <p>руб</p>
            <p class="course">121211</p>
            <p>12.12.12</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
<style lang="sass">
.home
  width: 88%
  &-container
    padding-top: 50px
    width: 85%
    margin: 0 auto
    &-main
      padding-top: 20px
      display: flex
      &-exchangeRates
        padding-bottom: 30px
        margin-left: 2%
        width: 48%
        background-color: #e7e6cd
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
        & h2
          margin-left: 20px
        &-info
          margin-left: 20px
          display: flex
          border-bottom: 1px dotted #000000
          margin-right: 20px
          & p
            font-size: 17.5px
            margin-left: 10%
            &:nth-child(1)
              margin-left: 2px
          & .course
            margin-left: 15.5%  
      &-score
        width: 48%
        margin-right: 2%
        background-color: #e7e6cd
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
        & h2
          margin-left: 20px
        & p
          margin-left: 20px
          margin-right: 20px
          font-size: 20px
          padding-top: 30px
          padding-bottom: 20px
          border-bottom: 1px dotted #000000
    &-title
      display: flex
      justify-content: space-between
      & button
        height: 70px
        width: 70px
        & img
          width: 100%
          height: 100%
          &:hover
            filter: drop-shadow(0px 0px 10px #58d683)

.exchangeRates-active
  font-size: 17.5px
  font-weight: bold
  & p
    margin-left: 10%
</style>
