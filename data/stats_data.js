const apiData = async () => {
    try{
        const res = await fetch('../api.json')
        const dataEvent = await res.json()
        //console.log("dataEvent", dataEvent)
        const { events} = dataEvent;
        console.log("events", events)
        filterCategories(dataEvent)
        addTable(events)
    }
    catch{
        console.log("error", error);
    }
}
apiData()

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


        const top3 = assintenceFilter.sort(function (a, b) 
            { return b - a; }).slice(0, 3);
        const bad3 = assintenceFilter.sort(function (a, b) 
            { return b - a; }).slice(-3);
        const top3Capacity = capacityFilter.sort(function (a, b) 
            { return b - a; }).slice(0, 3);
        //console.log("top3",top3)  
        //console.log("bad3",bad3)
        //console.log("top4Capacity",top4Capacity)

        const filterTop4Assintence = events.filter(item => {
            //console.log(top4)
            if (top3.indexOf(item.assistance) !== -1)
            return item
        })
        const filterBad4Assintence = events.filter(item => {
            //console.log(top4)
            if (bad3.indexOf(item.assistance) !== -1)
            return item
        })
        const filtertop4Capacity = events.filter(item => {
            //console.log(top4)
            if (top3Capacity.indexOf(item.capacity) !== -1)
            return item
        })
        const eventsFilter = [...filterTop4Assintence,...filterBad4Assintence,...filtertop4Capacity]
        //console.log("eventsFilter",eventsFilter)
        //console.log("filterTop4Assintence",filterTop4Assintence)
        //console.log("filterBad4Assintence",filterBad4Assintence)
        //console.log("filtertop4Capacity",filtertop4Capacity)

        

///----------------------------add DOM ------------------------------------
    
    const tableStatistics= document.querySelector("#event-statistics");
    const fragment = document.createDocumentFragment()

        const tr = document.createElement("tr")
        const tr2 = document.createElement("tr")
        const tr3 = document.createElement("tr")

    for(let i = 0; i < eventsFilter.length; i= i+3){
        const td = document.createElement("td")
            td.textContent = eventsFilter[i].name
            tr.appendChild(td)
    };
    
    for(let i = 1; i < eventsFilter.length; i= i+3){
        const td = document.createElement("td")
            td.textContent = eventsFilter[i].name
            tr2.appendChild(td)
    };

    for(let i = 2; i < eventsFilter.length; i= i+3){
        const td = document.createElement("td")
            td.textContent = eventsFilter[i].name
            tr3.appendChild(td)
    };
        fragment.appendChild(tr)
        fragment.appendChild(tr2)
        fragment.appendChild(tr3)
    
    tableStatistics.appendChild(fragment)
}

//------------------filter uncoming events--------------

const filterCategories = dataEvent => {
    const { events, currentDate} = dataEvent;

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

    let resultCategoriesUncoming = [];
    let resultPercentageUncoming = [];
    let resultCategoriesPast = [];
    let resultPercentagePast = [];

const revenuesFilter = events => {

    const date_current_split = currentDate.split("-");
    const date_current_parsed = new Date(date_current_split[0],date_current_split[1]-1,date_current_split[2]);
    const date_current_getTime = date_current_parsed.getTime();



    events.forEach((data) => {
        let date_events = data.date;
        let date_events_split = date_events.split("-");
        let date_events_parsed = new Date(date_events_split[0],date_events_split[1]-1,date_events_split[2])
        let date_events_getTime = date_events_parsed.getTime();

        if (date_current_getTime < date_events_getTime){

        listCategories.forEach((category) => {
            let revenues = 0;
            events.forEach((data) => {
                if ((data.category == category) && (data.assistance > 0)){
                    //console.log(Number(data.assistance));
                    revenues = revenues + (Number(data.assistance))
                }
            });
            //console.log("revenues", revenues)
            if(resultCategoriesUncoming.length < listCategories.length){
                resultCategoriesUncoming.push("$"+ revenues* data.price)}
        });;

        listCategories.forEach((category) => {
            let capacity = 0;
            let assistance = 0;
            events.forEach((data) => {
                if ((data.category == category) && (data.assistance > 0)){
                    //console.log(Number(data.assistance));
                    assistance = assistance + (Number(data.assistance))
                }
                if ((data.category == category) && (data.capacity > 0)){
                    //console.log(Number(data.assistance));
                    capacity = capacity + (Number(data.capacity))
                }
            });
            console.log("assistance", assistance)
            //console.log("assistance",assistance)
            //console.log("capacity", capacity)
            if(resultPercentageUncoming.length < listCategories.length){
                resultPercentageUncoming.push((Math.round((assistance * 100)/capacity))+"%")}
        }); 
    }

    if (date_current_getTime > date_events_getTime){

        listCategories.forEach((category) => {
            let revenuesPast = 0;
            events.forEach((data) => {
                if ((data.category == category) && (data.assistance > 0)){
                    //console.log(Number(data.assistance));
                    revenuesPast = revenuesPast + (Number(data.assistance))
                }
            });
            //console.log("revenuesPast", revenuesPast)
            if(resultCategoriesPast.length < listCategories.length){
                resultCategoriesPast.push("$"+ revenuesPast* data.price)}
        });;

        listCategories.forEach((category) => {
            let capacityPast = 0;
            let assistancePast = 0;
            events.forEach((data) => {
                if ((data.category == category) && (data.assistance > 0)){
                    //console.log(Number(data.assistance));
                    assistancePast = assistancePast + (Number(data.assistance))
                }
                if ((data.category == category) && (data.capacity > 0)){
                    //console.log(Number(data.assistance));
                    capacityPast = capacityPast + (Number(data.capacity))
                }
            });
            
            //console.log("assistancePast", assistancePast)
            //console.log("capacity", capacity)
            if(resultPercentagePast.length < listCategories.length){
                resultPercentagePast.push((Math.round((assistancePast * 100)/capacityPast))+"%")}
        });
    }
});

console.log("resultCategoriesUncoming", resultCategoriesUncoming)
console.log("resultPercentageUncoming", resultPercentageUncoming)
console.log("resultCategoriesPast", resultCategoriesPast)
console.log("resultPercentagePast", resultPercentagePast)
}
revenuesFilter(events)

const allDataUncoming = [...listCategories,...resultCategoriesUncoming,...resultPercentageUncoming]
console.log("allDataUncoming", allDataUncoming)

const tableStatistics= document.querySelector("#uncoming-statistics");
    const fragment = document.createDocumentFragment()

        const tr = document.createElement("tr")
        const tr2 = document.createElement("tr")
        const tr3 = document.createElement("tr")
        const tr4 = document.createElement("tr")
        const tr5 = document.createElement("tr")
        const tr6 = document.createElement("tr")
        const tr7 = document.createElement("tr")

    for(let i = 0; i < allDataUncoming.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataUncoming[i]
            tr.appendChild(td)
    };
    
    for(let i = 1; i < allDataUncoming.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataUncoming[i]
            tr2.appendChild(td)
    };

    for(let i = 2; i < allDataUncoming.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataUncoming[i]
            tr3.appendChild(td)
    };
    for(let i = 3; i < allDataUncoming.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataUncoming[i]
            tr4.appendChild(td)
    };
    for(let i = 4; i < allDataUncoming.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataUncoming[i]
            tr5.appendChild(td)
    };
    for(let i = 5; i < allDataUncoming.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataUncoming[i]
            tr6.appendChild(td)
    };
    for(let i = 6; i < allDataUncoming.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataUncoming[i]
            tr7.appendChild(td)
    };
        fragment.appendChild(tr)
        fragment.appendChild(tr2)
        fragment.appendChild(tr3)
        fragment.appendChild(tr4)
        fragment.appendChild(tr5)
        fragment.appendChild(tr6)
        fragment.appendChild(tr7)
    
    tableStatistics.appendChild(fragment)


    // -------------------------table past-------------------------------------------

    const allDataPast = [...listCategories,...resultCategoriesPast,...resultPercentagePast]

    const tableStatisticspast= document.querySelector("#past-statistics");
    const fragmentpast = document.createDocumentFragment()

        const trpast = document.createElement("tr")
        const tr2past = document.createElement("tr")
        const tr3past = document.createElement("tr")
        const tr4past = document.createElement("tr")
        const tr5past = document.createElement("tr")
        const tr6past = document.createElement("tr")
        const tr7past = document.createElement("tr")

    for(let i = 0; i < allDataPast.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataPast[i]
            trpast.appendChild(td)
    };
    
    for(let i = 1; i < allDataPast.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataPast[i]
            tr2past.appendChild(td)
    };

    for(let i = 2; i < allDataPast.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataPast[i]
            tr3past.appendChild(td)
    };
    for(let i = 3; i < allDataPast.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataPast[i]
            tr4past.appendChild(td)
    };
    for(let i = 4; i < allDataPast.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataPast[i]
            tr5past.appendChild(td)
    };
    for(let i = 5; i < allDataPast.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataPast[i]
            tr6past.appendChild(td)
    };
    for(let i = 6; i < allDataPast.length; i= i+7){
        const td = document.createElement("td")
            td.textContent = allDataPast[i]
            tr7past.appendChild(td)
    };
        fragmentpast.appendChild(trpast)
        fragmentpast.appendChild(tr2past)
        fragmentpast.appendChild(tr3past)
        fragmentpast.appendChild(tr4past)
        fragmentpast.appendChild(tr5past)
        fragmentpast.appendChild(tr6past)
        fragmentpast.appendChild(tr7past)
    
        tableStatisticspast.appendChild(fragmentpast)
}
