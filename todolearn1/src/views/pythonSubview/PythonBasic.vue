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
export default {
    data(){
        return {
            projects: [
                { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Create a community forum 22222', person: 'The Net Ninja', due: '22th Jan 2010', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            ]
        }
    },
    computed: {
        myProjects(){
            return this.projects.filter(project => {
                return project.person === 'The Net Ninja'
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
