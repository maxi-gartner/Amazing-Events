const filter = document.getElementById("filter");
const inputSearch = document.getElementById("search");
const send = document.getElementById("send");

/* send.addEventListener("click", () => {
    
}); */
const filterEvents = all_data => {
    filter.addEventListener('keyup', () =>{
        const searchText = inputSearch.value.toLowerCase();
        console.log(searchText);
        const filterCards = all_data.filter(item => {
            const typing = item.name.toLowerCase();
            if(typing.indexOf(searchText) !== -1) {
                cards.textContent = ``
                return item
            }
        })
        console.log(filterCards);
        addCards(filterCards);
    })
}


