export async function fetchData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users${id}');
    const data = await res.json();
    return data;
}
