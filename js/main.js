'use strict'


function darkModeToggle() {
    var body = document.body;
    var icons = document.getElementById('icon')
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        icons.src = "./img/lua.png"
        // button.textContent = "Dark";
    } else {
        body.classList.add("dark-mode");
        icons.src = "./img/sol.png"
        // button.textContent = "Light";
    }
}

const traducaoAPI = async(text, tFrom, tTo) =>{
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${tFrom}|${tTo}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const getTraducao = async() =>{
    const textT = document.getElementById('ingles')
    const text = document.getElementById('portugues').value.trim(),
                transFrom = selects[0].value,
                transTo = selects[1].value
    const img = document.createElement('img')
    img.src = '../img/load-black.png'
    textT.textContent = ''
    textT.append(img)

    if(text.toLowerCase() == "alice"){
        var body = document.body
        var icons = document.getElementById('icon')
        var title = document.querySelector('h1')
        if (body.classList.contains("alice-mode")) {
            body.classList.remove("alice-mode")
            icons.src = "./img/lua.png"
            title.classList.remove('h1-alice')
        } else {
            body.classList.add("alice-mode");
            icons.src = "./img/flor.png"
            title.classList.add('h1-alice')
        }
    }else{
        const traducao = await traducaoAPI(text, transFrom, transTo)

        console.log(traducao)

        textT.textContent = traducao.responseData.translatedText
    }
}

const selects = document.querySelectorAll('select')

selects.forEach((tag, langs) => {
    console.log(testeLingua)
    for (let country_code in testeLingua) {      
        let selected = langs == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "pt-PT" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${testeLingua[country_code]}</option>`;
        console.log(option)
        tag.insertAdjacentHTML("beforeend", option);
    }
})