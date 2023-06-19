<script>
import Button from "../reusable/Button.vue";

import { ref } from "vue";
export default {
  components: { Button },

  setup() {
    const endpointUrl =
      "https://public.herotofu.com/v1/f96e4c70-07e3-11ee-b0a7-9f000c4c1540";
    const FORM_ENDPOINT = ref(endpointUrl);
    const status = ref();

    function handleSubmit(e) {
      e.preventDefault();

      // Anything you need to inject dynamically
      const injectedData = {
        DYNAMIC_DATA_EXAMPLE: 123,
      };

      const inputs = ["name", "email", "message"];
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
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Contact me
      </p>
      <form
        :action="FORM_ENDPOINT"
        @submit="handleSubmit"
        method="POST"
        class="font-general-regular space-y-7"
      >
        <div>
			<p
        class="font-general-medium text-primary-dark dark:text-primary-light text-l"
      >
        Name or Company
      </p>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            required
          />
        </div>
        <div>
			<p
        class="font-general-medium text-primary-dark dark:text-primary-light text-l"
      >
        Email
      </p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            required
          />
        </div>

        <div>
			<p
        class="font-general-medium text-primary-dark dark:text-primary-light text-l"
      >
        Message
      </p>
          <textarea
            type="text"
            placeholder="Message"
            name="message"
            class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            required
          />
        </div>

        <div>
          <Button
            title="Send Message"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
      <!-- <div v-if="status" class="text-center mt-10">
        <h2 class="text-2xl">Thanks you!</h2>
        <div class="text-md">{{ status }}</div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
