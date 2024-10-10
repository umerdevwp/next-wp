import { getPostbygqSlug } from "@/lib/Gposts";
import { Section, Container, Main } from "@/components/craft";
import { Metadata } from "next";

import BackButton from "@/components/back";


export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPostbygqSlug(params.slug);

  return (
    <Section>
      <Container>
        <BackButton />
        <h1 className="pt-12">{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Container>
    </Section>
  );
}
