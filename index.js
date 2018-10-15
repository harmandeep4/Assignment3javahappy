
const  app = new Vue({
    el: '#app',
    mounted: function(){
        fetch  ("https://api.mockaroo.com/api/7d44ee80?count=1000&key=f1d27b90") 
        

.then(res => res.json())
.then(emails => {
this.emails = emails;
this.selectedEmail = this.emails[0];
this.isReady= true;

})
.catch(err => console.log(err));    
        },
    data: {
    message:"hello vue!",
    emails:[],
    selectedEmail:{},
    view:'inbox',
    isReady: false
        },

    methods: {
        getPic: function(emailObj) {
            return emailObj.image;
        },
        getalt(emailObj){
            return  `${emailObj.first} ${emailObj.last}'s avatar`;
        },
        clickedEmail: function(emailObj){
            this.selectedEmail = emailObj;
        },
        isSelected: function(emailObj){
            return emailObj == this.selectedEmail;
        },
        incomingEmail(){
            fetch  ("https://api.mockaroo.com/api/7d44ee80?count=1000&key=f1d27b90") 
            
    
    .then(res => res.json())
    .then(emails => {
        this.emails.unshift(emails[0]);
    
  })
  .catch(err => console.log(err));  

        },
    currentView(){
        switch (this.view) {
            case "inbox":
            return this.emails.filter(email => !email.deleted);
            break;

            case 'Trash':
            return this.emails.filter(email => !email.deleted);
            break;

        }
        },
    
    setView(clickedView){
        this.View = clickedView;
        },
    deleteEmail(){
        this.$set(this.selectedEmail,"deleted", true);
        }
        }
}); 