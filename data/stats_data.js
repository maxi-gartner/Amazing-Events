const apiData = async () => {
    try{
        const res = await fetch('../api.json')
        const dataEvent = await res.json()
        //console.log("dataEvent", dataEvent)
        const { events} = dataEvent;
        console.log("events", events)
        filterCategories(events)
        addTable(events)
    }
    catch{
        console.log("error", error);
    }
}
apiData()

const filterCategories = events => {

    const categories = events.map(data => {
        return data.category
    })

    let listCategories = categories.reduce((acc, element) => {
        if(!acc.find(d => d == element)){
            acc.push(element)
        }
        return acc;
    },[])
    console.log("listCategories", listCategories)
}

const addTable = (events) => {

    const assistance = events.map(event => {
        if(event.assistance !== undefined){
            return event.assistance
        }
    })
    const capacity = events.map(event => {
        if(event.capacity !== undefined){
            return event.capacity
        }
    })
    //console.log("capacity",capacity)
    const assintenceFilter = assistance.filter(item => item !== undefined)
    const capacityFilter = capacity.filter(item => item !== undefined)
    //console.log("assintenceFilter",typeof assintenceFilter[2])
    //console.log("assintenceFilter",assintenceFilter)


        const top4 = assintenceFilter.sort(function (a, b) 
            { return b - a; }).slice(0, 4);
        const bad4 = assintenceFilter.sort(function (a, b) 
            { return b - a; }).slice(-4);
        const top4Capacity = capacityFilter.sort(function (a, b) 
            { return b - a; }).slice(0, 4);
        //console.log("top4",top4)
        //console.log("bad4",bad4)
        //console.log("top4Capacity",top4Capacity)

        /* const filterTop4Assintence = events.filter(item => {
            //console.log(top4)
            if (top4.indexOf(item.assistance) !== -1)
            return item
        })
        const filterBad4Assintence = events.filter(item => {
            //console.log(top4)
            if (bad4.indexOf(item.assistance) !== -1)
            return item
        })
        const filtertop4Capacity = events.filter(item => {
            //console.log(top4)
            if (top4Capacity.indexOf(item.capacity) !== -1)
            return item
        }) */
        //console.log("filterTop4Assintence",filterTop4Assintence)
        //console.log("filterBad4Assintence",filterBad4Assintence)
        //console.log("filtertop4Capacity",filtertop4Capacity)

///----------------------------add DOM ------------------------------------
    
    const tableStatistics= document.querySelector("#event-statistics");
    const fragment = document.createDocumentFragment()

    events.forEach((data) => {
    const tr = document.createElement("tr")
    tableStatistics.appendChild(tr)

    if (top4.indexOf(data.assistance) !== -1){
        const td = document.createElement("td")
        td.textContent = data.name
        tr.appendChild(td)
    }else
    
    
    if (bad4.indexOf(data.assistance) !== -1){
        const td2 = document.createElement("td")
        td2.textContent = data.name
        tr.appendChild(td2)
    }
    
    if (top4Capacity.indexOf(data.capacity) !== -1){
        const td3 = document.createElement("td")
        td3.textContent = data.name
        tr.appendChild(td3)
    }
    
    
        fragment.appendChild(tr)
    });
    tableStatistics.appendChild(fragment)
}



