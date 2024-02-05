export async function generateStaticParams() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

    return data.map((ninja) => ({
        id: ninja.id.toString(),
    }))
}

async function getStaticProps(id){
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}

const NinjaDetails = async ({ params }: { params: { id: string } }) => {
    const data = await getStaticProps(params.id);
    const ninja = data.props.ninja
    
    return (  
        <div>
            {/* My Post: {params.id} */}
            <h1>{ ninja.name }</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>
        </div>
    );
}

export default NinjaDetails;