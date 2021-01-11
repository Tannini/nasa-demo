<template>
    <div>
        <v-app>
            <v-img :src="apod.url" min-height="100%">
                <v-card width="400px" class="mx-auto my-5">
                    <v-card-title class="pb-0"></v-card-title>
                    <v-card-text></v-card-text>
                    <v-spacer></v-spacer>

                </v-card>
            </v-img>
        </v-app>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return { 
                rover: '',
                sun: '',
                items: []
            }
        },
        computed: {
            ...mapState(['apod']),
        },
        methods: {
            ...mapActions(['getApod', 'getPhotoMars']),
            search() {
                this.getPhotoMars(this.sun, this.rover) 
            }
        },
        created() {
            this.getApod();
        },
    }
                    
</script>