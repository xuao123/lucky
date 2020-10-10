<template>
<div>
    <div>
        这是a.vue文件
    </div>
    <router-link to="/b">跳转到b组件</router-link>
    <button @click="toBCom"> 按钮跳转到b组件</button>

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
            // this.$router.push({path:'/b',query:{name:'tom',age:'10',id:'123',height:'100'}})
            //通过name和params跳转
            this.$router.push({name:'b',params: {newName:'bob',newAge:'20'}})
        }
    }
}
</script>