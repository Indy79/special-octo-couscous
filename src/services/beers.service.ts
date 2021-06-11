import { Beer } from "../models/Beer"

export const fetchRandomBeer = (): Promise<Beer[]> => {
    return fetch('https://api.punkapi.com/v2/beers/random').then(response => response.json()).then(beers => beers[0])
}

export const fetchBeerById = (id: number): Promise<Beer> => {
    return fetch(`https://api.punkapi.com/v2/beers/${id}`).then(response => response.json())
}

export const fetchBeers = (): Promise<Beer[]> => {
    return fetch('https://api.punkapi.com/v2/beers?per_page=60').then(response => response.json())
}