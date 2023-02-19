
form.addEventListener('submit', (e) => {
    e.preventDefault();

    parent = document.querySelector('.user-data table');

    row_table = document.createElement('tr');


    fN = document.createElement('td')
    fN_data = document.querySelector('[placeholder="FirstName"]');
    fN.innerText = fN_data.value;
    row_table.append(fN);

    lN = document.createElement('td');
    lN_data = document.querySelector('[placeholder = "LastName"]');
    lN.innerText = lN_data.value;
    row_table.append(lN);

    pin = document.createElement('td');
    pin_data = document.querySelector('[placeholder="Pincode"]');
    pin.innerText = pin_data.value;
    row_table.append(pin);

    gender = document.createElement('td');
    let gender_data;
    if ((document.getElementsByName('gender')[0].checked == true)) {
        gender_data = document.getElementById('gender_1').value;
        gender.innerText = gender_data;
    } else {
        gender_data = document.getElementById('gender_2').value;
        gender.innerText = gender_data;
    }
    console.log(gender.innerText)
    row_table.append(gender);
    console.log(gender)

    address = document.createElement('td');
    address_data = document.querySelector('[placeholder="Address"]');
    address.innerText = address_data.value;
    row_table.append(address);

    let food_choice = document.createElement('td');
    let foods = document.getElementsByName("food");

    let selected_foods = [];
    for (var i = 0; i < foods.length; i++) {
        if (foods[i].checked) {
            selected_foods.push(foods[i].value);
        }
    }
    console.log(selected_foods)

    if (selected_foods.length >= 2) {
        food_choice.innerHTML = selected_foods.map((element) => {
            return ` ${element}`
        })
    } else {
        alert("Atleast 2 food options need to be selected !");
    }
    row_table.append(food_choice);

    state = document.createElement('td');
    state_data = document.querySelector('[placeholder="State"]');
    state.innerText = state_data.value;
    row_table.append(state);

    country = document.createElement('td');
    country_data = document.querySelector('[placeholder="Country"]');
    country.innerText = country_data.value;
    row_table.append(country);


    parent.append(row_table);
})
