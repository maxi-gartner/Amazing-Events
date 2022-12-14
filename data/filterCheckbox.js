/* console.log("filterCheckBox se ejecuta despues de")

const CheckboxInputs = document.querySelectorAll(".checkboxCategory")
    console.log("FoodFairCheckBox", CheckboxInputs)

    CheckboxInputs.forEach((CheckboxInput) => {
        CheckboxInput.addEventListener("change", () => 
        {
            const checked = CheckboxInput.checked;
            if(checked){
                inputsCheked.push(CheckboxInput.id)
            console.log(CheckboxInput.id );
            }else {
                console.log(`input ${CheckboxInput.id} no esta chekeado   `);
                const indice = inputsCheked.indexOf(CheckboxInput.id);
                console.log(indice);
                inputsCheked.splice(indice, 1)
            }
        })
    })
    let inputsCheked = [];
    console.log(inputsCheked)
    
    const filterEventsCheckbox = all_data => {
    inputsCheked.forEach((inputCheked) => {
        console.log(inputCheked)
        if(inputCheked.indexOf("AllCategories") !== 1){
            //addCards(all_data);
            cards.textContent = ``
            addCards(all_data);
        }else {
            const inputsFilter = all_data.filter(item => {
                const category = item.category.replace(/\s/g,'')
                if(category.indexOf(inputCheked) !== -1){
                    return item;
                    }
                })
                console.log(inputsFilter)
                cards.textContent = ``
                addCards(inputsFilter);
            }
            
        })
    }


console.log("funciaonando filter") */


const CheckboxInputs = document.querySelectorAll(".checkboxCategory")
const cardsSelectorAll = document.querySelectorAll(".card")
    //console.log("CheckboxInputs", CheckboxInputs)
    //console.log("cardsSelectorAll",cardsSelectorAll)

    CheckboxInputs.forEach((CheckboxInput) => {
        CheckboxInput.addEventListener("change", () => 
        {
            const checked = CheckboxInput.checked;
            if(checked){
                inputsCheked.push(CheckboxInput.id)
                cards.textContent = ``
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
    //console.log(inputsCheked)

    
    filter.addEventListener("change", () => {
        inputsCheked.forEach((inputCheked) => {
            const inputsFilter = all_data.filter(item => {
                const category = item.category.replace(/\s/g,'')
                if(category.indexOf(inputCheked) !== -1){
                    return item;
                    }
                })
                //console.log(inputsFilter)
                addCards(inputsFilter);
    });
    if(inputsCheked.length === 0){
        addCards(all_data);
    }
    });