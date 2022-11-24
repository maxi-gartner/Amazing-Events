console.log("filter se ejecuta despues de homedata")

const filter = document.getElementById("filter");
const inputSearch = document.getElementById("search");
const send = document.getElementById("send");


const filterEvents = all_data => {
    filter.addEventListener('keyup', () =>{
        const searchText = inputSearch.value.toLowerCase();
        console.log(searchText);
        const filterCards = all_data.filter(item => {
            const typing = item.name.toLowerCase();
            if(typing.indexOf(searchText) !== -1) {
                return item
            }
        })
        console.log("filterCards",filterCards);
        send.addEventListener("click", () => {
            if(filterCards.length > 0) {
                cards.textContent = ``
                addCards(filterCards);
            }
            
        });
        
    })
}

