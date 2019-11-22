<template >
    <div class="pythonclass">
        <h1 class="subheading grey--text">Python Basic</h1>

        <!-- v-container能使得里面的内容始终保持在中间central column，就算缩放浏览器的界面，如果加上属性fluid就可以取消这个效果 -->
        <!-- my-5是指在y方向也就是top和bottom加上margin，且宽度为等级5 -->
        <v-container class='my-5'>
            <v-expansion-panels>
                <v-expansion-panel  v-for="project in myProjects" :key="project.title">
                    <v-expansion-panel-header class="mx-4">{{project.title}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-card elevation=0>
                            <v-card-text class="grey--text">
                                <div class="font-weight-bold">due by {{project.due}}</div>
                                <div>{{project.content}}</div>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            
        </v-container>
    </div>
    

</template>


<script>
import db from '@/fb'
export default {
    data(){
        return {
            projects: []
        }
    },
    computed: {
        myProjects(){
            return this.projects.filter(project => {
                return project.person === 'xixiWang'
            })
        }
    },
    created() {
        db.collection('projects').onSnapshot(res => {
            const changes = res.docChanges()

            changes.forEach(change => {
                if (change.type === 'added'){
                    this.projects.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    })
                }
            })
        })
    },
}
</script>

<style lang="scss" scoped>

</style>
