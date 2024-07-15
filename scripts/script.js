const $ = document

const quoteTextElem = $.querySelector('.quote-text')
const quoteAuthorElem = $.querySelector('.quote-author')
const newQuoteBtn = $.querySelector('.newQuoteBtn')
const postQuoteBtn = $.querySelector('.postQuoteBtn')

async function getQuote(){
    let apiUrl = 'https://api.quotable.io/random'

    let response = await fetch(apiUrl)
    let data = await response.json()

}