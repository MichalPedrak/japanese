<template>
    <div class="my-4 groups fadeIn d-flex justify-content-between flex-wrap">
        <h3 class="w-75 text-start">{{ group.title }}</h3>

        <button v-if="!hasCards" class="w-25 " @click.prevent="getCards(group)">Pokaż fiszki</button>
        <button v-else class="w-25 " @click.prevent="hideCards(group)">Schowaj fiszki</button>

        <div v-if="hasCards" class="w-100 fadeIn" >
            <form  class="w-100 my-5">

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <div class="form-floating">
                                <input v-model="cardData.content" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Pojęcie</label>
                            </div>
                            <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <div class="form-floating">
                                <input v-model="cardData.content_example" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Pojęcie przykład</label>
                            </div>

                            <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <div class="form-floating">
                                <input v-model="cardData.definition" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Definicja</label>
                            </div>
                            <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <div class="form-floating">
                                <input v-model="cardData.definition_example" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Definicja przykład</label>
                            </div>

                            <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>
                    </div>
                </div>

                <button @click.prevent="addCard(group)" type="submit" class="btn btn-primary btn-block mb-4">Dodaj fiszkę</button>
            </form>

            <div class="cards flex-wrap fadeIn" v-for="card in group.cards" :key="card['id']">

                <div class="edit-card d-flex flex-wrap w-100"  v-if="editedCardId === card.id">


                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <div class="form-floating">
                                    <input v-model="card.content" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Pojęcie</label>
                                </div>
                                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <div class="form-floating">
                                    <input v-model="card.content_example" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Pojęcie przykład</label>
                                </div>

                                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <div class="form-floating">
                                    <input v-model="card.definition" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Definicja</label>
                                </div>
                                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <div class="form-floating">
                                    <input v-model="card.definition_example" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Definicja przykład</label>
                                </div>

                                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>
                        </div>
                    </div>

                    <div class="w-20 d-flex gap-3 card-buttons">
                        <button class="w-50 btn btn-danger" @click.prevent="toggleEdit">Odrzuć</button>
                        <button type="submit" class="w-50 btn btn-success"  @click.prevent="editCard(card)" >Zapisz</button>
                    </div>


                </div>

                <div class="normal-card d-flex flex-wrap w-100" v-else>

                    <div class="row">
                        <div class="col">
                            <div class="form-outline">
                                <div class="form-floating">
                                    <input disabled v-model="card.content" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Pojęcie</label>
                                </div>
                                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <div class="form-floating">
                                    <input disabled v-model="card.content_example" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Pojęcie przykład</label>
                                </div>

                                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-outline">
                                <div class="form-floating">
                                    <input disabled v-model="card.definition" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Definicja</label>
                                </div>
                                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <div class="form-floating">
                                    <input disabled v-model="card.definition_example" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Definicja przykład</label>
                                </div>

                                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>
                        </div>
                    </div>
                    <div class="w-20 d-flex gap-3 card-buttons">
                        <button class="w-50 btn btn-info text-white" @click.prevent="toggleEdit(card.id)">Edytuj</button>
                        <button class="w-50 btn btn-danger" @click.prevent="deleteCard(group, card.id)">Usuń</button>
                    </div>

                </div>

            </div>
        </div>
        <div>

        </div>



    </div>
</template>

<script>
import {reactive, ref} from "vue";

export default {
    name: "Group",
    props:{
        group: Object,
    },
    setup() {
        let cardData = reactive({
            content: '',
            group_id: '',
            content_example: '',
            definition: '',
            definition_example: '',

        })
        let editedCardId = ref(null)
        let hasCards = ref(false)

        const getCards = async (group) => {


            const response = await fetch('http://localhost:8000/api/cards/' + group.id, {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            })

            group.cards = await response.json();

            console.log(group.id)

            hasCards.value = true;

        };
        const hideCards = async (group) => {

            hasCards.value = false;

        };
        const addCard = async (group) => {

            cardData.group_id = group.id

            console.log(cardData)

            await fetch('http://localhost:8000/api/cards/store', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify(cardData)
            })

            getCards(group)

        };
        const deleteCard = async (group, id) => {

            await fetch('http://localhost:8000/api/cards/destroy/' + id, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',

            })
            getCards(group);
        };
        const editCard = async (card) => {

            await fetch('http://localhost:8000/api/cards/update/' + card.id, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify(card)
            })

            editedCardId.value = null;

            // getCards();
        };
        const toggleEdit =  (id) => {
            if(id){
                editedCardId.value = id;
            } else {
                editedCardId.value = null
            }

        };

        return {
            getCards,
            hideCards,
            addCard,
            deleteCard,
            editCard,
            toggleEdit,
            cardData,
            editedCardId,
            hasCards
        }
    }
}


</script>

<style scoped>

</style>

