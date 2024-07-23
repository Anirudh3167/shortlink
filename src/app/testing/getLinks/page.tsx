import fs from 'fs/promises'

async function getLinksFs() {
    const data = await fs.readFile('./db/links.json','utf8');
    return JSON.parse(data).links;
}

export default async function GetLinks() {
    const links = await getLinksFs();
    return(
        <h2>{JSON.stringify(links)}</h2>
    )
}