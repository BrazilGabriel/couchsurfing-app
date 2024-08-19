export interface Review {
    name: string
    stars: number
    date: string
    loyalty: string
}

export interface Property{
    image: string
    title: string
    price: number
    location: {
        firstLine: string
        city: string
        code: string | number
        country: string
    }
    contact: [string , number]
    isAvaliable: boolean
}