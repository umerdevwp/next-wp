import { getPageBySlug } from "@/lib/wordpress";
import { Section, Container, Main } from "@/components/craft";
import { Metadata } from "next";

import BackButton from "@/components/back";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);
  return {
    title: page.title.rendered,
    description: page.excerpt.rendered,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug);

  return (
    <Section>
      <Container>
        <BackButton />
        <h1 className="pt-12">{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas maiores ratione quaerat alias quo dolor dolorum recusandae omnis illo aliquid iste ex neque voluptatum, qui similique debitis ipsum optio ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis impedit optio unde illum mollitia labore facere. Explicabo impedit blanditiis libero, ipsa delectus quos! Amet tempora cumque reiciendis minus libero!</p>
        </Container>
    </Section>
  );
}
