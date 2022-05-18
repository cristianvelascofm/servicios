<template>
  <b-container>
    <div>
      <b-button v-b-modal.modal-user variant="primary">Usuarios</b-button>
      <b-modal
        id="modal-user"
        ref="modal"
        title="Usuario"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        hide-header-close
        no-close-on-esc
        no-close-on-backdrop
      >
        <b-container>
          <b-row id="lolo" xs-12>
            <b-col id="lala" color="primary">
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
                <b-button size="sm" @click="selectAllRows">Select all</b-button>
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
            </b-col>
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
                  label-for="second-last-name-input"
                  invalid-feedback="Segundo apellido es requerido"
                  :state="secondLastNameState"
                  class=""
                >
                  <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-input
                      id="username-input"
                      placeholder="Username"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </form>
            </b-col>
          </b-row>
        </b-container>
      </b-modal>
    </div>
  </b-container>
</template>

<script>
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
#lolo{
  background-color: aqua;
}
</style>
