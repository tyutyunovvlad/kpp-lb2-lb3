export interface IWeather {
    temp:any,
    city:string,
    country:string
    pressure:any,
    sunset:any,
    error:string
}
export interface ICity {
    city:string
    coords: {
        lon:number,
        lat: number
    },
    flag:string
}
