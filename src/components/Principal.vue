<template>
  <b-container>
    <div>
      <b-button v-b-modal.modal-user variant="primary" @click="obtenerUsuarios"
        >Usuarios</b-button
      >
      <b-modal
        id="modal-user"
        ref="modal"
        title="Usuarios"
        scrollable
        header-bg-variant="light"
        header-text-variant="primary"
        hide-header-close
        no-close-on-esc
        no-close-on-backdrop
        size="xl"
      >
        <b-container class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <b-row id="lolo" class="m-0 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <!-- Formulario Usuario -->
            <b-col
              id="lala"
              color="primary"
              class="col-sm-6 col-md-6 col-lg-6 col-xl-6"
            >
              <b-row>
                <b-col>
                  <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group
                      label="Cédula"
                      label-for="id-input"
                      invalid-feedback="Cédula es requerida"
                      :state="nameState"
                    >
                      <b-form-input
                        id="id-input"
                        v-model="id"
                        :state="idState"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Primer Nombre"
                      label-for="name-input"
                      invalid-feedback="Primer nombre es requerido"
                      :state="nameState"
                    >
                      <b-form-input
                        id="name-input"
                        v-model="name"
                        :state="nameState"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Segundo Nombre"
                      label-for="second-name-input"
                      invalid-feedback="Segundo nombre es requerido"
                      :state="secondNameState"
                    >
                      <b-form-input
                        id="second-name-input"
                        v-model="secondName"
                        :state="secondNameState"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Primer Apellido"
                      label-for="first-last-name-input"
                      invalid-feedback="Primer apellido es requerido"
                      :state="firstLastNameState"
                    >
                      <b-form-input
                        id="name-input"
                        v-model="firstLastName"
                        :state="firstLastNameState"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Segundo Apellido"
                      label-for="second-last-name-input"
                      invalid-feedback="Segundo apellido es requerido"
                      :state="secondLastNameState"
                    >
                      <b-form-input
                        id="second-name-input"
                        v-model="secondLastName"
                        :state="secondLastNameState"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label="Contraseña"
                      label-for="password-input"
                      invalid-feedback="Contraseña es requerido"
                      :state="passwordState"
                    >
                      <b-form-input
                        id="password-input"
                        v-model="password"
                        :state="passwordState"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="E-mail"
                      label-for="mail-input"
                      invalid-feedback="E-mail es requerido"
                      :state="mailState"
                    >
                      <b-form-input
                        id="mail-input"
                        v-model="mail"
                        :state="mailState"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-row>
                      <b-col class="col-xs-6">
                        <b-form-group
                          label="Empresa"
                          label-for="build-input"
                          invalid-feedback="Empresa es requerida"
                          :state="buildState"
                        >
                          <b-form-select
                            id="build-input"
                            v-model="build"
                            :state="buildState"
                            :options="builds"
                            required
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-group
                          label="Nit Empresa"
                          label-for="nit-build-input"
                          invalid-feedback="Empresa es requerida"
                          :state="nitBuildState"
                        >
                          <b-form-input
                            id="-input"
                            v-model="nitBuild"
                            :state="nitBuildState"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col class="col-sm-6">
                        <b-form-group
                          label="Rol"
                          label-for="rol-input"
                          invalid-feedback="Rol es requerido"
                          :state="rolState"
                        >
                          <b-form-select
                            id="rol-input"
                            v-model="rol"
                            :state="rolState"
                            :options="rols"
                            required
                            size="lg"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col class="col-sm-6">
                        <b-form-group
                          label="Estado"
                          label-for="state-input"
                          invalid-feedback="Estado es requerido"
                          :state="stateState"
                        >
                          <b-form-select
                            id="state-input"
                            v-model="state"
                            :state="stateState"
                            :options="states"
                            required
                            size="sm"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </form>
                </b-col>
              </b-row>
            </b-col>

            <!-- Tabla Usuarios -->
            <b-col
              id="lele"
              color="primary"
              class="col-sm-6 col-md-6 col-lg-6 col-xl-6"
            >
              <b-row>
                <b-form-group
                  label="Selection mode:"
                  label-for="table-select-mode-select"
                  label-cols-md="4"
                >
                  <b-form-select
                    id="table-select-mode-select"
                    v-model="selectMode"
                    :options="modes"
                    class="mb-3"
                  ></b-form-select>
                </b-form-group>

                <b-table
                  :items="items"
                  :fields="fields"
                  :select-mode="selectMode"
                  responsive="sm"
                  ref="selectableTable"
                  selectable
                  @row-selected="onRowSelected"
                >
                  <!-- Example scoped slot for select state illustrative purposes -->
                  <template #cell(selected)="{ rowSelected }">
                    <template v-if="rowSelected">
                      <span aria-hidden="true">&check;</span>
                      <span class="sr-only">Selected</span>
                    </template>
                    <template v-else>
                      <span aria-hidden="true">&nbsp;</span>
                      <span class="sr-only">Not selected</span>
                    </template>
                  </template>
                </b-table>
                <p>
                  <b-button size="sm" @click="selectAllRows"
                    >Select all</b-button
                  >
                  <b-button size="sm" @click="clearSelected"
                    >Clear selected</b-button
                  >
                  <b-button size="sm" @click="selectThirdRow"
                    >Select 3rd row</b-button
                  >
                  <b-button size="sm" @click="unselectThirdRow"
                    >Unselect 3rd row</b-button
                  >
                </p>
                <p>
                  Selected Rows:<br />
                  {{ selected }}
                </p>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
        <template #modal-footer>
          <b-row id="containerBtnSaveGrafic" class="p-0 text-right">
            <b-col class="p-0">
              <b-button
                squared
                variant="success"
                id="buttonModal"
                class="m-2 mr-4"
                value="Cancelar"
                @click="closeModal('specific')"
                >Guardar</b-button
              >
              <b-button
                squared
                variant="primary"
                id="buttonModal"
                class="m-2 mr-4"
                value="Cancelar"
                @click="closeModal('specific')"
                >Actualizar</b-button
              >
              <b-button
                squared
                variant="danger"
                id="buttonModal"
                class="m-2 mr-4"
                value="Cancelar"
                @click="closeModal('specific')"
                >Eliminar</b-button
              >
              <b-button
                squared
                variant="dark"
                id="buttonModal"
                class="m-2 mr-4"
                value="Cancelar"
                @click="closeModal('user')"
                >Cancelar</b-button
              >
            </b-col>
          </b-row>
        </template>
      </b-modal>
    </div>
  </b-container>
</template>

<script>
import { ClientService } from "../services/Client";
import axios from "axios";
export default {
  data() {
    return {
      firstLastNameState: null,
      id: "",
      idState: null,
      name: "",
      nameState: null,
      secondName: "",
      secondNameState: null,
      firstLastName: "",
      secondLastName: "",
      secondLastNameState: null,
      password: "",
      passwordState: null,
      mail: "",
      mailState: null,
      // Tabla
      modes: ["multi", "single", "range"],
      fields: [
        "selected",
        "id",
        "name",
        "second_name",
        "first_last_name",
        "second_last_name",
        "password",
        "mail",
        "nit",
        "rol",
        "state",
      ],
      items: [],
      selectMode: "multi",
      selected: [],
      // Fin tabla

      build: null,
      nitBuild: "",
      nitBuildState: null,
      builds: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      buildState: null,
      rol: null,
      rols: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      rolState: null,
      state: null,
      stateState: null,
      states: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  methods: {
    //Cierra el modal correspondiente
    closeModal(mod) {
      if (mod == "user") {
        return this.$bvModal.hide("modal-user");
      }
    },

    // CRUD USUARIOS
   async obtenerUsuarios() {
      // var path = "http://192.168.56.1:5000/"
      // var data = {};
      // var result = {};
      // data["action"] = "get_user";
      // axios.post(path, data).then((response) => {
      //   var dato = response.data;
      //   var items = dato.split(",");
      //   result["id"] = items[0];
      //   result["name"] = items[1];
      //   result["second_name"] = items[2];
      //   result["first_last_name"] = items[3];
      //   result["second_last_name"] = items[4];
      //   result["password"] = items[5];
      //   result["mail"] = items[6];
      //   result["nit"] = items[7];
      //   result["rol"] = items[8];
      //   result["state"] = items[9];
      //   console.log("Data: " + JSON.stringify(result));
      //   this.items.push(result);
      //   // return result;
      // });
      var resultado =  await ClientService.getClients()
      

      console.log("RES")
      console.log(resultado)
      this.items.push(resultado)
      // // for(var i=0; i< resultado.length;i++){
      // //   this.items.push(resultado[i])
      // // }
      // console.log("ITEMS")
      // console.log(this.items)
    },
    agregarUsuario() {
      var cedula = this.id;
      var primerNombre = this.name;
      var segundoNombre = this.secondName;
      var primerApellido = this.firstLastName;
      var segundoApellido = this.secondLastName;
      var clave = this.password;
      var email = this.mail;
      var nitEmpresa = this.nitBuild;
      var rol = this.rol;
      var estado = this.state;
      ClientService.addClient(
        cedula,
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        clave,
        email,
        nitEmpresa,
        rol,
        estado
      );
    },
    actualizarUsuario() {
      var cedula = this.id;
      var primerNombre = this.name;
      var segundoNombre = this.secondName;
      var primerApellido = this.firstLastName;
      var segundoApellido = this.secondLastName;
      var clave = this.password;
      var email = this.mail;
      var nitEmpresa = this.nitBuild;
      var rol = this.rol;
      var estado = this.state;
      ClientService.updateClient(
        cedula,
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        clave,
        email,
        nitEmpresa,
        rol,
        estado
      );
    },
    eliminarUsuario() {
      ClientService.deleteClient(cedula);
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-user");
      });
    },
    onRowSelected(items) {
      this.selected = items;
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2);
    },
    unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2);
    },
  },
};
</script>

<style>
/* #lala {
  background-color: blue;
}
#lele{
  background-color: brown;
} */
#aaa {
  background-color: aqua;
}
</style>
