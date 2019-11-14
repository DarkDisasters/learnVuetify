<template>
    <div class="home">
        <h1>This is homepage</h1>
        <v-btn class="pink white--text">Click me</v-btn><br><br>
        <!--
            dark将背景颜色设置为dark，字体颜色设置为white，后面的color属性把背景颜色设置为pink，没有改变字体颜色，depressed去除shadow 
            
        -->
        <v-btn depressed dark color='pink'>click me</v-btn><br><br>
        <v-btn text color='pink'>click me</v-btn><br><br>

        <v-btn depressed class="pink white--text">
            <v-icon left>email</v-icon>
            <span>email me</span>
        </v-btn>

        <v-btn depressed small class="pink white--text">
            <span>email me</span>
            <v-icon right small>email</v-icon>
        </v-btn><br><br>

        <v-btn fab depressed small dark color="purple">
            <v-icon>favorite</v-icon>
        </v-btn>
    
    </div>
</template>

<script>

</script>
