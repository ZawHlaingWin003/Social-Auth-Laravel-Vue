<template>
    <div
        class="px-4 pt-4 pb-8 bg-white border rounded shadow lg:mx-auto lg:w-1/2 md:px-10"
    >
        <div class="space-y-8 text-center card-header">
            <div class="space-y-4">
                <h2 class="text-xl font-bold lg:text-2xl text-primary-500">
                    Register Here
                </h2>
            </div>
            <div class="space-y-8">
                <div
                    class="space-y-4 social-buttons md:space-y-0 md:flex md:gap-4 lg:gap-8"
                >
                    <button
                        class="flex items-center justify-center w-full gap-4 p-2 border rounded-md md:px-0 hover:bg-light dark:hover:bg-soft-dark dark:border-soft-dark"
                    >
                        <IconGoogle />
                        <span> Sign up with Google </span>
                    </button>
                    <button
                        class="flex items-center justify-center w-full gap-4 p-2 border rounded-md md:px-0 hover:bg-light dark:hover:bg-soft-dark dark:border-soft-dark"
                    >
                        <IconFacebook />
                        Sign up with Facebook
                    </button>
                </div>
                <div class="flex items-center gap-4 text-center">
                    <div
                        class="w-full h-[2px] bg-primary-700 bg-opacity-50"
                    ></div>
                    <p class="whitespace-nowrap">Or Continue With</p>
                    <div
                        class="w-full h-[2px] bg-primary-700 bg-opacity-50"
                    ></div>
                </div>
            </div>
        </div>
        <div class="py-8 card-body">
            <div class="p-4 errors">
                <ul class="space-y-2">
                    <li
                        v-for="error in v$.$errors"
                        :key="error.$uid"
                        class="p-2 bg-red-200 border border-red-300 rounded-sm"
                    >
                        <span class="text-sm text-red-500">
                            {{ error.$property }} - {{ error.$message }}
                        </span>
                    </li>
                </ul>
            </div>
            <form @submit.prevent="register" class="space-y-4">
                <div class="form-group">
                    <label for="">Username</label>
                    <input
                        class="px-2 py-[10px] rounded-md w-full border-[1.5px] focus:outline-none focus:border-purple-800 transition disabled:bg-gray-200 disabled:border-gray-400 dark:disabled:bg-gray-600"
                        v-model="user.name"
                    />
                    <span
                        v-for="error in v$.name.$errors"
                        :key="error.$uid"
                        class="block text-sm text-red-500"
                    >
                        {{ error.$message }}
                    </span>
                </div>
                <div class="form-group">
                    <label for="">Email</label>
                    <input
                        class="px-2 py-[10px] rounded-md w-full border-[1.5px] focus:outline-none focus:border-purple-800 transition disabled:bg-gray-200 disabled:border-gray-400 dark:disabled:bg-gray-600"
                        v-model="user.email"
                    />
                    <span
                        v-for="error in v$.email.$errors"
                        :key="error.$uid"
                        class="block text-sm text-red-500"
                    >
                        {{ error.$message }}
                    </span>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input
                        class="px-2 py-[10px] rounded-md w-full border-[1.5px] focus:outline-none focus:border-purple-800 transition disabled:bg-gray-200 disabled:border-gray-400 dark:disabled:bg-gray-600"
                        v-model="user.password"
                    />
                    <span
                        v-for="error in v$.password.$errors"
                        :key="error.$uid"
                        class="block text-sm text-red-500"
                    >
                        {{ error.$message }}
                    </span>
                </div>
                <div class="form-group">
                    <label for="">Confirm Password</label>
                    <input
                        class="px-2 py-[10px] rounded-md w-full border-[1.5px] focus:outline-none focus:border-purple-800 transition disabled:bg-gray-200 disabled:border-gray-400 dark:disabled:bg-gray-600"
                        v-model="user.password_confirmation"
                    />
                    <!-- <span
                        v-for="error in v$.password_confirmation.$errors"
                        :key="error.$uid"
                        class="block text-sm text-red-500"
                    >
                        {{ error.$message }}
                    </span> -->
                    <span
                        v-if="v$.password_confirmation.$errors.length"
                        class="block text-sm text-red-500"
                    >
                        {{ v$.password_confirmation.$errors[0].$message }}
                    </span>
                </div>
                <div class="form-group">
                    <div>
                        <input
                            type="checkbox"
                            class="me-2"
                            v-model="user.terms_agree"
                        />
                        <label for="">Agree to terms & conditions</label>
                    </div>
                    <span
                        v-for="error in v$.terms_agree.$errors"
                        :key="error.$uid"
                        class="block text-sm text-red-500"
                    >
                        {{ error.$message }}
                    </span>
                </div>
                <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Register
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconGoogle from "@/components/icons/IconGoogle.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
    required,
    email,
    minLength,
    maxLength,
    sameAs,
    helpers,
} from "@vuelidate/validators";

const user = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms_agree: false,
});

// const rules = {
//     name: { required },
//     email: { required, email },
//     password: { required, minLength: minLength(8), maxLength: maxLength(20) },
//     password_confirmation: { required, sameAs: sameAs(user.value.password) },
//     terms_agree: { required },
// };

const mustBeTrue = (value: boolean) => {
    return value == true;
};
const rules = computed(() => {
    return {
        name: {
            required: helpers.withMessage(
                "Please fill the name field!",
                required
            ),
        },
        email: { required, email },
        password: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(20),
        },
        password_confirmation: {
            required,
            sameAs: sameAs(user.value.password),
        },
        terms_agree: {
            required,
            mustBeTrue: helpers.withMessage(
                "You must agree to terms!",
                mustBeTrue
            ),
        },
    };
});

const v$ = useVuelidate(rules, user);

async function register() {
    const isValidated = await v$.value.$validate();

    if (isValidated) {
        alert("Success :)");
    }
}
</script>

<style scoped></style>
