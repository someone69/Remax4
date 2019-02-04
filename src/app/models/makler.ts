export interface Makler {
    firstName: string,
    lastName: string,
    titul: string,
    position: string,
    img: string,
    tel: string,
    email: string,
    web: string,
    webnehnutelnosti: string
    bio:{
        sk: string,
        hu: string
    },
    portfolio?: string
}