<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.account"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        account: '',
        password: ''
      },
      userTokenData: {
        JwtToken: ''
      }
    }
  },
  methods: {
    signIn () {
      console.log('login')
      const api = `${process.env.VUE_APP_API}/users/login`
      console.log(api)
      // POST請求
      this.apiHelper
        .post(api, this.user)
        .then((response) => {
          console.log(response)
          const getJwtToken = response.data.JwtToken
          this.userTokenData.JwtToken = getJwtToken
          console.log(this.userTokenData.JwtToken, getJwtToken)
          localStorage.setItem('JwtToken', getJwtToken)
        })
        .catch((error) => console.log('response: ', error.response.data))
    }
  }
}
</script>
