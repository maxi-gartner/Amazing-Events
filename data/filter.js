//console.log("filter se ejecuta despues de homedata")

const filter = document.getElementById("filter");
const inputSearch = document.getElementById("search");
const send = document.getElementById("send");


const filterEvents = (events, currentDate) => {

    filter.addEventListener('keyup', () =>{
        const searchText = inputSearch.value.toLowerCase();
        console.log("searchText", searchText);
        const filterCards = events.filter(item => {
            const typing = item.name.toLowerCase();
            if(typing.indexOf(searchText) !== -1) {
                return item
            } 
        })
        console.log("filterCards",filterCards);
        send.addEventListener("click", () => {
            if(filterCards.length > 0) {
                cards.textContent = ``
                addCards(filterCards, currentDate);
            }else{
                cards.textContent = ``
                const addCards = () => {
                    const template = document.querySelector("#template-cards-empty").content;
                    const fragment = document.createDocumentFragment();
                
                            template.querySelector('.card-title').textContent = "Events Results";
                            template.querySelector('img').src = "https://png.pngtree.com/png-vector/20210706/ourlarge/pngtree-no-result-search-icon-png-image_3563805.jpg";
                            template.querySelector('.card-text').textContent = "Negative Search Results";
                            
                            const clone = template.cloneNode(true);
                            fragment.appendChild(clone);
                    
                    cards.appendChild(fragment);
                }
                addCards()
            }
            
        });
        if(filterCards.length === events.length){
            cards.textContent = ``
            addCards(events, currentDate)
        }
        
    })
}

