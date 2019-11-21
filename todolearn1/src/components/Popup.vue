<template>
    <div>
        <v-btn text class="success" @click.stop="dialog=true">
                Add new projects
        </v-btn>
        <v-dialog max-width="600" v-model="dialog">
        
            <v-card>
                <v-card-title>
                    <h2>xixi add projects</h2>
                </v-card-title>

                <v-card-text>
                    <v-form class="px-3">
                        <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                        <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>
                        
                        <v-menu offset-y max-width="280">
                            <template v-slot:activator="{ on }">
                                <v-text-field label="Due date" prepend-icon="event" :value="formattedDate" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>
                        
                        <v-btn text class="success" @click="submit">Add Project</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
            <!-- <span v-text="content"></span> -->
        
        </v-dialog>
    </div>
    
</template>

<script>
import {format, parseISO} from 'date-fns'

export default {
    data(){
        return {
            title:'',
            content: '',
            dialog: false,
            due: null 
        }
    },
    methods:{
        submit(){
            // console.log('title',this.title,'    ','content',this.content)
        }
    },
    computed: {
        formattedDate(){
            return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
        }
    },
}
</script>