import { Comparable }	from "./comparable.js";
import { Logable }		from "./Logable.js";
import { Stringible }	from "./stringible.js";

export interface ModelObject<T> 
	extends Stringible, Logable, Comparable<T> {

}