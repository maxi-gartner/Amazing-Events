console.log("funciaonando filter")


const filterCheckbox = events => {

    const CheckboxInputs = document.querySelectorAll(".checkboxCategory")
        //console.log("CheckboxInputs", CheckboxInputs)
        //console.log("cardsSelectorAll",cardsSelectorAll)

        CheckboxInputs.forEach((CheckboxInput) => {
            CheckboxInput.addEventListener("change", () => 
            {
                const checked = CheckboxInput.checked;
                if(checked){
                    inputsCheked.push(CheckboxInput.id)
                //console.log(CheckboxInput.id );
                }else {
                    //console.log(`input ${CheckboxInput.id} no esta chekeado   `);
                    const indice = inputsCheked.indexOf(CheckboxInput.id);
                    //console.log(indice);
                    inputsCheked.splice(indice, 1)
                    
                    cards.textContent = ``
                }
            })
        })
        let inputsCheked = [];
        console.log("inputsCheked", inputsCheked)

        filter.addEventListener("change", () => {
        let eventsFilter = [];
            inputsCheked.forEach((inputCheked) => {
                //console.log("inputCheked", inputCheked)
                const inputsFilter = events.filter(item => {
                    const category = item.category.replace(/\s/g,'')
                    console.log("category", category)
                    if(category.indexOf(inputCheked) !== -1){
                        //return item
                        //console.log(item.name)
                    eventsFilter.push(item)
                        }
                    })
                    console.log("inputsFilter", inputsFilter)
                    cards.textContent = ``
                    addCards(eventsFilter);
        });
        if(inputsCheked.length === 0){
            cards.textContent = ``
            addCards(events);
        }
        });
}
