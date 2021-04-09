window.addEventListener('load', init);

function init() {
    var exitMenu = document.querySelector('#exit');
    var text = document.querySelector('#text')
    var logInSubmit = document.querySelector('#log-in [type="button"]');
    var exitBtn = document.querySelector('#exit-btn')
    var log = document.querySelector('#log-in');
    var loginText = document.querySelector('#login')

    window.localStorage.login = 'admin';
    window.localStorage.Login = 'Admin';

    logInSubmit.addEventListener('click', logInHandler);
    exitBtn.addEventListener('click', exitAccount)
            //--Cookie--//
            
    // document.cookie = `login='admin'`;
    // document.cookie = `Login='Admin'`;

    // function findCookieValue(cookieName) {
    //     var allcookies = document.cookie; 
    //     var pos = allcookies.indexOf(cookieName + "="); 

    //     if (pos != -1) {
    //         var start = pos + cookieName.length + 1;
    //         var end = allcookies.indexOf(";", start); 

    //         if (end == -1) {
    //             end = allcookies.length;
    //         } 

    //         var value = allcookies.substring(start, end);
    //         return decodeURIComponent(value);
    //     }
    // };

    function logInHandler () {
                //--Local storage--//

        var loginName = loginText.value;
        if(window.localStorage.login === loginName) {
            showAccount(loginName);
        } else if (window.localStorage.Login === loginName) {
            showAccount(loginName);
        }
        //--Cookie--//

        // var cookieWithMar = findCookieValue('login');
        // var cookieWithMarTwo = findCookieValue('Login');
        // var logInEmail = document.querySelector('#log-in [type="login"]');                 
        // var sliceCookieFirst = cookieWithMar.slice(1, 6);
        // console.log(sliceCookieFirst);
        // var sliceCookieSecond = cookieWithMarTwo.slice(1, 6)

        // if (sliceCookieFirst === loginText.value) {
        //     showAccount(sliceCookieFirst);
        // } else if (sliceCookieSecond === loginText.value){
        //     showAccount(sliceCookieSecond);
        // }
    }
    function showAccount (users) {
        exitMenu.style.display = 'flex';
        log.style.display = 'none';
        text.innerHTML = `Пользователь ${users} вошел в систему`
    }

    function exitAccount () {
        exitMenu.style.display = 'none';
        log.style.display = 'flex';
    }
}