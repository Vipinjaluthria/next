import  Head  from "next/head";
import Link from "next/link";
export const getStaticProps=async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    //console.log(data);
    return {
        props :{ninjas: data}
    }
} 

const NinjaList = ({ninjas}) => {
    return (
        <>
            <Head> <title>Vipin's List | NInja</title></Head>
            <div>
                <h1>All Ninja's</h1>
                {ninjas.map(item=>(
                    <Link href={"/ninjas/"+item.id} key={item.id}>
                        <a><h4>{item.name}</h4></a>

                    </Link>
                ))}

            </div>
        </>
     );
}
 
export default NinjaList;