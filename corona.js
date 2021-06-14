addEventListener('keypress', setQuery);
function setQuery(evt) {
        if (evt.keyCode == 13)
                getResult();
}
fetch(`https://api.covid19api.com/summary`)
        .then(weather => {
                return weather.json();
        }).then(data => {
                var GlobalNewConfirmed = document.getElementById("Global-New-Confirmed");
                var GlobalNewDeaths = document.getElementById("Global-New-Deaths");
                var GlobalNewRecovered = document.getElementById("Global-New-Recovered");
                var GlobalTotalConfirmed = document.getElementById("Global-Total-Confirmed");
                var GlobalTotalDeaths = document.getElementById("Global-Total-Deaths");
                var GlobalTotalRecovered = document.getElementById("Global-Total-Recovered");
                GlobalNewConfirmed.innerHTML = "<h2>New Confirmed:" + data.Global.NewConfirmed + "</h2>";
                GlobalNewDeaths.innerHTML = "<h2>New Deaths:" + data.Global.NewDeaths + "</h2>";
                GlobalNewRecovered.innerHTML = "<h2>New Recovered:" + data.Global.NewRecovered + "</h2>";
                GlobalTotalConfirmed.innerHTML = "<h2>Total Confirmed:" + data.Global.TotalConfirmed + "</h2>";
                GlobalTotalDeaths.innerHTML = "<h2>Total Deaths:" + data.Global.TotalDeaths + "</h2>";
                GlobalTotalRecovered.innerHTML = "<h2>Total Recovered:" + data.Global.TotalRecovered + "</h2>";
        });
function getResult() {
        var str = document.getElementById("input").value;
        var i, j = 0;
        for (i = 0; i < str.length; ++i) {
                if (str.charAt(i) == ' ')
                        j++;
        }
        if (str.length == j) {
                window.alert("Input Field Must Not be Empty");
                return;
        }
        var country = document.getElementById("Country");
        var newconfirmed = document.getElementById("New-Confirmed")
        var newdeath = document.getElementById("New-Deaths");
        var newrecover = document.getElementById("New-Recovered")
        var totalconfirm = document.getElementById("Total-Confirmed")
        var totaldeath = document.getElementById("Total-Deaths")
        var totalrecover = document.getElementById("Total-Recovered")
        str = str.toLowerCase();
        console.log(str);
        fetch(`https://api.covid19api.com/summary`)
                .then(weather => {
                        return weather.json();
                }).then(data => {
                        for (var i = 0; i < 191; ++i) {
                                var p = data.Countries[i].Country;
                                p = p.toLowerCase();
                                if (p == str) {
                                        newconfirmed.innerHTML = "<h2>New Confirmed:" + data.Countries[i].NewConfirmed + "</h2>";
                                        newdeath.innerHTML = "<h2>New Deathe:" + data.Countries[i].NewDeaths + "</h2>";
                                        newrecover.innerHTML = "<h2>New Recovered:" + data.Countries[i].NewRecovered + "</h2>";
                                        totalconfirm.innerHTML = "<h2>Total Confirmed:" + data.Countries[i].TotalConfirmed + "</h2>";
                                        totaldeath.innerHTML = "<h2>Total Deaths:" + data.Countries[i].TotalDeaths + "</h2>";
                                        totalrecover.innerHTML = "<h2>Total Recovered:" + data.Countries[i].TotalRecovered + "</h2>";
                                        country.innerHTML = "<h1>" + data.Countries[i].Country + "</h1>";
                                        return;
                                }
                        }
                });
}