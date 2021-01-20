// input taken from here
var txtInput = document.querySelector('#txt-input')

// on click processing ll be done
var btnTranslate = document.querySelector('#btn-translate')

// ll give output
var outputDiv = document.querySelector('#output');

// const serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'

const serverURL = 'https://api.funtranslations.com/translate/numbers.json'

// ?text=testing

function getTranslationURL(text) {
  return serverURL + '?' + 'text=' + text
}

function errorHandler(error) {
  console.log('error occured' , error) ;
  alert('something went wrong, try again after sometime!')
}

function clickHandler() {
  let inputText = txtInput.value //input

  // processing (went t server)
  fetch(getTranslationURL(inputText))
    .then(res => res.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText //output
    })

    .catch(errorHandler)
}

btnTranslate.addEventListener('click', clickHandler)





