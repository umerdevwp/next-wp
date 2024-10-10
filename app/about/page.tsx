import { getPageBySlug } from "@/lib/wordpress";
import { Section, Container, Main } from "@/components/craft";
import { Metadata } from "next";

import BackButton from "@/components/back";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
    const slug = 'about-us';
    const page = await getPageBySlug(slug);
    return {
        title: page.title.rendered,
        description: page.excerpt.rendered,
    };
}

export default async function About({ params }: { params: { slug: string } }) {
    const slug = 'about-us';
    const page = await getPageBySlug(slug);
    console.log(page);

    return (
        <Section>
        <Container>
            <BackButton />
            <h1 className="pt-12">{page.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
            </Container>
        </Section>
    );
}
