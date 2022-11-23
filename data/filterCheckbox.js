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
    inputsCheked = [];
    console.log(inputsCheked)
    
    const filterEventsCheckbox = all_data => {
    inputsCheked.forEach((inputCheked) => {
        console.log(inputCheked)
        if(inputCheked === "AllCategories"){
            //addCards(all_data);
            cards.textContent = ``
            addCards(all_data);
        }else {
            cards.textContent = ``
            const inputsFilter = all_data.filter(item => {
                const category = item.category.replace(/\s/g,'')
                if(category === inputCheked){
                    return item;
                    }
                })
                console.log(inputsFilter)
            }
            
        })
    }


console.log("funciaonando filter")
