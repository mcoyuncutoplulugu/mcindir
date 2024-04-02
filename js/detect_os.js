// Detect the user's operating system
var isWindows = navigator.userAgent.indexOf('Windows') != -1;
var isAndroid = navigator.userAgent.indexOf('Android') != -1;

// Create the download buttons
var windowsButton = '<div class="col-md-6 col-sm-12"><button class="btn btn-primary btn-lg btn-block my-2" style="margin:3px; min-width: 320px;" data-toggle="modal" data-target="#windowsModal"><i class="fa fa-download"></i>&nbsp;Windows için <b alt="Gta 3 Türk">Gta 3: Türk</b> İndir<br><small>v2.1&nbsp;[21.03.2024]</small></button></div>';
var androidButton = '<div class="col-md-6 col-sm-12"><button class="btn btn-success btn-lg btn-block my-2" style="margin:3px; min-width: 320px;" data-toggle="modal" data-target="#androidModal"><i class="fa fa-download"></i>&nbsp;Android için <b alt="Gta 3: Türk">Gta 3: Türk</b> İndir<br><small>v2.1&nbsp;[22.03.2024]</small></button></div>';

// Insert the buttons in the correct order
if (isWindows) {
    document.getElementById('downloadButtons').innerHTML = windowsButton + androidButton;
} else if (isAndroid) {
    document.getElementById('downloadButtons').innerHTML = androidButton + windowsButton;
} else {
    // Default order for other operating systems
    document.getElementById('downloadButtons').innerHTML = windowsButton + androidButton;
}