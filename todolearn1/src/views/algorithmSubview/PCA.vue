<template class="pca">
    <div class="pca">
        <v-container class="my-5">

            <v-row class="mb-3">
                <v-tooltip top>
                    <template v-slot:activator="{on}">
                        <v-btn small text color="grey" @click="sortBy('title')">
                            <v-icon small left>folder</v-icon>
                            <span class="caption text--lowercase">By project name</span>
                        </v-btn>
                    </template>
                    <span>Sort projects by project name</span>
                </v-tooltip>
                
                <v-tooltip top>
                    <template v-slot:activator="{on}">
                        <v-btn small text color="grey" @click="sortBy('person')">
                            <v-icon small left>person</v-icon>
                            <span class="caption text--lowercase">By person name</span>
                        </v-btn>
                    </template>
                    <span>Sort projects by person name</span>
                </v-tooltip>
            </v-row>

            <v-card flat v-for="project in projects" :key='project.id'>
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
                        <div class="float-right">
                            <v-chip right :class="`chip ${project.status} white--text caption my-2`" small v-text="project.status"></v-chip>
                        </div>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card>
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
    methods: {
        sortBy(prop){
            this.projects.sort((a,b) => a[prop] < b[prop] ? -1: 1)
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