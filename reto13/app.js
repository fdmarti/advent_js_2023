function calculateTime(deliveries = []) {
    const HOURS_LIMIT = 7 * 3600
    let positive;
    let resultTime = 0;


    deliveries.forEach(time => {
        const timeDivided = time.split(':')
        resultTime += (+timeDivided[0] * 3600)
            + (+timeDivided[1] * 60)
            + (+timeDivided[2])
    })

    let time = HOURS_LIMIT - resultTime
    positive = time > 0 ? '' : '-'

    const diffHour = Math.floor(Math.abs(time) / 3600)
    const diffMinutes = Math.floor((Math.abs(time) % 3600) / 60)
    const diffSeconds = Math.floor(Math.abs(time) % 60)

    let result = positive ? '' : '-';
    result += diffHour.toString().padStart(2, '0') + ':'
    result += diffMinutes.toString().padStart(2, '0') + ':'
    result += diffSeconds.toString().padStart(2, '0')

    return result

}

calculateTime(['00:10:00', '01:00:00', '03:30:00']) // "-02:20:00"
calculateTime(['01:00:00', '05:00:00', '00:30:00']) // "-00:30:00"
calculateTime(['02:00:00', '05:00:00', '00:30:00']) // "00:30:00"
calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']) // "-05:29:00"
calculateTime(['02:00:00', '03:00:00', '02:00:00']) // "00:00:00"
calculateTime(['01:01:01', '09:59:59', '01:01:01']) // "05:02:01"
calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']) // "-00:00:01"