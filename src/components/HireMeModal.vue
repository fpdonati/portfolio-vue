<script>
import feather from "feather-icons";
import { ref } from "vue";
import Button from "./reusable/Button.vue";
import FormInput from "./reusable/FormInput.vue";
import FormTextarea from "./reusable/FormTextarea.vue";
export default {
  props: ["showModal", "modal", "categories"],
  components: { Button, FormInput, FormTextarea },
  data() {
    return {};
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
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

      const inputs = ["name", "email", "message", "project"];
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
  methods: {},
};
</script>

<template>
  <transition name="fade">
    <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
      <!-- Modal body background as backdrop -->
      <div
        v-show="modal"
        @click="showModal()"
        class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
      ></div>
      <!-- Modal content -->
      <main class="flex flex-col items-center justify-center h-full w-full">
        <transition name="fade-up-down">
          <div v-show="modal" class="modal-wrapper flex items-center z-30">
            <div
              class="modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
            >
              <div
                class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
              >
                <h5 class="text-primary-dark dark:text-primary-light text-xl">
                  Please leave details of your project
                </h5>
                <button
                  class="px-4 text-primary-dark dark:text-primary-light"
                  @click="showModal()"
                >
                  <i data-feather="x"></i>
                </button>
              </div>
              <div class="modal-body p-5 w-full h-full">
                <form
                  :action="FORM_ENDPOINT"
                  @submit="handleSubmit"
                  method="POST"
                  class="max-w-xl m-4 text-left"
                >
                  <FormInput label="Name" inputIdentifier="name" class="mb-2" />
                  <FormInput
                    label="Email"
                    inputIdentifier="email"
                    inputType="email"
                  />

                  <div class="mt-6 mb-4">
                    <label
                      class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                      for="project"
                      >Project Type</label
                    >
                    <select
                      class="w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="project"
                      name="project"
                      type="text"
                      required=""
                      aria-label="Project Category"
                    >
                      <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.value"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                  </div>

                  <FormTextarea
                    label="Details"
                    name="message"
                    textareaIdentifier="details"
                  />

                  <div class="mt-7 pb-4 sm:pb-1">
                    <Button
                      title="Send Message"
                      class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
                      type="submit"
                      aria-label="Send Message"
                    />
                  </div>
                </form>
              </div>
              <div
                class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"
              >
                <Button
                  title="Close"
                  class="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                  @click="showModal()"
                  aria-label="Close Modal"
                />
              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<style scoped>
.modal-body {
  max-height: 570px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
