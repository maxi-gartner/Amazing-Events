const apiData = async () => {
        try{
            const res = await fetch('api.json')
            const dataEvent = await res.json()
            //console.log("dataEvent", dataEvent)
            const { events} = dataEvent;
            //console.log("events", events)
            addCards(events)
        }
        catch{
            console.log("error", error);
        }
    }
    apiData()

    
    console.log("funciona?")
    const cardDetail = new URLSearchParams(window.location.search)
    const params = cardDetail.get('name')
        console.log(params)
        nameEvent.push(params)
    const cards= document.querySelector("#cards_home");
        console.log("cards", cards)
    

    const addCards = (events) => {
        console.log("params", params)

        const template = document.querySelector("#template-cards-details").content;
        const fragment = document.createDocumentFragment();

        const filterData = events.filter(item => item.name.replace(/\s/g,'') === params)
        console.log(filterData)

        const nameEvent = ""
        console.log("nameEvent", nameEvent)
    
        filterData.forEach((data) => {
                template.querySelector('.card-title').textContent = data.name;
                template.querySelector('img').src = data.image;
                template.querySelector('.price_and_buttom h2').textContent = ("Price: US$" + data.price);
                template.querySelector('.card-text').textContent = data.description;
                template.querySelector('div').setAttribute("id", data.category.replace(/\s/g,''));
                template.querySelector('.card-date').textContent = data.date;
                template.querySelector('.card-place').textContent = ("Place: " + data.place);
                template.querySelector('.card-capacity').textContent = ("Capacity: " + data.capacity);
                template.querySelector('.card-assistance').textContent = ("Assistance: " + data.assistance);
                template.querySelector('.card-category').textContent = ("Category: " + data.category);data.category;
                template.querySelector('a').setAttribute("href", "../index.html");
                
                
                const clone = template.cloneNode(true);
                fragment.appendChild(clone);
        }); 
        cards.appendChild(fragment);
    }
    addCards(events)

    console.log("hasta aca funciona")