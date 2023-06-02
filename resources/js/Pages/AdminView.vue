<template>
<!--    <div class="row">-->
<!--        <div class="col-2">-->
<!--            <div class="form-group">-->
<!--                <div-->
<!--                    class="btn-group-vertical buttons"-->
<!--                    role="group"-->
<!--                    aria-label="Basic example"-->
<!--                >-->
<!--                    <button class="btn btn-secondary" @click="add">Add</button>-->
<!--                    <button class="btn btn-secondary" @click="replace">Replace</button>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <input-->
<!--                        id="disabled"-->
<!--                        type="checkbox"-->
<!--                        v-model="enabled"-->
<!--                        class="form-check-input"-->
<!--                    />-->
<!--                    <label class="form-check-label" for="disabled">DnD enabled</label>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="col-6">-->
<!--            <h3>Draggable {{ draggingInfo }}</h3>-->

<!--            <draggable-->
<!--                :list="list"-->
<!--                :disabled="!enabled"-->
<!--                item-key="name"-->
<!--                class="list-group"-->
<!--                ghost-class="ghost"-->
<!--                :move="checkMove"-->
<!--                @start="dragging = true"-->
<!--                @end="dragging = false"-->
<!--            >-->
<!--                <template #item="{ element }">-->
<!--                    <div class="list-group-item" :class="{ 'not-draggable': !enabled }">-->
<!--                        {{ element.name }}-->
<!--                    </div>-->
<!--                </template>-->
<!--            </draggable>-->
<!--        </div>-->

<!--    </div>-->

    <DataTable
        :columns="list"
        ajax="/data.json"
        class="display"
    />


</template>

<script>
import draggable from "vuedraggable";
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

let id = 1;
export default {
    name: "AdminView",
    display: "Admin",
    order: 0,
    components: {
        draggable
    },
    data() {
        return {
            enabled: true,
            list: [
                { name: "John", id: 0 },
                { name: "Joao", id: 1 },
                { name: "Jean", id: 2 }
            ],
            dragging: false
        };
    },
    setup(){

        DataTable.use(DataTablesCore);
        const columns = [
            { data: 'name', title: 'Name' },
            { data: 'position', title: 'Position' },
            { data: 'office', title: 'Office' },
            { data: 'extn', title: 'Extension' },
            { data: 'start_date', title: 'Start date' },
            { data: 'salary', title: 'Salary' },
        ];

        return{
            columns,
        }

    },
    computed: {
        draggingInfo() {
            return this.dragging ? "under drag" : "";
        }
    },
    methods: {
        add: function() {
            this.list.push({ name: "Juan " + id, id: id++ });
        },
        replace: function() {
            this.list = [{ name: "Edgard", id: id++ }];
        },
        checkMove: function(e) {
            window.console.log("Future index: " + e.draggedContext.futureIndex);
        }
    }
};
</script>
<style scoped>
.buttons {
    margin-top: 35px;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.not-draggable {
    cursor: no-drop;
}
</style>
