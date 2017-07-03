<template>
  <div class="lancamento">
    <md-list class="custom-list md-triple-line">
        <md-list-item v-for="item in lancamentos">
            <div class="md-list-text-container">
                <p>{{item.descricao}}</p>
            </div>
            <md-button @click="openDialog('lancamentoCadastro')" class="md-icon-button md-list-action">
                <md-icon class="md-primary">edit</md-icon>
            </md-button>    
            <md-divider class="md-inset">create</md-divider>
        </md-list-item>
    </md-list>
    
  </div>
</template>

<script>
export default {
  name: 'lancamento',
  data () {
    return {
      valor: 0,
      datalancamento: new Date(),
      datavencimento: new Date(),
      tipo: 0,
      repetir: false,
      fixo: false,
      parcelado: false,
      mesini: 0,
      mesfim: 0,
      descricao: "",
      user: this.$localStorage.get('userLogged').id,
      token: this.$localStorage.get('token').id,
      lancamentos: []
    }
  },
  methods: {
    save: function (e) {
      e.preventDefault()
      const token = this.$localStorage.get('token').id;
      this.$http.post('lancamentos', {descricao:this.descricao, access_token: this.token}).then(response => {
        this.$refs['lancamentoCadastro'].close();
        this.findAll();
        console.log(response)
      }, response => {
        console.log(response)
      });
    },
    findAll: function (e) {
      this.$http.get('lancamentos', {access_token:this.token}).then(response => {
        this.lancamentos = response.data;
      }, response => {
        console.log(response)
      });
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    onOpen() {
      console.log('Opened');
    },
    onClose(type) {
      console.log('Closed', type);
    }
  },
  ready: function() {
      this.findAll();
  }
}
</script>

<style>
  .lancamento{
    padding: 10px;
  }
  .md-list {
      max-height: 80vh; 
  }
</style>