for (let i = 0 ; i < all_data.length ; i++){
    do{
        card += `
    <div class="card" style="width: 18rem; ">
        <img src="${all_data[i].image}" class="card-img-top position-absolute top-0" alt="...">
        <div class="card-body">
        <h5 class="card-title">${all_data[i].name}</h5>
        <p class="card-text">${all_data[i].description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
    }while (Date.parse(date_current) > Date.parse(date_events))
    /* let dates = (Date.parse(date_current) < Date.parse(date_events))
    console.log(dates) */
        
    
    
}