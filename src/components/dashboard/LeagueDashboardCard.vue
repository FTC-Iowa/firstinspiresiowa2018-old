<template>
    <md-card class="league-card">
        <md-dialog-confirm
            :md-active.sync="confirm"
            md-title="Are you sure you want to delete this league?"
            md-content="This will perminently delete this league.  Are you sure you want to do this?"
            md-confirm-text="Delete"
            md-cancel-text="Cancel"
            @md-confirm="deleteLeague" />
        <form class="md-layout">
            <md-card-header>
                <md-card-header-text>
                    {{league ? league.name : "Create New League" }}
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                <md-field>
                    <label>League Name</label>
                    <md-input v-if="editing" v-model="leagueForm.name" :disabled="!editing"/>
                    <md-input v-if="!editing" v-model="league.name" readonly/>                    
                </md-field>
                <md-field>
                    <label>Administrator</label>
                    <md-input v-if="editing" v-model="leagueForm.admin" :disabled="!editing" />
                    <md-input v-if="!editing" v-model="league.admin" readonly/>                   
                </md-field>
                <md-field>
                    <label>Email Address</label>
                    <md-input v-if="editing" v-model="leagueForm.email" :disabled="!editing" />
                    <md-input v-if="!editing" v-model="league.email" readonly/>                   
                </md-field>
                <md-field>
                    <label>Location</label>
                    <md-input v-if="editing" v-model="leagueForm.location" :disabled="!editing" />
                    <md-input v-if="!editing" v-model="league.location" readonly/>                   
                </md-field>
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />
            <md-card-actions>
                <md-button v-if="editing" class="md-primary" @click="cancelEdit()">Cancel</md-button>
                <md-button v-if="!editing" class="md-primary" @click="startEdit()" >Edit</md-button>
                <md-button v-if="!editing" class="md-primary" @click="confirm = true">Delete</md-button>
                <md-button v-if="editing" class="md-primary" @click="save()" :disabled="sending">{{create ? 'Create' : 'Save' }}</md-button>
            </md-card-actions>
        </form>
        <!-- {{JSON.stringify(league)}} -->
    </md-card>
</template>

<script>
export default {
    props: [
        'league',
        'create'
    ],
    data: () => ({
        editing: false,
        sending: false,
        confirm: false,
        leagueForm: {
            name: "",
            admin: "",
            email: "",
            location: ""
        },
        teams: []
    }),
    firestore() {
        if(this.league)
            return {
                teams: this.$db.collection('teams').where("league", "==", this.league.id)
            }
        else 
            return {}
    },
    methods: {
        startEdit() {
            if(this.league) {
                this.leagueForm.name = this.league.name;
                this.leagueForm.admin = this.league.admin;
                this.leagueForm.email = this.league.email;
                this.leagueForm.location = this.league.location;
            }
            this.editing = true;
        },
        cancelEdit() {
            if (this.create) {
                this.clearForm()
            } else {
                this.editing = false;
            }
        },
        clearForm() {
            console.log("clear form")
            this.leagueForm.name = "";
            this.leagueForm.admin = "";
            this.leagueForm.email = "";
            this.leagueForm.location = "";
        },
        save() {
            this.sending = true;

            if( this.league && this.league.id ) {
                var doc = this.$db.collection('leagues').doc(this.league.id);
                this.editing = false;
                doc.set(this.leagueForm, {merge: true})
                    .then(() => {
                        console.log("League successfully saved");
                        this.sending = false;
                        if(this.create) {
                            this.clearForm();
                        } else {
                            this.editing = false;
                        }
                    })
                    .catch((error) => console.error("Error writing league: ", error));
            } else {
                this.$db.collection('leagues').add(this.leagueForm)
                    .then((docRef) => {
                        console.log("League successfully created: ", docRef.id);
                        if(this.create) {
                            this.clearForm();
                        } else {
                            this.editing = false;
                        }
                    })
                    .catch((error) => console.error("Error writing league: ", error));
            }

            //this.$db.collection('leagues')
        },
        deleteLeague() {
            this.$db.collection('leagues').doc(this.league.id).delete()
                .then(() => {
                    console.log('League successfully deleted');
                })
                .catch((error) => {
                    console.log('Error deleting league: ', error);
                })
        }
    },
    created() {
        if(this.create) {
            this.editing = true;
        }
    }

}
</script>

<style scoped>

.md-card-header{
    background-color: #ddd;
    width: 100%;
    font-weight: bold;
}

.league-card {
    width: 260px;
    margin: 6px;
    display: inline-block;
    vertical-align: top;   
}

@media (max-width: 700px) {
    .league-card {
        width: 100%;
    }
}
</style>
