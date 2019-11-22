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
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                        <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                        
                        <v-menu offset-y max-width="280">
                            <template v-slot:activator="{ on }">
                                <v-text-field label="Due date" prepend-icon="event" :value="formattedDate" :rules="inputRules" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="due" ></v-date-picker>
                        </v-menu>
                        
                        <v-btn text class="success" @click="submit" :loading="loading">Add Project</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
            <!-- <span v-text="content"></span> -->
        
        </v-dialog>
    </div>
    
</template>

<script>
import {format, parseISO} from 'date-fns'
import db from '@/fb'

export default {
    data(){
        return {
            title:'',
            content: '',
            dialog: false,
            due: null,
            loading: false,
            inputRules: [
                v => v.length >=3 || 'Minimum length is 3 characters'
            ]
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                this.loading = true

                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(parseISO(this.due), 'do MMM yyyy'),
                    person: 'xixiWang',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(() => {
                    this.loading = false
                    this.dialog = false
                    this.$emit('projectAdded')
                })
            }
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