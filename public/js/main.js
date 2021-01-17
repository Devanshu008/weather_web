const cityName = document.getElementById('cityName');
const SubmitBtn = document.getElementById('SubmitBtn');
const city_name = document.getElementById('city_name');
const temp_rel_value = document.getElementById('temp_rel_value');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerHTML = `Please write the city name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dea4feb74adf3138103b47b716c20e91`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            temp_rel_value.innerHTML = arrdata[0].main.temp;
            city_name.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;

            const temp_Mood = arrdata[0].weather[0].main;
            if (temp_Mood == "Clear") {
                temp_status.innerHTML = "<i class='fa fa-sun' style='color: #eccc68;'></i>"
            } else if (temp_Mood == "Clouds") {
                temp_status.innerHTML = "<i class='fa fa-cloud' style='color: #dfe4ea;'></i>"
            } else if (temp_Mood == "Rainy") {
                temp_status.innerHTML = "<i class='fa fa-rain' style='color: #a4b0be;'></i>"
            } else {
                temp_status.innerHTML = "<i class='fa fa-sun' style='color: #eccc68;'></i>"
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerHTML = `Please write the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

SubmitBtn.addEventListener('click', getInfo);