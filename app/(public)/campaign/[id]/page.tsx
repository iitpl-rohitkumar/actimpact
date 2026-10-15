import React from "react";
import CampaignDetailsPage from "./CampaignDetailsPage";
import { defaultCampaign } from "./campaignData";

export function generateStaticParams() {
  return [
    { id: "meera-heart-surgery" },
    { id: "flash-floods-rebuild" },
    { id: "arjun-leukemia" },
    { id: "tribal-girls-education" },
    { id: "rohan-spinal-surgery" },
    { id: "teachers-day-school" },
    { id: "details" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return {
    title: `${defaultCampaign.title} — ActImpact`,
    description: defaultCampaign.storyParagraphs[0],
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CampaignDetailsPage id={id} />;
}
