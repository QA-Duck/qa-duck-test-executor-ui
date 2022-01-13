<template>
    <div v-if="this.modalStore.state.isShown" class="modal">
        <div @click="this.closeModal()" class="modal__shadow"></div>
        
        <div class="modal__window">
            <div class="modal__content">
                <h2>Создание шаблона</h2>
                
                <p class="field__description">Наименование шаблона</p>
                <input class="field" name="name" type="text" v-model="name">

                <p class="field__description">Ссылка на проект в Git hub</p>
                <input class="field" name="gitProject" type="text" v-model="gitProject">
                
                <p class="field__description">Тип запускаемого проекта</p>
                <select class="field" name="testType" v-model="testType">
                    <option value="KARATE">karate</option>
                    <option value="JUNIT">junit</option>
                </select>

                <p class="field__description">Переменные окружения</p>
                <div class="environment__window">

                    <div v-for="(field, index) in this.environmentFields" :key="index" class="environment__field">
                        <input @change="this.setEnvironmentName(index, field.name)" v-model="field.name" :name="index" type="text">
                        <input @change="this.setEnvironmentValue(index, field.value)" v-model="field.value" :name="index" type="text">
                    </div>
                   
                </div>
                <div class="environment__btn">
                    <button @click="addEnvironmentField" class="environment__add-btn">Добавить переменную</button>
                    <button @click="delEnvironmentField" class="environment__add-btn">Удалить переменную</button>
                </div>
            </div>

            <div class="modal__btn">
                <button @click="createTemplate" class="create__template_btn">Создать</button>
            </div>
        </div>

    </div>
</template>

<script>
import { useStore } from 'vuex'
import { modalKey } from '@/store/modules/modal';
import { defineComponent } from 'vue';
import { templateKey } from '@/store/modules/templates';

export default defineComponent({
    name: "ModalCreateTemplate",

    data() {
        return {
            isShown: Boolean,
            modalStore: useStore(modalKey),
            templateStore: useStore(templateKey),
            environmentFields: [],
            gitProject: "",
            name: "",
            testType: "",
        }
    },

    methods: {
        closeModal() {
            this.modalStore.dispatch('closeModal');
            this.isShown = this.modalStore.state.isShown;
        },

        addEnvironmentField() {
            this.environmentFields.push({ name: "", value: "" })
        },

        delEnvironmentField() {
            this.environmentFields.pop();
        },

        setEnvironmentName(index, name) {
            this.environmentFields[index].name = name;
        },

        setEnvironmentValue(index, value) {
            this.environmentFields[index].value = value;
        },

        async createTemplate() {

            let env = {};

            this.environmentFields.forEach((environmentItem) => {
                if (environmentItem.name != "" && environmentItem.value != "") {
                    env[environmentItem.name] = environmentItem.value;
                }
            });

            const tempalte = {
                name: this.name,
                gitProject: this.gitProject,
                testType: this.testType,
                environments: env
            }

            await this.templateStore.dispatch('addTemplate', tempalte)
            await this.templateStore.dispatch('getTemplates');
            this.closeModal();
            this.name = "";
            this.gitProject = "";
            this.testType = "";
            this.environmentFields = [];
        }
    }
})
</script>

<style>

.modal {
   
    margin: auto;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0; left: 0; bottom: 0; right: 0;
}

.modal__shadow {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.3);
}

.modal__window {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    min-height: 600px;
    background-color: white;
    z-index: 1;
    padding: 40px 40px 40px 40px;
}

.modal__content {
    display: flex;
    flex-direction: column;
}

.create__template_btn {
    cursor: pointer;
    margin-top: 40px;
    width: 100%;
    padding: 10px;
    background-color: #64925d;
    border:none;
    color:white;
    border-radius: 5px;
    font-size: 16px;
}

.field__description {
    text-align: left;
    margin-bottom: 10px;  
    margin-top: 20px;
}

.field {
    font-size: 16px;
    border:1px solid rgb(199, 199, 199);
    padding: 10px;
    margin-bottom: 10px;
}

.environment__window {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    overflow-x: hidden;
    overflow-y: scroll;
}

.environment__window::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
}

.environment__window::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(200, 200, 200, 0.3);
}

.environment__window::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #a0a0a0;
    outline: none;
}

.environment__btn {
    display: flex;
    justify-content: space-between;
}

.environment__add-btn {
    margin-top: 20px;
    border:none;
    font-size: 14px;
    width: 190px;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
}

.environment__add-btn:hover {
   background-color: #dfdfdf;
}

.environment__field {
    display: flex;
}

.environment__field input {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #EFEFEF;
    margin: 5px;
    outline: none;
}

</style>