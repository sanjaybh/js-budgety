//One way of writing this component
//window.customElements.define('app-drawer', class extends HTMLElement {});

let template = document.createElement('template');
template.innerHTML = `
  <style>
    .cls-drawer{ color : blue; }
  </style>
  <b>I'm in shadow dom!</b>`;


class AppDrawer extends HTMLElement {

    constructor() {
        super();
        
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.addEventListener('click', e => {
            if (this.hasAttribute('status')) {                
                
                this.setUserData();
                this.toggleDrawer();
            }
        });
    }
    userObject (){
        let user = {
            "firstname": "Sanjay Bhan",
            "lastname" : "Bhan",
            "address" : {
                "city" : "gurgaon",
                "state" : "Haryana",
                "pin" : "201010"
            }
        }
        return user;
    }
    setUserData(){
        this.setAttribute('status', this.userObject());
    }

    displayData(jsonObj) { 
        var strBuilder = [];
        for(let key in jsonObj) {
            if (jsonObj.hasOwnProperty(key)) {
                strBuilder.push("Key is " + key + ", value is " + jsonObj[key] + "\n");
            }
        }

        console.log(strBuilder)
    }
    
    toggleDrawer() {
        debugger;
        //this.displayData(this.getAttribute('status'));

        /*if (this.hasAttribute('status') ) {
            if (this.getAttribute('status') === 'complete') {
                this.setAttribute('status', "failed");
            }else{
                this.setAttribute('status', "complete");
            } 
        }*/       
    }
  }
  
  customElements.define('app-drawer', AppDrawer);

  customElements.whenDefined('app-drawer').then(() => {
    console.log('app-drawer defined');
  });
  
  