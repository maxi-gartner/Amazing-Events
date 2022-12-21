const apiData = async () => {
    try{
        const res = await fetch('../api.json')
        const dataEvent = await res.json()
        //console.log("dataEvent", dataEvent)
        const { events} = dataEvent;
        //console.log("events", events)
        filterCardDetails(events)
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
    
    const cardDetails = []

    const filterCardDetails = events => {
        events.filter(item => {
            if(item.name.replace(/\s/g,'') === params){
                cardDetails.push(item)
            }
        })
}

console.log("cardDetails", cardDetails)

    const addCards = events => {
        const cards= document.querySelector("#cards_home");
        console.log("cards",cards)
        const template = document.querySelector("#template-cards-details").content;
        const fragment = document.createDocumentFragment();

        cardDetails.forEach((data) => {
            console.log(data.name)
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

    console.log("hasta aca funciona")