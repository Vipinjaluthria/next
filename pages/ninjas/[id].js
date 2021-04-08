
export const getStaticPaths=  async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    const paths=data.map(item=>{
        return {
            params : { id :item.id.toString()}
        }
    })
    return {
        paths,
        fallback: false,
    }
} 
export const getStaticProps=async (context)=>{
    const id =context.params.id;
    console.log(id+"vipin");
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data =await res.json();
    return {
        props:{ninja: data}

    }

}


const Id = ({ninja}) => {
    return ( 
        <div>
            <h1>
                {ninja.username}
            </h1>
            <p>{ninja.email}</p>
            <p>{ninja.phone}</p>
            <p>{ninja.website}</p>
        </div>
     );
}
 
export default Id;