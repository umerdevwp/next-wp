export default async function graphqlRequest(query) {
    const url = "http://localhost/socius/graphql";
    const header = { 'Content-Type': 'application/json'};

    if(process.env.WORDPRESS_AUTH_REFRESH_TOKEN){
    const header = {'Authorization': `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`};
    }
    const request = await fetch(url, { 
        headers:  header,
        method: 'POST', 
        body: JSON.stringify(query) 
    });

    const responseJSON = await request.json();
    return responseJSON;

}