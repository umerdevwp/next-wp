import * as React from "react";
import Image from "next/image";
import { getAllProducts } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";
import PostCard from "@/components/posts/post-card";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

  
export default async function Product() {
  const products = await getAllProducts();


  const photos = [
    {
      src: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1507730690594-f21182eee8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1721041879224-ff011603ada5?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


  return (
    <Section>
      <Container>
        <h1>All Products</h1>

        <h2></h2>
        <div className="grid">
          {products.map((product: any) => (
            <Link key={product.id} href={`products/${product.slug}`}>
              {product.title}
            </Link>
          ))}
        </div>

        <Carousel className="mt-6 w-full">
          <CarouselContent className="-ml-1">
            {photos.map((photo, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <CardContent className="not-prose flex aspect-square items-center justify-center">
                      <Image
                        src={photo.src}
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
