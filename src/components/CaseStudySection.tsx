import type { ProjectSection } from "../types/project";

interface Props {
  section: ProjectSection;
}

export default function CaseStudySection({ section }: Props) {
  switch (section.type) {
    case "divider":
      return (
        <div className="mx-auto max-w-[926px] px-6">
          <hr className="border-divider" />
        </div>
      );

    case "image":
      return (
        <div className="mx-auto max-w-[926px] px-6">
          <div className={`overflow-hidden rounded-2xl ${section.imageBg ?? ""}`}>
            <img
              src={section.src}
              alt={section.alt ?? ""}
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      );

    case "image-pair":
      return (
        <div className="mx-auto max-w-[926px] px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {section.images.map((img, i) => (
              <div
                key={i}
                className="aspect-[3/2] overflow-hidden rounded-2xl bg-sand-300"
              >
                <img
                  src={img}
                  alt={section.alts?.[i] ?? ""}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      );

    case "stats":
      return (
        <div className="mx-auto max-w-[926px] px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {section.items.map((item, i) => (
              <div key={i}>
                <p className="text-sm uppercase tracking-widest text-sand-700">
                  {item.label}
                </p>
                <p className="mt-2 font-[Spectral] text-[clamp(3rem,5vw,5rem)] font-extrabold italic leading-none">
                  {item.value}
                </p>
                <p className="mt-2 text-base leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "text-columns":
      return (
        <div className="mx-auto max-w-[926px] px-6">
          <p className="text-sm uppercase tracking-widest text-sand-700">
            {section.label}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10">
            {section.columns.map((col, i) => (
              <ul key={i} className="list-disc space-y-3 pl-6">
                {col.map((item, j) => (
                  <li key={j} className="text-base leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      );

    case "text-block":
      return (
        <div className="mx-auto max-w-[926px] px-6">
          <p className="text-sm uppercase tracking-widest text-sand-700">
            {section.label}
          </p>
          <p
            className={`mt-6 max-w-[636px] text-xl leading-[1.5] md:text-2xl md:leading-[1.4] ${section.textColor ?? "text-sage-800"}`}
          >
            {section.text}
          </p>
        </div>
      );

    case "bullet-columns":
      return (
        <div className="mx-auto max-w-[926px] px-6">
          <p className="text-sm uppercase tracking-widest text-sand-700">
            {section.label}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10">
            {section.columns.map((col, i) => (
              <ul key={i} className="list-disc space-y-3 pl-6">
                {col.map((item, j) => (
                  <li key={j} className="text-base leading-6">
                    <span className="font-bold">{item.bold}</span>
                    {item.text && ` ${item.text}`}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      );

    case "staggered-gallery":
      return (
        <div className="mx-auto max-w-[926px] px-6">
          <p className="text-sm uppercase tracking-widest text-sand-700">
            {section.label}
          </p>
          <div className="mt-10 space-y-16">
            {section.items.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-8 md:flex-row md:items-start md:gap-10 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`aspect-[636/354] overflow-hidden rounded-2xl md:flex-[636] ${item.imageBg ?? "bg-sand-300"}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4 md:flex-[250]">
                  <p className="font-bold text-base leading-[1.3]">
                    {item.title}
                  </p>
                  {item.descriptionHtml ? (
                    <div
                      className="space-y-4 text-base leading-6 [&_.text-sand-700]:text-sand-700"
                      dangerouslySetInnerHTML={{
                        __html: item.descriptionHtml,
                      }}
                    />
                  ) : (
                    <p className="text-base leading-6">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "flow-steps":
      return (
        <div className="mx-auto max-w-[926px] px-6">
          <div className="flex items-center justify-center gap-10 rounded-2xl bg-sand-300 py-16">
            {section.steps.map((step, i) => (
              <span key={i} className="contents">
                <span className="font-[Spectral] text-[clamp(2rem,5vw,4rem)] font-extrabold italic leading-[1.2]">
                  {step}
                </span>
                {i < section.steps.length - 1 && (
                  <span className="text-2xl text-sand-800">&rarr;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      );

    case "approach":
      return (
        <div className="mx-auto max-w-[926px] space-y-16 px-6">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-sand-700">
              {section.label}
            </p>
            {section.pullQuote ? (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="space-y-4 text-base leading-6">
                  {section.description.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <p className="font-[Spectral] text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold italic leading-[1.3] text-sage-800">
                  {section.pullQuote}
                </p>
              </div>
            ) : (
              <p className="max-w-[636px] text-xl leading-[1.5] text-sage-800 md:text-2xl md:leading-[1.4]">
                {section.description}
              </p>
            )}
          </div>
          {section.cards.length > 0 && (
            <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
              {section.cards.map((card, i) => (
                <div key={i} className="space-y-8">
                  {card.image && (
                    <div className="aspect-[3/2] overflow-hidden rounded-2xl bg-sand-300">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-widest">
                      {card.title}
                    </p>
                    {card.descriptionHtml ? (
                      <div
                        className="text-base leading-6 [&_li]:mb-1 [&_li]:ml-6 [&_ul]:mt-2 [&_ul]:list-disc"
                        dangerouslySetInnerHTML={{
                          __html: card.descriptionHtml,
                        }}
                      />
                    ) : (
                      <p className="text-base leading-6">{card.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case "insights":
      return (
        <div className="mx-auto max-w-[926px] space-y-16 px-6">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-sand-700">
              {section.label}
            </p>
            <p className="max-w-[636px] text-xl leading-[1.5] text-sage-800 md:text-2xl md:leading-[1.4]">
              {section.summary}
            </p>
          </div>
          <div className="mx-auto max-w-[734px] space-y-3">
            {section.cards.map((card, i) => (
              <div key={i} className="space-y-2 rounded-2xl bg-sand-200 px-6 py-4">
                <p className="text-base font-bold leading-none">{card.title}</p>
                <p className="text-base leading-6">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "delivery":
      return (
        <div className="mx-auto max-w-[926px] space-y-16 px-6">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-sand-700">
              {section.label}
            </p>
            <p className="max-w-[636px] text-xl leading-[1.5] text-sage-800 md:text-2xl md:leading-[1.4]">
              {section.summary}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {section.items.map((item, i) => (
              <div key={i} className="space-y-8">
                {item.image && (
                  <div className={`aspect-[3/2] overflow-hidden rounded-2xl ${item.imageBg ?? "bg-sand-300"}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-widest">
                    {item.title}
                  </p>
                  {item.descriptionHtml ? (
                    <div
                      className="text-base leading-6 [&_li]:mb-1 [&_li]:ml-6 [&_ul]:mt-2 [&_ul]:list-disc"
                      dangerouslySetInnerHTML={{
                        __html: item.descriptionHtml,
                      }}
                    />
                  ) : (
                    <p className="text-base leading-6">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "image-content":
      return (
        <div className="mx-auto max-w-[926px] space-y-10 px-6">
          <div
            className={`overflow-hidden rounded-2xl ${section.imageBg ?? ""}`}
          >
            <img
              src={section.image}
              alt={section.title ?? ""}
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            {section.title && (
              <p className="text-base font-bold leading-[1.3]">
                {section.title}
              </p>
            )}
            <div
              className={`gap-10 ${
                section.columns.length > 1
                  ? "grid grid-cols-1 md:grid-cols-2"
                  : "max-w-[636px]"
              }`}
            >
              {section.columns.map((col, i) => (
                <div key={i} className="space-y-4">
                  {col.map((para, j) => (
                    <p
                      key={j}
                      className={`text-base leading-6 ${para.muted ? "text-sand-700" : ""}`}
                    >
                      {para.text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "delivery-showcase":
      return (
        <div className="mx-auto max-w-[926px] space-y-16 px-6">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-sand-700">
              {section.label}
            </p>
            <p className="max-w-[636px] text-xl leading-[1.5] text-sage-800 md:text-2xl md:leading-[1.4]">
              {section.summary}
            </p>
          </div>
          <div className="space-y-16">
            {section.items.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-8 md:flex-row md:items-start md:gap-10 ${
                  item.align === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="space-y-10 md:flex-[636]">
                  {item.images.map((img, j) => (
                    <div
                      key={j}
                      className={`aspect-[636/354] overflow-hidden rounded-2xl ${item.imageBg ?? "bg-sand-300"}`}
                    >
                      <img
                        src={img}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-4 md:flex-[250]">
                  <p className="font-bold text-base leading-[1.3]">
                    {item.title}
                  </p>
                  {item.descriptionHtml ? (
                    <div
                      className="space-y-4 text-base leading-6 [&_.text-sand-700]:text-sand-700 [&_li]:mb-1 [&_li]:ml-6 [&_ul]:mt-2 [&_ul]:list-disc"
                      dangerouslySetInnerHTML={{
                        __html: item.descriptionHtml,
                      }}
                    />
                  ) : (
                    <p className="text-base leading-6">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
