<template>
<div>
    <div>
        这是b.vue文件
    </div>
    <router-link to="/a">跳转到a组件</router-link>
    <button @click="toBCom"> 按钮跳转到a组件</button>
    <button @click="getArray"> 获取</button>
</div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        toBCom(){
            console.log(this.$router)
            //通过path&query跳转
            this.$router.push({path:'/a'})
        },
        getArray () {
            console.log(this.$route.params)
        }
    }
}
</script>