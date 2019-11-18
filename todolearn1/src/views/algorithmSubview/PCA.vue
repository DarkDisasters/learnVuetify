<template class="pca">
    <div class="pca">
        <v-container class="my-5">
            <v-card flat v-for="project in projects" :key='project.title'>
                <!-- 建立了类中含有 pa-3类 class=project 类中含有project.status -->
                <v-row :class="`pa-3 project ${project.status}`">
                    <v-col xs = '12' sm='12' md="6">
                        <div class="caption grey--text">Project title</div>
                        <div v-text="project.title"></div>
                    </v-col>
                    <v-col xs="6" sm="4" md="2">
                        <div class="caption grey--text">Persion</div>
                        <div v-text="project.person"></div>
                    </v-col>
                    <v-col xs="6" sm="4" md="2">
                        <div class="caption grey--text">Due by</div>
                        <div>{{project.due}}</div>
                    </v-col>
                    <v-col xs="2" sm="4" md="2">
                        <div class="right">
                            <v-chip :class="`chip ${project.status} white--text caption my-2`" small v-text="project.status"></v-chip>
                        </div>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card>
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.project.complete {
    border-left: 4px solid #3cd1c2
}
.project.ongoing {
    border-left: 4px solid orange
}
.project.overdue {
    border-left: 4px solid tomato
}

span.v-chip.chip.complete{
    background-color: #3cd1c2
}
span.v-chip.chip.ongoing{
    background-color: orange
}
span.v-chip.chip.overdue{
    background-color: tomato
}
</style>