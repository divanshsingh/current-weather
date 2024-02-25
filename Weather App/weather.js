        const apiKey = "c740eef7a09f9fdf0046f44032b9ace2"
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

        const searchInput = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button")
        const weatherImg = document.querySelector(".weather img")
        const card = document.querySelector(".card")

        async function checkWeather (city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
            
            if(response.status == 404){
                document.querySelector('.errdiv').style.display = "block"
                document.querySelector(".weather").style.display = "none"
            } else{
                var data = await response.json()
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°<sup>C</sup>";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";
            if(data.weather[0].main === "Clouds"){
                weatherImg.src = "clouds.png"
                card.style.backgroundImage = "url('https://images.unsplash.com/photo-1594156596782-656c93e4d504?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"


            } else if(data.weather[0].main === "Clear"){
                weatherImg.src = "clear.png"
                card.style.backgroundImage = "url('https://images.unsplash.com/photo-1691848746386-d5de9f5c05a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"

            } else if(data.weather[0].main === "Mist"){
                weatherImg.src = "mist.png"
                card.style.backgroundImage = "url('https://images.unsplash.com/photo-1603807617654-89b25101a00e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"

            } else if(data.weather[0].main === "Rain"){
                weatherImg.src = "rain.png"
                card.style.backgroundImage = "url('https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }
            else if(data.weather[0].main === "Snow"){
                weatherImg.src = "snow.png"
                card.style.backgroundImage = "url('https://images.unsplash.com/photo-1549136430-c2e0aadfc69f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }
            document.querySelector(".weather").style.display = "block"
            document.querySelector('.errdiv').style.display = "none"

            }
            
           
        }

        searchInput.addEventListener('keyup', (e)=>{
            if (e.keyCode === 13){
                checkWeather(searchInput.value)
            }
        })

        searchBtn.addEventListener('click', ()=>{
            checkWeather(searchInput.value)
        })
        
        