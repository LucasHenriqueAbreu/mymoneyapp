<template>
  <div id="app">
    <div class="phone-viewport">
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title">My Money</h2>
      </md-toolbar>
      <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-account-header">
          <md-list class="md-transparent">
            <md-list-item class="md-avatar-list">
              <md-avatar class="md-large">
                <img src="https://placeimg.com/64/64/people/8" alt="People">
              </md-avatar>
            </md-list-item>
      
            <md-list-item>
              <div class="md-list-text-container">
                <span>{{userLogged.username}}</span>
                <span>{{userLogged.email}}</span>
              </div>
              <md-menu>
                <md-button class="md-icon-button md-list-action" md-menu-trigger>
                  <md-icon>arrow_drop_down</md-icon>
                </md-button>
                <md-menu-content>
                  <md-menu-item>
                    <router-link @click.native="toggleLeftSidenav" to="login">Entrar</router-link>
                  </md-menu-item>
                  <md-menu-item>
                    <router-link @click.native="toggleLeftSidenav" to="profile">Perfil</router-link>
                  </md-menu-item>
                  <md-menu-item>
                    <router-link @click.native="toggleLeftSidenav" to="logout">Sair</router-link>
                  </md-menu-item>
                </md-menu-content>
              </md-menu>
            </md-list-item>
          </md-list>
        </md-toolbar>
        <md-list>
          <md-list-item>
            <router-link @click.native="toggleLeftSidenav" to="home">
              <md-icon>pie_chart</md-icon> <span>Home</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <router-link @click.native="toggleLeftSidenav" to="categoria">
              <md-icon>insert_drive_file</md-icon> <span>Categorias</span>
            </router-link>
          </md-list-item>
      
          <md-list-item>
            <router-link @click.native="toggleLeftSidenav" to="lancamentos">
              <md-icon>people</md-icon> <span>Lançamentos</span>
            </router-link>
          </md-list-item>
      
          <md-list-item>
            <router-link @click.native="toggleLeftSidenav" to="topdespesas">
              <md-icon>access_time</md-icon> <span>Top Despesas</span>
            </router-link>
          </md-list-item>
        </md-list>

      </md-sidenav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      userLogged: {
        username:'',
        email:''
      }
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
}
</script>