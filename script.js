/* jshint esversion: 6 */
/* jshint -W033 */
const generateJKM = () => {
    const startArray = [
        'Ja chcę powiedzieć jedną rzecz:',
        'Trzeba powiedzieć jasno:',
        'Jak powiedział wybitny krakowianin Stanisław Lem,',
        'Proszę mnie dobrze zrozumieć:',
        'Ja chciałem Państwu przypomnieć, że',
        'Niech państwo nie mają złudzeń:',
        'Powiedzmy to wyraźnie:',
    ]

    const innerArray1 = [
        'przedstawiciele czerwonej hołoty',
        'ci wszyscy (tfu!) geje',
        'funkcjonariusze reżymowej telewizji',
        'tak zwani ekolodzy',
        'ci wszyscy (tfu!) demokraci',
        'agenci bezpieki',
        'feminazistki',
    ]

    const innerArray2 = [
        'zupełnie bezkarnie',
        'całkowicie bezczelnie',
        'o poglądach na lewo od komunizmu',
        'celowo i świadomie',
        'z premedytacją',
        'od czasów Okrągłego Stołu',
        'w ramach postępu',
    ]
    const innerArray3 = [
        'nawołują do podniesienia podatków,',
        'próbują wyrzucić kierowców z miast,',
        'próbują skłócić Polskę z Rosją,',
        'głoszą brednię o globalnym ociepleniu,',
        'zakazują posiadania broni,',
        'nie dopuszczają prawicy do władzy,',
        'uczą dzieci homoseksualizmu,',
    ]
    const innerArray4 = [
        'bo dzięki temu mogą kraść',
        'bo dostają za to pieniądze',
        'bo tak się uczy w państwowej szkole',
        'bo bez tego (tfu!) demokracja nie może istnieć',
        'bo głupich jest więcej niż mądrych',
        'bo chcą tworzyć raj na ziemi',
        'bo chcą niszczyć cywilizację białego człowieka',
    ]

    const endArray = [
        'przez kolejne kadencje.',
        'o czym się nie mówi.',
        'i właśnie dlatego Europa umiera.',
        '– i właśnie dlatego Unia Europejska musi być zniszczona.',
        'ale przyjdą muzułmanie i zrobią porządek.',
        '– tak samo zresztą jak za Hitlera!',
        '– proszę zobaczyć co się dzieje na Zachodzie, jeśli mi państwo nie wierzą.',
        'co lat temu sto nikomu nie przyszłoby nawet do głowy!',
    ]

    const random = providedArray => {
        const number = Math.ceil(Math.random() * providedArray.length - 1)
        return number > 0 ? number : 0
    }

    const bigArray = [startArray, innerArray1, innerArray2, innerArray3, innerArray4, endArray]

    const quote = bigArray.reduce((acc, arr) => (acc = acc + arr[random(arr)] + ' '), '')

    const hitler = Math.ceil(Math.random() * 100)
    const hitlerDidntKnow = 'Nie ma dowodu, że Hitler wiedział o Holokauście!'

    document.getElementById('quote').innerText = hitler < 2 ? hitlerDidntKnow : quote

    document.querySelector('.quote').classList.contains('quote--visible') ? '' : document.querySelector('.quote').classList.add('quote--visible');

}
