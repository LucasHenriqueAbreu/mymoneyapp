<template>
  <div class="signup">
    <form novalidate v-on:submit="signup($event)">
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">Novo usuário</div>
          <div class="md-subhead">informe os dados para cadastro</div>
        </md-card-header>

        <md-card-content>
          <md-input-container>
            <label>Usuário</label>
            <md-input v-model="username" required></md-input>
          </md-input-container>
          <md-input-container>
            <label>E-mail</label>
            <md-input v-model="email" required></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Senha</label>
            <md-input v-model="password" required type="password"></md-input>
          </md-input-container>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary"><md-icon class="">send</md-icon> Cadastrar</md-button>
        </md-card-actions>
      </md-card>      
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      username: "",
      email: "",
      emailVerified: true,
      password: ""
    }
  },
  methods: {
    signup: function (e) {
      e.preventDefault()
      this.$http.post('Users', {username:this.username, email:this.email, password:this.password}).then(response => {
        this.$http.post('Users/login', {email:this.email, password:this.password}).then(response => {
          this.$localStorage.set('token', JSON.stringify(response.body))
          window.location.href = '#/home';
          /*this.$router.go('/home');*/
        }, response => {
          console.log(response)
        });
      }, response => {
        console.log(response)
      });
    }
  }
}
</script>

<style>
  .signup{
    padding: 10px;
  }
</style>