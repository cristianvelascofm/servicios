<template>
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
        <b-form-group>
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="username-input"
              placeholder="Username"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameState: null,
      lastName: "",
      lastNameState: null,
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
  },
};
</script>