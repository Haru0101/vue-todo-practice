<template>
    <div>
        <h1>TODO LIST</h1>
        <!-- 送信して違うページに行かないようにサブミットを制御 -->
        <form v-on:submit.prevent>
            <input type="text" v-model="newItem"><button @click="addItem">Add</button>
            <ul>
                <li v-for="(task, index) in tasks" :class="{'isDone': task.isDone}" :key="index"><input type="checkbox"
                        v-model="task.isDone">{{ task.item }}<button @click="deleteItem(index)">Delete</button></li>
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
        methods: {
            addItem: function () {
                if (this.newItem == null) return;
                // オブジェクトをプッシュするときは変数に入れるとスッキリする
                var task = {
                    item: this.newItem,
                    isDone: false
                }
                this.tasks.push(task);
                this.newItem = null;
            },
            deleteItem: function (index) {
                // 第一引数：削除を開始する位置
                // 第二引数：削除する数
                this.tasks.splice(index, 1);
            }
        }
    }
</script>

<style>

</style>