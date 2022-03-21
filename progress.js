/*
* Run the code after the doc is ready
*/
document.addEventListener('DOMContentLoaded', function(){
    let counter = 1;

    function stop () {
        clearInterval(setWidth);
    }
    /*
    * Set the loading bar width and label
    */
    const setWidth = setInterval( () => {
        let width = `calc(${counter}% - 3rem)`;
        let dataLabel = document.getElementsByClassName('progress-bar')[0];
        if(counter === 100) {
            stop();
        }
        document.documentElement.style.setProperty('--prog-width', width);
        dataLabel.setAttribute('data-label', `Loading - ${counter}%`);
        counter += 1;
    }, 50)
}, false);
