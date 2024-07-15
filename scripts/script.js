const $ = document

const quoteTextElem = $.querySelector('.quote-text')
const quoteAuthorElem = $.querySelector('.quote-author')
const newQuoteBtn = $.querySelector('.newQuoteBtn')
const postQuoteBtn = $.querySelector('.postQuoteBtn')

async function getQuote(){
    let apiUrl = 'https://api.quotable.io/random'

    let response = await fetch(apiUrl)
    let data = await response.json()

    setQuoteDate(data)
}

function setQuoteDate(quoteData){
    quoteTextElem.innerHTML = quoteData.content
    quoteAuthorElem.innerHTML = quoteData.author
}

function postQuote(){
    window.open(`https://x.com/intent/post?text=${quoteTextElem.innerHTML} ---- by ${quoteAuthorElem.innerHTML}`,'X Window', 'width=600, height=300')
}

newQuoteBtn.addEventListener('click' , getQuote)
postQuoteBtn.addEventListener('click' , postQuote)
window.addEventListener('load' , getQuote)