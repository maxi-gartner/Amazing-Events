const filter = document.getElementById("filter");
const inputSearch = document.getElementById("search");

const filterEvents = all_data => {
    filter.addEventListener('keyup', (e) =>{
        e.preventDefault(); // previene q la pagina no se recargue constantemente al teclear
        const searchText = inputSearch.value.toLowerCase();
        console.log(searchText);
        const filterText = all_data.filter(item => {
            const typing = item.name.toLowerCase();
            if(typing.indexOf(searchText) !== -1) {
                return item
            }
        })
        console.log(filterText);
        addCards(filterText);
    })
}