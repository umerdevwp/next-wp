import { postByGraphQL } from '@/lib/Gposts';
import { Section, Container } from "@/components/craft";
import Link from "next/link";



export default async function GPosts(){
    const gposts = await postByGraphQL();
    //console.log(gposts);
    return (
        <Section>
        <Container>
          <h1>GraphQL Posts</h1>
  
          <div className="grid">
            {gposts.map((gpost: any) => (
                <div className="title" key={gpost.slug}>
              <Link key={gpost.slug} href={`gposts/${gpost.slug}`}>
                {gpost.title}
              </Link>
              </div>
             
            ))}
          </div>
        </Container>
      </Section>
    );
}