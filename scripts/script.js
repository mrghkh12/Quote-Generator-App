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


newQuoteBtn.addEventListener('click' , getQuote)
window.addEventListener('load' , getQuote)