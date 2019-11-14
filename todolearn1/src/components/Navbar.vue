<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">XiXi</span>
                <span>ShuaiQi</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text color='grey'>
                <span>Sign out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="indigo">
            <v-list>
                <v-list-group v-for='item in items' :key='item.title' v-model='item.active' router :to="item.route">
                    <!-- 将子组件的信息传给父组件使用，这些属性会被挂在父组件 -->
                    <!-- 作用域插槽通过v-slot:xxx="slotProps"的slotProps来获取子组件传出的属性 -->
                    <!-- v-slot属性只能在<template>上使用，但在【只有默认插槽时】可以在组件标签上使用 -->
                    <template v-slot:activator>
                        <v-list-item-action>
                            <v-icon class="white--text">{{item.icons}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="white--text" v-text='item.title'></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="subItem in item.items" :key="subItem.title" router :to="subItem.route">
                        <v-list-item-content>
                            <v-list-item-title class="white--text" v-text="subItem.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
export default {
    data(){
        return {
            'drawer': false,
            items:[
                {
                    icons: 'language', title: 'Python', route: '/python',
                    items:[
                        {title: 'Python Basic', route: '/python/basic'},
                        {title: 'Tornado', route: '/python/tornado'},
                    ]
                },
                {
                    icons: 'folder', title: 'Threejs', route: '/threejs',
                    items:[
                        {title: 'Threejs Basic', route: '/threejs/basic'},
                        {title: 'Shadow', route: '/threejs/shadow'},
                    ]
                },
                {
                    icons: 'person', title: 'Algorithm', route: '/algorithm',
                    items:[
                        {title: 'PCA', route: '/algorithm/pca'},
                        {title: 'DCW', route: '/algorithm/dcw'},
                    ]
                }
            ]
        }
    }
}
</script>