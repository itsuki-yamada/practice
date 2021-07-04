<template>
  <div>
    <h1>Hello, world!</h1>
    <section>
      <h2>Exercise</h2>
      <ul>
        <li>Result: {{ result }}</li>
        <li>Message: {{ message }}</li>
      </ul>
      <button @click="executeButtonClick">run</button>
      <button @click="deleteButtonClick">delete</button>
    </section>
  </div>
</template>

<script>
module.exports = {
  data: () => {
    return {
      result: '',
      message: '',
    };
  },
  methods: {
    async executeButtonClick() {
      console.info(this);
      this.message = 'execute button clicked';
      axios.get('https://httpbin.org/uuid').then((response) => {
        console.info(this);
        this.result = response.data.uuid;
        this.message = 'data received';
      });
    },
    deleteButtonClick() {
      this.message = 'delete button clicked';
      this.data = '';
    },
  },
};
</script>
