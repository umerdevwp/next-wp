import * as React from "react";
import Image from "next/image";
import { getProductBySlug } from "@/lib/wordpress";
import { Section, Container, Main } from "@/components/craft";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BackButton from "@/components/back";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  return {
    title: product.title,
    description: product.content,
  }; 
}

export default async function Product({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  const photos = product.photos;
  const imageSrc = product.image;
  return (
    <Section>
      <Container>
        <BackButton />
        
        <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image 
              className="h-full w-full object-cover object-bottom"
              src={imageSrc}
              width={1920}
              height={1080}
              alt={product.title}
              priority={true}
            />
        </div>

        <h1 className="pt-12">{product.title}</h1>
        <div className="product-content" />
        <p>{product.content}</p>


        <Carousel className="mt-6 w-full">
          <CarouselContent className="-ml-1">
            {photos?.map((photo, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <CardContent className="not-prose flex aspect-square items-center justify-center">
                      <Image
                        src={photo}
                        alt="Presets.com Example Image"
                        width={720}
                        height={480}
                        className="absolute inset-0 h-full w-full object-cover"
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        </Container>
    </Section>
  );
}
