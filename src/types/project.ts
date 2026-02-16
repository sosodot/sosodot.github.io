export type ProjectSection =
  | { type: "divider" }
  | { type: "image"; src: string; alt?: string; imageBg?: string }
  | {
      type: "image-pair";
      images: [string, string];
      alts?: [string, string];
    }
  | {
      type: "stats";
      items: { label: string; value: string; description: string }[];
    }
  | { type: "text-columns"; label: string; columns: string[][] }
  | { type: "text-block"; label: string; text: string; textColor?: string }
  | {
      type: "bullet-columns";
      label: string;
      columns: { bold: string; text: string }[][];
    }
  | {
      type: "staggered-gallery";
      label: string;
      items: {
        image: string;
        imageBg?: string;
        title: string;
        description?: string;
        descriptionHtml?: string;
      }[];
    }
  | {
      type: "image-content";
      image: string;
      imageBg?: string;
      title?: string;
      columns: Array<Array<{ text: string; muted?: boolean }>>;
    }
  | { type: "flow-steps"; steps: string[] }
  | {
      type: "approach";
      label: string;
      description: string;
      pullQuote?: string;
      cards: {
        title: string;
        description: string;
        descriptionHtml?: string;
        image?: string;
      }[];
    }
  | {
      type: "insights";
      label: string;
      summary: string;
      cards: { title: string; description: string }[];
    }
  | {
      type: "delivery";
      label: string;
      summary: string;
      items: {
        title: string;
        description: string;
        descriptionHtml?: string;
        image?: string;
        imageBg?: string;
      }[];
    }
  | {
      type: "delivery-showcase";
      label: string;
      summary: string;
      items: {
        title: string;
        description?: string;
        descriptionHtml?: string;
        images: string[];
        imageBg?: string;
        align: "left" | "right";
      }[];
    };

export interface Project {
  id: string;
  name?: string;
  title: string;
  tagline: string;
  description: string;
  note?: string;
  fullDescription: string;
  role: string;
  timeline?: string;
  team?: string;
  platform?: string;
  tech: string[];
  features: string[];
  challenges: string;
  results?: string;
  images: {
    thumbnail: string;
    hero: string;
    gallery: string[];
  };
  links: {
    live?: string;
    github: string;
  };
  featured: boolean;
  date: string;
  sections?: ProjectSection[];
}
