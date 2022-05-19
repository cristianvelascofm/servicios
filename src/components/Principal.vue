<template>
  <b-container>
    <div>
      <b-button v-b-modal.modal-user variant="primary">Usuarios</b-button>
      <b-modal
        id="modal-user"
        ref="modal"
        title="Usuarios"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        header-bg-variant="light"
        header-text-variant="dark"
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
                      :state="lastNameState"
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
                        v-model="fistLastName"
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
                      label="Usuario"
                      label-for="user-input"
                      invalid-feedback="Usuario es requerido"
                      :state="userState"
                    >
                      <b-form-input
                        id="user-input"
                        v-model="user"
                        :state="userState"
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
                      <b-row >
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
                        <b-col class="col-sm-6" >
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
      </b-modal>
    </div>
  </b-container>
</template>

<script>
import { ClientesService } from '../services/Client';
export default {
  data() {
    return {
      name: "",
      nameState: null,
      lastName: "",
      lastNameState: null,
      modes: ["multi", "single", "range"],
      fields: ["selected", "isActive", "age", "first_name", "last_name"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
      selectMode: "multi",
      selected: [],
      build: null,
      builds: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      rol: null,
      rols: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      state: null,
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
#aaa{
  background-color: aqua;
}
</style>
