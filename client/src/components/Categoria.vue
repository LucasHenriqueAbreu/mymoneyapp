<template>
  <div class="categoria">
    <md-list class="custom-list md-triple-line">
        <md-list-item v-for="item in categorias">
            <div class="md-list-text-container">
                <p>{{item.descricao}}</p>
            </div>
            <md-button @click="openDialog('categoriaCadastro')" class="md-icon-button md-list-action">
                <md-icon class="md-primary">edit</md-icon>
            </md-button>    
            <md-divider class="md-inset">create</md-divider>
        </md-list-item>
    </md-list>
    <md-dialog md-open-from="#fab" md-close-to="#fab" ref="categoriaCadastro">
        <md-dialog-title>Criar uma nova categoria</md-dialog-title>

        <md-dialog-content>
            <form>
            <md-input-container>
                <label>Descrição</label>
                <md-input v-model="descricao" required></md-input>
            </md-input-container>
            </form>
        </md-dialog-content>

        <md-dialog-actions>
            <md-button class="md-primary" @click="closeDialog('categoriaCadastro')">Cancelar</md-button>
            <md-button class="md-primary" @click="save($event)">Salvar</md-button>
        </md-dialog-actions>
    </md-dialog>
    <md-button class="md-fab md-fab-bottom-right" id="fab" @click="openDialog('categoriaCadastro')">
        <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'categoria',
  data () {
    return {
      descricao: "",
      token: this.$localStorage.get('token').id,
      categorias: []
    }
  },
  methods: {
    save: function (e) {
      e.preventDefault()
      const token = this.$localStorage.get('token').id;
      this.$http.post('categorias', {descricao:this.descricao, access_token: this.token}).then(response => {
        this.$refs['categoriaCadastro'].close();
        this.findAll();
        console.log(response)
      }, response => {
        console.log(response)
      });
    },
    findAll: function (e) {
      this.$http.get('categorias', {access_token:this.token}).then(response => {
        this.categorias = response.data;
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
  .categoria{
    padding: 10px;
  }
  .md-list {
      max-height: 80vh; 
  }
</style>