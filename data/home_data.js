    //console.log("home data");
    const apiData = async () => {
        try{
            const res = await fetch('api.json')
            const dataEvent = await res.json()
            //console.log("dataEvent", dataEvent)
            const { events} = dataEvent;
            //console.log("events", events)
            addCards(events)
            filterEvents(events)
            addCheckbox(events)
            filterCheckbox(events)
        }
        catch{
            console.log("error", error);
        }
    }
    apiData()
    //console.log("despues de async");

    const cards= document.querySelector("#cards_home");

    const addCards = events => {

        const template = document.querySelector("#template-cards").content;
        const fragment = document.createDocumentFragment();
    
        events.forEach((data) => {
                template.querySelector('.card-title').textContent = data.name;
                template.querySelector('img').src = data.image;
                template.querySelector('.card-text').textContent = data.description;
                template.querySelector('.price_and_buttom p').textContent = ("Price: " + data.price);
                template.querySelector('div').setAttribute("id", data.category.replace(/\s/g,''));
                template.querySelector('a').setAttribute("href", `./pages/details.html?name=${data.name.replace(/\s/g,'')}`);
                
                const clone = template.cloneNode(true);
                fragment.appendChild(clone);
        });
        cards.appendChild(fragment);
    }
    
    //console.log("hasta aca funciona final de addCards")

//--------------------------checkbox---------------

const checkbox= document.querySelector('#checkbox-home')

const addCheckbox = events => {

        const template = document.querySelector("#template-checkbox").content;
        const fragment = document.createDocumentFragment();
        const input = document.querySelector('#categories')

        const categories = events.map(data => {
            return data.category
        })

        let res = categories.reduce((array, element) => {
            if(!array.find(d => d == element)){
                array.push(element)
            }
            return array;
        },[])
        
        res.forEach((data) => {
            template.querySelector('label').textContent = data;
            template.querySelector('input').setAttribute("id",data.replace(/\s/g,''));
            template.querySelector('input').classList.add("checkboxCategory");
            template.querySelector('label').setAttribute("for",data.replace(/\s/g,''));
            const cloneCheckBox = template.cloneNode(true);
            fragment.appendChild(cloneCheckBox);
        })
        checkbox.appendChild(fragment)
}
