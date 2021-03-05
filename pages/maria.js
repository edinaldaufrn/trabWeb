import Link from "next/link"
import FMaria from "./companents/mariaprea"
function maria(){
return(
    <div>
    <h1>
        Página Maria Preá.
        </h1>
       <FMaria adjetivo = {"trabalhosa"}/>
       <Link href="/"> 
       <a >Valtar para home.</a>
       </Link>
     </div>
)

}
export default maria