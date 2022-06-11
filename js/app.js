
    function updateTimer(){
        future = Date.parse("apr 26, 2022 01:30:00");
        now = new Date();
        diff = future - now;

        secs = Math.floor (diff / 1000); //1sec = 1000 mill sec
        mins = Math.floor (diff/ (1000*60));
        hours = Math.floor (diff / (1000*60*60));
        days = Math.floor (diff / (1000*60*60*24));

        d = days;
        h = hours - days * 24;
        m = mins - hours * 60;
        s = secs - mins * 60;

        document.getElementById("timer").innerHTML = '<div>' + d + '<span>Days</span></div>'+
        '<div>' + h + '<span>Hours</span></div>'+
        '<div>' + m + '<span>Minutes</span></div>'+
        '<div>' + s + '<span>Seconds</span></div>'
    }
    setInterval('updateTimer()', 1000);
