<template>
  <div class="home">
    <md-dialog md-open-from="#fab" md-close-to="#fab" ref="lancamentoCadastro">
        <md-dialog-title>Criar um novo lancamento</md-dialog-title>

        <md-dialog-content>
            
        </md-dialog-content>

        <md-dialog-actions>
            <md-button class="md-primary" @click="closeDialog('lancamentoCadastro')">Cancelar</md-button>
            <md-button class="md-primary" @click="save($event)">Salvar</md-button>
        </md-dialog-actions>
    </md-dialog>
    <form>
                <md-input-container>
                    <label>Valor</label>
                    <md-input v-model="valor" required></md-input>
                </md-input-container>
                <input type="date" name="data" placeholder v-model="datavencimento" required>
                <md-input-container>
                    <label for="tipo">Tipo</label>
                    <md-select name="tipo" id="tipo" v-model="tipo">
                        <md-option value="0">Despesa</md-option>
                        <md-option value="1">Receita</md-option>
                    </md-select>
                </md-input-container>
                <md-checkbox id="repetir" name="repetir" v-model="repetir" class="md-primary">Repetir</md-checkbox>
                <div v-if="repetir">
                  <div>
                    <md-radio v-model="fixo" id="fixo" name="fixo" md-value="0" class="md-primary">
                        Fixo
                    </md-radio>
                    <md-radio v-model="parcelado" id="my-test5" name="my-test-group2" md-value="1" class="md-primary">
                        Parcelado
                    </md-radio>
                  </div>
                  <div v-if="parcelado">
                      <md-input-container>
                        <label for="tipo">Mês inicial</label>
                        <md-select name="mesini" id="mesini" v-model="mesini">
                            <md-option value="0">Janeiro</md-option>
                            <md-option value="1">Fevereiro</md-option>
                            <md-option value="2">Março</md-option>
                            <md-option value="3">Abril</md-option>
                            <md-option value="4">Maio</md-option>
                            <md-option value="5">Junho</md-option>
                            <md-option value="6">Julho</md-option>
                            <md-option value="7">Agosto</md-option>
                            <md-option value="8">Setembro</md-option>
                            <md-option value="9">Outubro</md-option>
                            <md-option value="10">Novembro</md-option>
                            <md-option value="11">Desembro</md-option>
                        </md-select>
                      </md-input-container>
                      <md-input-container>
                        <label for="tipo">Mês final</label>
                        <md-select name="mesfim" id="mesfim" v-model="mesfim">
                            <md-option value="0">Janeiro</md-option>
                            <md-option value="1">Fevereiro</md-option>
                            <md-option value="2">Março</md-option>
                            <md-option value="3">Abril</md-option>
                            <md-option value="4">Maio</md-option>
                            <md-option value="5">Junho</md-option>
                            <md-option value="6">Julho</md-option>
                            <md-option value="7">Agosto</md-option>
                            <md-option value="8">Setembro</md-option>
                            <md-option value="9">Outubro</md-option>
                            <md-option value="10">Novembro</md-option>
                            <md-option value="11">Desembro</md-option>
                        </md-select>
                      </md-input-container>
                  </div>
                </div>
                <md-input-container>
                    <label>Descrição</label>
                    <md-input v-model="descricao"></md-input>
                </md-input-container>
            </form>
    <md-button class="md-fab md-fab-bottom-right" id="fab" @click="openDialog('lancamentoCadastro')">
        <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      valor: 0,
      datalancamento: new Date(),
      datavencimento: new Date(),
      tipo: 0,
      repetir: false,
      fixo: 1,
      parcelado: 0,
      mesini: 0,
      mesfim: 0,
      descricao: "",
      /*user: this.$localStorage.get('userLogged').id,*/
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