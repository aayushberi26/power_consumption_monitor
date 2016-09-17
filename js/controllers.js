var appliances = {
    'Central AC': {'kilowatts': 3.0, 'cost': 0.33},
    'Window AC (120V)': {'kilowatts': 0.73, 'cost': 0.08},
    'Oven Range': {'kilowatts': 2.3, 'cost': 0.25},
    'Microwave Oven': {'kilowatts': 1.4, 'cost': 0.12},
    'Toaster Oven': {'kilowatts': 0.75, 'cost': 0.08},
    'Plasma TV': {'kilowatts': 0.48, 'cost': 0.05},
    'LCD TV': {'kilowatts': 0.016, 'cost': 0.01},
    'Incandescent bulb (75W)': {'kilowatts': 0.08, 'cost': 0.01},
    'Compact Fluorescent (20W)': {'kilowatts': 0.02, 'cost': 0.003},
    'Electric heater (1500W)': {'kilowatts': 1.5, 'cost': 0.17}
}

function add_row(appliance_name, appliances) {
    var table = document.getElementById("apps");
    var row = table.insertRow(1);
    row.id =  appliance_name;
    var app_name = row.insertCell(0);
    var time_on = row.insertCell(1);
    var kilowatts = row.insertCell(2);
    var cost = row.insertCell(3);
    app_name.innerHTML = appliance_name;
    time_on.innerHTML = Date();
    kilowatts.innerHTML = 0;
    kilowatts.className = '_kilo';
    cost.innerHTML = 0;
    cost.className = '_cost';
    setInterval(update_row, 1000, appliance_name, appliances)
}
function update_row(appliance_name, appliances) {
    var row = document.getElementById(appliance_name);
    var cells = row.getElementsByTagName('td');
    new_kilo = cells[2];
    new_cost = cells[3];
    new_kilo.innerHTML = (parseFloat(new_kilo.innerHTML) + appliances[appliance_name]['kilowatts']).toFixed(2);
    new_cost.innerHTML = (parseFloat(new_cost.innerHTML) + appliances[appliance_name]['cost']).toFixed(2);
}
function update_total() {
    total_table = document.getElementById('total');
    total_row = total_table.getElementsByTagName('tr')[0];
    total_cells = total_row.getElementsByTagName('th');
    total_kilo = total_cells[1];
    total_cost = total_cells[2];

    all_kilos = document.getElementsByClassName('_kilo');
    all_costs = document.getElementsByClassName('_cost');
    console.log(all_costs);
    console.log(all_costs);
    if(all_kilos.length > 1 && all_costs.length > 1) {
        var new_total_kilo = 0;
        var new_total_cost = 0;
        for(var i = 0; i < all_kilos.length; i++) {
            new_total_kilo += (parseFloat(all_kilos[i].innerHTML));
            new_total_cost += (parseFloat(all_costs[i].innerHTML));
        }
        total_kilo.innerHTML = new_total_kilo.toFixed(2);
        total_cost.innerHTML = new_total_cost.toFixed(2);
    }
}

setInterval(update_total, 1000);