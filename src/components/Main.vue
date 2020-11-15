<template>
    <div>
        <!-- <h1>TODO LIST</h1> -->
        <!-- 送信して違うページに行かないようにサブミットを制御 -->
        <form v-on:submit.prevent>
            <input type="text" v-model="newItem"><button @click="addItem">Add</button>
            {{this.tasks}}
            <h2>未完了のタスク</h2>
            <ul>
                <li v-for="(task, index) in tasks" :class="{'isDone': task.isDone}" :key="index"><input type="checkbox"
                        v-model="task.isDone">{{ task["item"] }}<button @click="deleteItem(index)">Delete</button></li>
            </ul>
            <h2>完了済みのタスク</h2>
            <ul>
                <li v-for="(task, index) in tasks" :class="{'isDone': task.isDone}" :key="index"><input type="checkbox"
                        v-model="task.isDone">{{ task["item"] }}<button @click="delePcommteItem(index)">Delete</button></li>
            </ul>

        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newItem: null,
                tasks: [],
            }
        },
        mounted() {
            this.fetchItem();
        },
        methods: {
            addItem: function () {
                if (this.newItem == null) return;
                // オブジェクトをプッシュするときは変数に入れるとスッキリする
                var task = {
                    id: this.tasks.length + 1,
                    item: this.newItem,
                    isDone: false
                }
                
                this.tasks.push(task);
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
                console.log(localStorage);
                this.newItem = null;
            },
            deleteItem: function (index) {
                // 第一引数：削除を開始する位置
                // 第二引数：削除する数
                this.tasks.splice(index, 1);
            },
            fetchItem: function (){
                // ローカルストレージからアイテムをフェッチする関数
                this.tasks = JSON.parse(localStorage.tasks);
            }
        }
    }
</script>

<style>
.isDone {
    text-decoration: line-through;
}
</style>