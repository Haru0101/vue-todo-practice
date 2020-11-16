<template>
    <div>
        <!-- <h1>TODO LIST</h1> -->
        <!-- 送信して違うページに行かないようにサブミットを制御 -->
        <form v-on:submit.prevent>
            <label for="name">名前</label><input id="name" type="text" v-model="newItem.name"><br>
            <label for="category">カテゴリ<input type="text" id="category" v-model="newItem.category"></label><br>
            <label for="deadline">締め切り<input type="text" id="deadline" v-model="newItem.deadline"></label><br>
            <button @click="addItem">Add</button>
            <!-- {{this.tasks}} -->
            <h2>未完了のタスク</h2>
            <ul>
                <li v-for="(task, index) in sortedTaskByStatus" :class="{'isDone': task.isDone}" :key="index"><input
                        type="checkbox" v-model="task.isDone">{{ task.name }} | {{ task.category }} | {{ task.deadline }}<button
                        @click="deleteItem(task.id)">Delete</button></li>
            </ul>
            {{this.tasks}}
            <!-- <h2>完了済みのタスク</h2>
            <ul>
                <li v-for="(task, index) in tasks" :class="{'isDone': task.isDone}" :key="index"><input type="checkbox"
                        v-model="task.isDone">{{ task["item"] }}<button @click="delePcommteItem(index)">Delete</button></li>
            </ul> -->
            <button @click="resetStorage()">リセット</button>
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
                tasks: [],
            }
        },
        mounted() {
            this.fetchItem();
        },
        updated() {
            this.updateStorage();
        },
        computed: {
            sortedTaskByStatus() {
                return this.tasks.slice().sort((a, b) => {
                    return (a.isDone < b.isDone) ? -1 : (a.isDone > b.isDone) ? 1 : 0;
                })
            }
        },
        methods: {
            addItem: function () {
                if (this.newItem.name == null) return;
                // オブジェクトをプッシュするときは変数に入れるとスッキリする
                let task = {
                    id: this.tasks.length + 1,
                    name: this.newItem.name,
                    category: this.newItem.category,
                    deadline: this.newItem.deadline,
                    isDone: false
                };

                this.tasks.push(task);
                console.log(this.tasks);
                // this.updateStorage();
                console.log(localStorage);
                this.newItem.name = null;
                this.newItem.category = null;
                this.newItem.deadline = null;
                this.fetchItem();
            },
            deleteItem: function (index) {
                console.log('deleteItem');
                // 第一引数：削除を開始する位置
                // 第二引数：削除する数
                console.log(index);
                this.tasks.splice(index, 1);
                // this.updateStorage();
            },
            fetchItem: function () {
                console.log('fetchItem');
                console.log(localStorage.length);
                // ローカルストレージからアイテムをフェッチする関数
                if(localStorage.length > 0){
                    this.tasks = JSON.parse(localStorage.tasks);
                }
            },
            resetStorage: function () {
                localStorage.clear();
                this.fetchItem();
            },
            updateStorage: function () {
                console.log('updateStorage');
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        }
    }
</script>

<style>
    .isDone {
        text-decoration: line-through;
    }
</style>