const getGifLink = (type) => {
    switch(type){
        case 'Cloudy':
        case 'Mostly cloudy':
        case 'Partly cloudy':
        case 'Intermittent clouds':
        case 'Overcast':
            return 'https://giphy.com/embed/lLTfWRzpCBpziB73db';
        case 'Sunny':
        case 'Mostly sunny':
        case 'Partly sunny':
        case 'Clear':
        case 'Mostly clear':
            return 'https://giphy.com/embed/Ch3UbAv0GORwkDIEGR';
        case 'Rain':
        case 'Showers':
        case 'Storm':
            return 'https://giphy.com/embed/tP5j1bWbHzzHG3MRKS';
        default:
            return 'https://giphy.com/embed/osJQbRtas1dTCt0B6x';
    }
}
module.exports = { getGifLink };