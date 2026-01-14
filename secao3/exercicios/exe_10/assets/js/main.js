const dia = document.querySelector('.dia')
let data = new Date()

function getInfoDay () {    
    let dayWeek = setDayOfWeek(data.getDay() + 1)
    let diaMonth = data.getDate()
    let month = setMonth(data.getMonth())
    let year = data.getFullYear()
    let hour = data.getHours()
    let minute = formatMinutes(data.getMinutes())

    dia.innerHTML = `${dayWeek}, ${diaMonth} de ${month} de ${year}. ${hour}:${minute} `;

}

function setDayOfWeek (dayWeekNumber) {
    switch (dayWeekNumber) {
        case 1: return 'Domingo';
    };

    switch (dayWeekNumber) {
    case 2: return 'Segunda-feira';
    
    };
    switch (dayWeekNumber) {
    case 3: return 'Terca-feira';
    };
    
    switch (dayWeekNumber) {
    case 4: return 'Quarta-feira';
    };
    
    switch (dayWeekNumber) {
    case 5: return 'Quinta-feira';
    };

    switch (dayWeekNumber) {
    case 6: return 'Sexta-feira';
    };

    switch (dayWeekNumber) {
    case 7: return 'Sábado';
    };

};

function setMonth (monthNumber) {
    const listMonthNames = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    return listMonthNames[monthNumber];
}

function formatMinutes(minutes) {
    return minutes < 10 ? '0' + minutes : minutes;
}

getInfoDay()