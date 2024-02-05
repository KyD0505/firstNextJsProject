import Link from "next/link";

async function getStaticProps(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // console.log('API response:', res);
    // console.log('data response:', data);
    return {
        props : { ninjas: data }
    }

}

export const metadata = {
    title: "Ninja List",
    description: "Ninja List page",
};

const Ninjas = async () => {
    const data = await getStaticProps();
    const ninjas = data.props.ninjas

    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link className="single" href={'/ninjas/' + ninja.id} key={ninja.id}>
                    <h3>{ ninja.name }</h3>
                </Link>
            ))}
        </div>
    );
}

export default Ninjas;