(function(){
    //https://www.youtube.com/watch?v=wPElVpR1rwA
    window.addEventListener('load', ()=>{
        let long;
        let lat;

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;

                //Cross domain - CORS
                const cors = 'https://cors-anywhere.herokuapp.com/';
                const api = `${cors}https://api.darksky.net/forecast/9aab59ea9530d52a6e1ed24ebe12091d/${lat},${long}`;

                fetch(api)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        //console.log(data);
                        long = data.longitude;
                        lat = data.latitude;
                        const {time, summary, icon, temperature } = data.currently;

                        console.log(long, lat);
                        console.log(data.timezone)

                        console.log(time)
                        console.log(summary)
                        console.log(icon)
                        console.log(temperature)
                    })
            })
        }
    })
})()