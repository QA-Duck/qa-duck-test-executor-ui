<template>
    <div v-if="this.modalStore.state.isShownDelete" class="modal">
        <div @click="this.modalStore.dispatch('closeDeleteModal')" class="modal__shadow"></div>
        <div class="modal__window delete__window">
            <div class="modal__content">
                <h2>Удалить шаблон ?</h2>
                <div class="tools">
                    <button @click="this.modalStore.dispatch('closeDeleteModal')" class="go gray">Отмена</button>
                    <button @click="this.deleteTemplate()" class="del">Удалить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { modalKey } from '@/store/modules/modal';
import { defineComponent } from 'vue';
import executionClient from '@/client/TestExecutionClient';
import { templateKey } from '@/store/modules/templates';

export default defineComponent({
    name: "ModalDeleteTemplate",

    data() {
        return {
            isShown: Boolean,
            modalStore: useStore(modalKey),
            templateStore: useStore(templateKey),
        }
    },

    methods: {
        deleteTemplate() {
            executionClient.remove(this.modalStore.state.deletedTemplateUUID).then(async(response) => {
                alert("шаблон успешно удален !");
                await this.templateStore.dispatch("getTemplates");
            })
        }
    }
})
</script>

<style>

    .delete__window {
        min-height: 50px !important;
    }

    .gray {
        background-color: rgb(80, 80, 80) !important;
    }

</style>