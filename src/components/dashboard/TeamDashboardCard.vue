<template>
    <md-card class="team-dashboard-card">
        <md-dialog-confirm
            :md-active.sync="confirm"
            md-title="Are you sure you want to delete this team?"
            md-content="This will perminently delete this team.  Are you sure you want to do this?"
            md-confirm-text="Delete"
            md-cancel-text="Cancel"
            @md-confirm="deleteTeam" />
        <form class="md-layout">
            <md-card-header>
                <md-card-header-text>
                    {{team ? team.id : 'Create New Team' }}
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                <md-field v-if="create">
                    <label>Team Number</label>
                    <md-input type="number" v-model="teamNumber" data-lpignore="true"/>
                </md-field>
                <md-field>
                    <label>Team Name</label>
                    <md-input v-if="editing || !team" v-model="teamForm.name"  data-lpignore="true"/>
                    <md-input v-else v-model="team.name" disabled data-lpignore="true"/>
                </md-field>
                <md-field>
                    <label>City</label>
                    <md-input v-if="editing || !team" v-model="teamForm.city"  data-lpignore="true"/>
                    <md-input v-else v-model="team.city" disabled data-lpignore="true"/>
                </md-field>
                <md-field>
                    <label>State</label>
                    <md-select v-if="editing || !team" v-model="teamForm.state" md-dense>
                        <md-option v-for="state in states" :value="state" :key="state" data-lpignore="true">{{state}}</md-option>
                    </md-select>
                    <md-select v-else v-model="team.state" data-lpignore="true" disabled>
                        <md-option :value="team.state">{{team.state}}</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label>Country</label>
                    <md-select v-if="editing || !team" v-model="teamForm.country" data-lpignore="true">
                        <md-option value="USA">USA</md-option>
                    </md-select>
                    <md-select v-else v-model="team.country" data-lpignore="true" disabled>
                        <md-option :value="team.country">{{team.country}}</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label>Organization/School</label>
                    <md-input v-if="editing || !team" v-model="teamForm.organization"  data-lpignore="true"/>
                    <md-input v-else v-model="team.organization" disabled data-lpignore="true"/>
                </md-field>
                <md-field>
                    <label>First Year</label>
                    <md-input v-if="editing || !team" type="number" v-model="teamForm.firstYear"  data-lpignore="true"/>
                    <md-input v-else type="number" v-model="team.firstYear" disabled data-lpignore="true"/>
                </md-field>
                <md-field>
                    <label>Description</label>
                    <md-textarea v-if="editing || !team" v-model="teamForm.description" md-autogrow maxlength="500"  data-lpignore="true"/>
                    <md-textarea v-else v-model="team.description" md-autogrow disabled data-lpignore="true"/>
                </md-field>
            </md-card-content>

            <md-progress-bar md-mode="indeterminate"/>
            
            <md-card-actions>
                <md-button v-if="editing" class="md-primary" @click="cancelEdit()">Cancel</md-button>
                <md-button v-if="!editing" class="md-primary" @click="startEdit()" >Edit</md-button>
                <md-button v-if="!editing" class="md-primary" @click="confirm = true">Delete</md-button>
                <md-button v-if="editing" class="md-primary" @click="save()" :disabled="sending">{{create ? 'Create' : 'Save' }}</md-button>
            </md-card-actions>
        </form>
    </md-card>
</template>

<script>
var States = require('usa-states').UsaStates;
export default {
    props: [
        'create',
        'team'
    ],
    data: () => ({
        editing: false,
        sending: false,
        confirm: false,
        teamForm: {
            name: "",
            city: "",
            state: "IA",
            country: "USA",
            organization: "",
            firstYear: null,
            description: ""
        },
        teamNumber: null
    }),
    computed: {
        states() {
            var usStates = new States();
            return usStates.arrayOf('abbreviations')
        }
    },
    methods: {
        startEdit() {
            if(this.team) {
                this.teamForm.name = this.team.name;
                this.teamForm.city = this.team.city;
                this.teamForm.state = this.team.state;
                this.teamForm.country = this.team.country;
                this.teamForm.organization = this.team.organization;
                this.teamForm.firstYear = this.team.firstYear;
                this.teamForm.description = this.team.description;
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
            this.teamNumber = null;
            this.teamForm.name= "";
            this.teamForm.city= "";
            this.teamForm.state= "IA";
            this.teamForm.country= "USA";
            this.teamForm.organization= "";
            this.teamForm.firstYear= null;
            this.teamForm.description= "";
        },
        save() {
            this.sending = true;

            if ( this.team && this.team.id ) {
                this.teamNumber = this.team.id;
            }
            var doc = this.$db.collection('teams').doc(this.teamNumber);
            this.editing = false;
            doc.set(this.teamForm, {merge: true})
                .then(() => {
                    console.log("Team successfully saved");
                    this.sending = false;
                    if(this.create) {
                        this.clearForm();
                    } else {
                        this.editing = false;
                    }
                })
                .catch((error) => console.log("Error writing team:", error))
        },
        deleteTeam() {
            this.$db.collection('teams').doc(this.team.id).delete()
                .then(() => {
                    console.log('Team successfully deleted');
                })
                .catch((error) => {
                    console.log('Error deleting team: ', error);
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

<style lang="scss" scoped>
.team-dashboard-card {
    width: 400px;
    margin: 6px;
    display: inline-block;
    vertical-align: top;
    .md-card-header {
        background-color: #ddd;
        width: 100%;
        font-weight: bold;
    }
}

</style>
