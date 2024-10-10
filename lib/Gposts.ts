import graphqlRequest from './graphqlRequest';
import {
    Post,
  } from "./wordpress.d";


export async function postByGraphQL() {
    const query = {
        query: `query AllPosts {
                    posts {
                        nodes {
                        excerpt
                        date
                        featuredImage {
                            node {
                            altText
                            guid
                            uri
                            title
                            srcSet
                            sourceUrl
                            sizes
                            }
                        }
                        slug
                        status
                        title
                        uri
                        }
                    }
                    }`
    };

    const responseJSON = await graphqlRequest(query);
    const allGraphPosts = responseJSON.data.posts.nodes
    return allGraphPosts;
}

export async function getPostbygqSlug(slug: any){
    const query = {
        query: `query SinglePost {
                post(id: "${slug}", idType: SLUG) {
                   content(format: RENDERED)
                    featuredImage {
                    node {
                        sourceUrl
                        uri
                        guid
                    }
                    }
                    title(format: RENDERED)
                    status
                }
                }`
    }
    const resJson = await graphqlRequest(query);
    const GraphPost = resJson.data.post;
    return GraphPost;
}

/* export async function createPost(){
    const query1 = {
        query: `
            mutation MyMutation2 {
            createPost(input: {username: "admin", excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", title: "Ddolore magna aliqua", slug: "alpha-qpo", status: }) {
                clientMutationId: clientMutationId
                post {
                author {
                    node {
                    username: username
                    }
                }
                title: title
                excerpt: excerpt
                status: status
                slug: slug
                }
            }
            }
        `
    }
    const respostcreate = await createPost();
    const CreatePost = respostcreate;
} */