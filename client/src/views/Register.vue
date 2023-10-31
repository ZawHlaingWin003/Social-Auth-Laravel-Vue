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
            <form action="" class="space-y-4">
                <div class="form-group">
                    <label for="">Username</label>
                    <input
                        class="px-2 py-[10px] rounded-md w-full border-[1.5px] focus:outline-none focus:border-purple-800 transition disabled:bg-gray-200 disabled:border-gray-400 dark:disabled:bg-gray-600"
                    />
                </div>
                <div class="form-group">
                    <label for="">Email</label>
                    <input
                        class="px-2 py-[10px] rounded-md w-full border-[1.5px] focus:outline-none focus:border-purple-800 transition disabled:bg-gray-200 disabled:border-gray-400 dark:disabled:bg-gray-600"
                    />
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input
                        class="px-2 py-[10px] rounded-md w-full border-[1.5px] focus:outline-none focus:border-purple-800 transition disabled:bg-gray-200 disabled:border-gray-400 dark:disabled:bg-gray-600"
                    />
                </div>
                <div class="form-group">
                    <label for="">Confirm Password</label>
                    <input
                        class="px-2 py-[10px] rounded-md w-full border-[1.5px] focus:outline-none focus:border-purple-800 transition disabled:bg-gray-200 disabled:border-gray-400 dark:disabled:bg-gray-600"
                    />
                </div>
                <button
                    type="button"
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
</script>

<style scoped></style>
