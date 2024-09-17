import * as React from "react";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

export function CloudCarousel() {
  const items = [
    { precursor: "Scenario 1", title: "Public", description: "Our cloud development team has years of hands-on experience designing accessible and user-friendly public cloud products. Services distributed across multiple data centers mean reduced overhead and extra flexibility.<br></br>Public clouds are best when:<ul><li> - Your workloads don&apos;t involve overly sensitive data.</li><li> - Sudden spikes in demand are expected, like in the holiday season.</li><li> - Global reach is important, and a bit of extra latency is tolerable.</li></ul>" },
    { precursor: "Scenario 2", title: "Hybrid", description: "We build hybrid cloud solutions that scale easily, prioritizing workload portability for legacy infrastructures across multiple environments. Hybrid clouds are cost-effective and utilize the strengths of different cloud types where they&apos;re most strategic for your business.<br></br>Hybrid clouds are best when:<ul><li> - You want to ensure a sweet spot between flexibility and control.</li><li> - Different parts of your infrastructure have widely variable workloads</li><li> - Your business&apos; nature requires robust disaster recovery strategies, with data and applications stored across   multiple clouds.</li></ul>" },
    { precursor: "Scenario 3", title: "Multi-Cloud", description: "Multi-cloud solutions leverage the best features from various cloud providers and configure them for optimal reliability. The added redundancy and reduced costs make them invaluable when avoiding downtime is crucial.<br></br>Multi-clouds are best when: <ul><li> - Your workload must be customized down to the smallest details.</li><li> - Committing to a single cloud vendor would be counterproductive.</li><li> - You want to keep your rising IT spending under check long-term.</li></ul>" },
  ];

  return (
    <Carousel className="w-[100%] max-w-[100%] bg-white rounded-2xl border-gray-200 border-[2px] ">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
            <div className=" md:px-0 py-5 md:py-10 px-5 flex flex-col md:flex-row items-start justify-center md:justify-between">
                <div className="w-[30%]">
                  <h3 className="font-semibold px-10 text-4xl text-slate-800">{item.precursor}</h3>
                </div>
                <div><Separator orientation="vertical" /></div>
                <div className="w-[70%] flex flex-col gap-10 items-start justify-center">
                  <span className="text-2xl font-semibold text-slate-800">{item.title}</span>
                  <ClientSideHtml html={item.description} />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function ClientSideHtml({ html }: { html: string }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(html);
  }, [html]);

  return <p className="text-slate-800 pr-20 text-lg" dangerouslySetInnerHTML={{ __html: content }} />;
}
