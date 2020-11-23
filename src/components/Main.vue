<template>
    <div>
        <h1>TODO LIST</h1>
        <!-- 送信して違うページに行かないようにサブミットを制御 -->
        <form v-on:submit.prevent>
            <label for="name">名前</label><input id="name" type="text" v-model="newItem.name"><br>
            <label for="category">カテゴリ<input type="text" id="category" v-model="newItem.category"></label><br>
            <label for="deadline">締め切り<input type="text" id="deadline" v-model="newItem.deadline"></label><br>
            <button @click="addItem">Add</button>
            <h2>未完了のタスク</h2>
            <ul>
                <template v-for="(item, index) in items">
                    <li :class="{'isDone': item.isDone}" :key="index"><label><input type="checkbox"
                                v-model="item.isDone" @change="updateStorage()">{{ item.name }} |
                            {{ item.category }} |
                            {{ item.deadline }}</label></li>
                </template>
            </ul>
            <button v-on:click="deleteTodoChecked()">チェック済みの項目を削除する</button>
            <button @click="resetStorage()">localStorageリセット</button>
            <pre>{{$data}}</pre>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newItem: {
                    name: null,
                    category: null,
                    deadline: null
                },
                items: [],
            }
        },
        mounted() {
            this.fetchItem();
        },
        updated() {
            this.updateStorage();
        },
        methods: {
            addItem: function () {
                if (this.newItem.name == null) return;
                // オブジェクトをプッシュするときは変数に入れるとスッキリする
                let item = {
                    name: this.newItem.name,
                    category: this.newItem.category,
                    deadline: this.newItem.deadline,
                    isDone: false
                };

                this.items.push(item);
                console.log(this.items);
                // this.updateStorage();
                console.log(localStorage);
                this.newItem.name = null;
                this.newItem.category = null;
                this.newItem.deadline = null;
                this.updateStorage();
                // this.fetchItem();
            },
            fetchItem: function () {
                console.log('fetchItem');
                console.log(localStorage.length);
                // ローカルストレージからアイテムをフェッチする関数
                this.items = JSON.parse(localStorage.getItem('items'));
                if (!this.items) {
                    this.items = [];
                }
            },
            resetStorage: function () {
                localStorage.clear();
                this.fetchItem();
            },
            updateStorage: function () {
                console.log('updateStorage');
                localStorage.setItem('items', JSON.stringify(this.items));
            },
            deleteTodoChecked: function () {
                // isDoneがtrueのものだけがreturn trueされ、新たな配列として格納される
                this.items = this.items.filter(function (item) {
                    return item.isDone === false;
                });
            }
        }
    }
</script>

<style>
    .isDone {
        text-decoration: line-through;
    }
</style>