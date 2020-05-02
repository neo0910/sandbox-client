import compose from '@/utils/compose';

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
});

const civilianHours = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12) ?
        clockTime.hours - 12 :
        clockTime.hours,
});

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? 'PM' : 'AM',
});

const display = el => time => el.innerText = time;

const formatClock = format => time =>
    format.replace('hh', time.hours)
        .replace('mm', time.minutes)
        .replace('ss', time.seconds)
        .replace('tt', time.ampm);


const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ?
        '0' + clockTime[key] :
        clockTime[key],
});

const convertToCivilianTime = clockTime =>
    compose(appendAMPM, civilianHours)(clockTime);

const doubleDigits = civilianTime =>
    compose(prependZero('hours'), prependZero('minutes'), prependZero('seconds'))(civilianTime);

const startTicking = el =>
    setInterval(compose(
        getCurrentTime,
        serializeClockTime,
        convertToCivilianTime,
        doubleDigits,
        formatClock('hh:mm:ss tt'),
        display(el),
    ), oneSecond());

export default startTicking;