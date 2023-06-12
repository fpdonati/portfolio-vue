<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: `
Hi, I'm Franco Donati, a full-stack developer and Industrial Engineer. I have been working as a web and software developer in the last year, mainly focused on web technologies and data base modelation.

I feel comfortable working with technologies like JavaScript, React, Node.js, TypeScript, Vue, Python, and many other technologies in the web ecosystem.

`,
        },
        {
          id: 2,
          bio: `I love programming and I'm passionate about innovative ideas and creative solutions, I like to know what's behind tech projects and I'm very interested in technologies for business aplication. Aside from work I love to travel and I'm a big fan of sports, mainly football and tennis.
`,
        },
        {
          id: 3,
          bio: `Currently, I'm working on personal project. Web aplication for managing appointments, clients, sales and online payments.`,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpeg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
