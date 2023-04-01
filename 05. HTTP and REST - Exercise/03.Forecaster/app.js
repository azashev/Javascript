function attachEvents() {
    const location = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/';

    const conditions = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    }
    submitBtn.addEventListener('click', weatherHandler);

    function weatherHandler() {
        Array.from(currentDiv.children).forEach(child => {
            if (!child.classList.contains('label')) {
                currentDiv.removeChild(child);
            }
        });

        Array.from(upcomingDiv.children).forEach(child => {
            if (!child.classList.contains('label')) {
                upcomingDiv.removeChild(child);
            }
        });

        fetch(`${BASE_URL}locations`)
        .then((res) => res.json())
        .then((data) => {
            forecastDiv.style.display = 'block';
            let locationCode = null;
            for (const { code, name } of data) {
                if (name === location.value) {
                    locationCode = code;
                }
            }

            if (locationCode === null) {
                forecastDiv.textContent = 'Error';
                return;
            }

            fetch(`${BASE_URL}today/${locationCode}`)
            .then((res) => res.json())
            .then((data) => {
                const forecasts = document.createElement('div');
                forecasts.textContent = '';
                forecasts.classList = 'forecasts';
                
                const conditionSymbol = document.createElement('span');
                conditionSymbol.classList = 'condition symbol';
                conditionSymbol.innerHTML = conditions[data.forecast.condition];

                const conditionSpan = document.createElement('span');
                conditionSpan.classList = 'condition';

                const forecastSpan1 = document.createElement('span');
                forecastSpan1.classList = 'forecast-data';
                forecastSpan1.textContent = data.name;

                const forecastSpan2 = document.createElement('span');
                forecastSpan2.classList = 'forecast-data';
                forecastSpan2.innerHTML = `${data.forecast.low}${conditions['Degrees']}/${data.forecast.high}${conditions['Degrees']}`;

                const forecastSpan3 = document.createElement('span');
                forecastSpan3.classList = 'forecast-data';
                forecastSpan3.textContent = data.forecast.condition;

                conditionSpan.appendChild(forecastSpan1);
                conditionSpan.appendChild(forecastSpan2);
                conditionSpan.appendChild(forecastSpan3);

                forecasts.appendChild(conditionSymbol);
                forecasts.appendChild(conditionSpan);
                currentDiv.appendChild(forecasts);

                fetch(`${BASE_URL}upcoming/${locationCode}`)
                .then((res) => res.json())
                .then((data) => {
                    const forecastInfo = document.createElement('div');
                    forecastInfo.classList = 'forecast-info';
                    forecastInfo.textContent = '';
                    
                    for (const day of data.forecast) {
                        const upcomingSpan = document.createElement('span');
                        upcomingSpan.classList = 'upcoming';

                        const symbolSpan = document.createElement('span');
                        symbolSpan.classList = 'symbol';
                        symbolSpan.innerHTML = conditions[day.condition];

                        const forecastDegrees = document.createElement('span');
                        forecastDegrees.classList = 'forecast-data';
                        forecastDegrees.innerHTML = `${day.low}${conditions['Degrees']}/${day.high}${conditions['Degrees']}`;

                        const forecastCondition = document.createElement('span');
                        forecastCondition.classList = 'forecast-data';
                        forecastCondition.textContent = day.condition;

                        upcomingSpan.appendChild(symbolSpan);
                        upcomingSpan.appendChild(forecastDegrees);
                        upcomingSpan.appendChild(forecastCondition);
                        forecastInfo.appendChild(upcomingSpan);
                        upcomingDiv.appendChild(forecastInfo);
                    }
                })
            })
        })
        .catch(() => {
            forecastDiv.textContent = 'Error';
        });
    };
}

attachEvents();
