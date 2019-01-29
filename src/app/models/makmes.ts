import { Makler } from "./makler";
import { Property } from "./property";

export interface Makmes {
    url: string,
    html?: string,
    name?: string,
    firstName?: string,
    lastName?: string,
    makler?: Makler,
    house?: Property
}

 