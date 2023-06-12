<template>
    <div class="app-advanced p-10">
  
      <form
        :action="FORM_ENDPOINT"
        @submit="handleSubmit"
        method="POST"
        class="w-1/2 mx-auto mt-5"
      >
        <div class="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
  
        <div class="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
  
        <div class="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
  
        <div class="mb-3 pt-0">
          <button
            class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
  
      <div v-if="status" class="text-center mt-10">
        <h2 class="text-2xl">Thanks you!</h2>
        <div class="text-md">{{ status }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  export default {
    setup() {
      const endpointUrl = 'https://public.herotofu.com/v1/f96e4c70-07e3-11ee-b0a7-9f000c4c1540';
      const FORM_ENDPOINT = ref(endpointUrl);
      const status = ref();
  
      function handleSubmit(e) {
        e.preventDefault();
  
        // Anything you need to inject dynamically
        const injectedData = {
          DYNAMIC_DATA_EXAMPLE: 123,
        };
  
        const inputs = e.target.elements;
        const data = {};
  
        inputs.forEach((inp) => {
          if (inp.name) {
            data[inp.name] = inp.value;
          }
        });
  
        Object.assign(data, injectedData);
  
        fetch(FORM_ENDPOINT.value, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            // It's likely a spam/bot request, so bypass it to validate via captcha
            if (response.status === 422) {
              Object.keys(injectedData).forEach((key) => {
                const el = document.createElement("input");
                el.type = "hidden";
                el.name = key;
                el.value = injectedData[key];
  
                e.target.appendChild(el);
              });
  
              e.target.submit();
              throw new Error("Please finish the captcha challenge");
            }
  
            if (response.status !== 200) {
              throw new Error(response.statusText);
            }
  
            return response.json();
          })
          .then(() => (status.value = "We'll be in touch soon."))
          .catch((err) => (status.value = err.toString()));
      }
  
      return { status, handleSubmit, FORM_ENDPOINT };
    }, // To Add Tailwind
    beforeCreate() {
      if (document) {
        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href =
          "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
  
        document.head.appendChild(stylesheet);
      }
    },
  };
  </script>
  