<script lang="ts">
import { reactive } from 'vue';
export default {
    setup() {
        // const newItem = reactive<{ NewItem: Object }>([{name: null},{category: null}, {deadline: null}]);
        const newItem = reactive({
            name: "",
            category: "",
            deadline: ""
        });
        let items: object[] = reactive([]);
        let completedItems = reactive([]);

        const addItem = () => {
            if (newItem.name == null) return;
            // オブジェクトをプッシュするときは変数に入れるとスッキリする
            let item: object = {
                name: newItem.name,
                category: newItem.category,
                deadline: newItem.deadline,
                isDone: false
            };

            items.push(item);
            console.log(items);
            // updateStorage();
            console.log(localStorage);
            newItem.name = "";
            newItem.category = "";
            newItem.deadline = "";
            updateStorage();
            // fetchItem();
        }

        const fetchItem = () => {
            console.log('fetchItem');
            console.log(localStorage.length);
            // ローカルストレージからアイテムをフェッチする関数
            items = JSON.parse(localStorage['items']);
            completedItems = JSON.parse(localStorage['completedItems']);
            if (!items) {
                items = [];
            }
            if (!completedItems) {
                completedItems = [];
            }
        }

        const resetStorage = () => {
            localStorage.clear();
            fetchItem();
        }

        const updateStorage = () => {
            console.log('updateStorage');
            localStorage.setItem('items', JSON.stringify(items));
            localStorage.setItem('completedItems', JSON.stringify(completedItems));
        }

        const deleteItemChecked = () => {
            // isDoneがtrueのものだけがreturn trueされ、新たな配列として格納される
            items = items.filter(function (item) {
                return item.isDone === false;
            });
        }

        const completeItem = () => {
            let completedItems = items.filter(function (item) {
                return item.isDone === true;
            });
            completedItems.push(...completedItems);
            deleteItemChecked();
        }

        return {newItem, items, completedItems, addItem, fetchItem,resetStorage, updateStorage, deleteItemChecked, completeItem};

    },
}
</script>

<style>
    .isDone {
        text-decoration: line-through;
    }
</style>
<template>
    <div>
        <h1>TODO LIST</h1>
        <!-- 送信して違うページに行かないようにサブミットを制御 -->
        <form v-on:submit.prevent>
            <label for="name">名前</label><input id="name" type="text" v-model="newItem.name">
            <br>
            <label for="category">カテゴリ<input type="text" id="category" v-model="newItem.category"></label>
            <br>
            <label for="deadline">締め切り<input type="text" id="deadline" v-model="newItem.deadline"></label>
            <br>
            <button @click="addItem">Add</button>
            <h2>未完了のタスク</h2>
            <ul>
                <template v-for="(item, index) in items" :key="index">
                    <li :class="{'isDone': item.isDone}"><label><input type="checkbox" v-model="item.isDone"
                                @change="updateStorage(); completeItem()">{{ item.name }} |
                            {{ item.category }} |
                            {{ item.deadline }}</label></li>
                </template>
            </ul>
            <button v-on:click="deleteItemChecked()">チェック済みの項目を削除する</button>
            <button @click="resetStorage()">localStorageリセット</button>
            <pre>{{$data}}</pre>

            <h2>完了済みのタスク</h2>
            <ul>
                <template v-for="(completedItem, index) in completedItems" :key="index">
                    <li :class="{'isDone': completedItem.isDone}"><label><input type="checkbox"
                                v-model="completedItem.isDone" @change="updateStorage()">{{ completedItem.name }} |
                            {{ completedItem.category }} |
                            {{ completedItem.deadline }}</label></li>
                </template>
            </ul>

        </form>
    </div>
</template>
