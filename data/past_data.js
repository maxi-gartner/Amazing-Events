console.log("past data");
const apiData = async () => {
    try{
        const res = await fetch('../api.json')
        const dataEvent = await res.json()
        console.log("dataEvent", dataEvent)
        const { events} = dataEvent;
        //console.log("events", events)
        addCards(dataEvent)
        filterEvents(events)
        addCheckbox(events)
        filterCheckbox(events)
    }
    catch{
        console.log("error", error);
    }
}
apiData()
console.log("despues de async");

const cards= document.querySelector("#cards_past");

const addCards = dataEvent => {
    const { events, currentDate} = dataEvent;

        console.log("events", events)
        console.log("currentDate", currentDate)

    const date_current_split = currentDate.split("-");
    console.log("date_current_split",date_current_split);
    const date_current_parsed = new Date(date_current_split[0],date_current_split[1]-1,date_current_split[2]);
    console.log(date_current_parsed);
    const date_current_getTime = date_current_parsed.getTime();
    console.log(date_current_getTime);

    const template = document.querySelector("#template-cards").content;
    const fragment = document.createDocumentFragment();


    events.forEach((data) => {
        let date_events = data.date;
        let date_events_split = date_events.split("-");
        let date_events_parsed = new Date(date_events_split[0],date_events_split[1]-1,date_events_split[2])
        let date_events_getTime = date_events_parsed.getTime();

        if (date_current_getTime > date_events_getTime){
            template.querySelector('.card-title').textContent = data.name;
            template.querySelector('.card-title').textContent = data.name;
            template.querySelector('img').src = data.image;
            template.querySelector('.card-text').textContent = data.description;
            template.querySelector('.price_and_buttom p').textContent = ("Price: " + data.price);
            template.querySelector('div').setAttribute("id", data.category.replace(/\s/g,''));
            template.querySelector('a').setAttribute("href", `../pages/details.html?name=${data.name.replace(/\s/g,'')}`);
                    
                const clone = template.cloneNode(true);
                fragment.appendChild(clone);
    }
    });
    cards.appendChild(fragment);
}

console.log("hasta aca funciona")
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
addCheckbox(events)
