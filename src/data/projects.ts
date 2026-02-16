import type { Project } from "../types/project";
import kitchThumbnail from "../assets/projects/kitch/kitch-thumbnail.png";
import kitchHero from "../assets/projects/kitch/kitch-hero.png";
import kitchMiddleScreens from "../assets/projects/kitch/middle-screens.png";
import kitchJourneys from "../assets/projects/kitch/journeys.png";
import kitchResearch from "../assets/projects/kitch/research.png";
import kitchCustomerWaiter from "../assets/projects/kitch/customer-waiter-screens.png";
import kitchDesktopManagement from "../assets/projects/kitch/desktop-management.png";
import workbenchThumbnail from "../assets/projects/workbench/workbench-thumbnail.png";
import workbenchHero from "../assets/projects/workbench/workbench-hero.png";
import wbOverallScreens from "../assets/projects/workbench/overall-screens.png";
import wbSurveys from "../assets/projects/workbench/surveys.png";
import wbData from "../assets/projects/workbench/data.png";
import wbOnboarding from "../assets/projects/workbench/onboarding.png";
import wbTips from "../assets/projects/workbench/tips.png";
import wbGovernance from "../assets/projects/workbench/governance.png";
import wbHierarchy from "../assets/projects/workbench/hierarchy.png";
import wbComponent from "../assets/projects/workbench/component.png";
import wbResources from "../assets/projects/workbench/resources.png";
import bounceDashboardThumbnail from "../assets/projects/bounce/bounce-dashboard-thumbnail.png";
import bounceDashboardHero from "../assets/projects/bounce/bounce-dashboard-hero.png";
import bdOverallScreens from "../assets/projects/bounce/dashboard/overall-screens.png";
import bdOldStores from "../assets/projects/bounce/dashboard/old-stores.png";
import bdOldBookings from "../assets/projects/bounce/dashboard/old-bookings.png";
import bdOldNavigation from "../assets/projects/bounce/dashboard/old-navigation.png";
import bdData from "../assets/projects/bounce/dashboard/data.png";
import bdFeedback from "../assets/projects/bounce/dashboard/feedback.png";
import bdNavigation from "../assets/projects/bounce/dashboard/navigation.png";
import bdBookingsNew from "../assets/projects/bounce/dashboard/bookings-new.png";
import bdSignageNew from "../assets/projects/bounce/dashboard/signage-new.png";
import bdHoursNew from "../assets/projects/bounce/dashboard/hours-new.png";
import bdReviewsNew from "../assets/projects/bounce/dashboard/reviews-new.png";
import bdEarningsNew from "../assets/projects/bounce/dashboard/earnings-new.png";
import bounceOnboardingThumbnail from "../assets/projects/bounce/bounce-onboarding-thumbnail.png";
import bounceOnboardingHero from "../assets/projects/bounce/bounce-onboarding-hero.png";
import boNewSignup from "../assets/projects/bounce/onboarding/new-signup.png";
import boNewLogin from "../assets/projects/bounce/onboarding/new-login.png";
import boNewConfig from "../assets/projects/bounce/onboarding/new-config.png";
import boJourneys from "../assets/projects/bounce/onboarding/journeys.png";
import boInterviews from "../assets/projects/bounce/onboarding/interviews.png";
import boActivation from "../assets/projects/bounce/onboarding/activation.png";
import boDashboard from "../assets/projects/bounce/onboarding/dashboard.png";
import boWelcomeKit from "../assets/projects/bounce/onboarding/welcome-kit.png";
import vppThumbnail from "../assets/projects/vpp/vpp-thumbnail.png";
import vppHero from "../assets/projects/vpp/vpp-hero.png";

function placeholder(label: string, color: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <rect fill="${color}" width="1200" height="800"/>
    <text x="600" y="400" text-anchor="middle" dominant-baseline="central"
      font-family="Inter,system-ui,sans-serif" font-size="32" fill="rgba(45,25,9,0.3)">
      ${label}
    </text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const projects: Project[] = [
  {
    id: "bounce-partner-dashboard",
    name: "Partner Portal",
    title: "Optimising dashboards for partner efficiency",
    tagline: "Bounce",
    description:
      "Redesigned key parts of the Bounce Partner Portal around a workflow-led dashboard so partners could find bookings fast, take action with confidence, and resolve issues without digging through nested screens. The work prioritised speed, clarity, and performance in the moments that matter most: check-in, pickup, and handling exceptions.",
    fullDescription: "",
    role: "Product Designer & Product Manager",
    timeline: "Over 2 years",
    team: "4 Engineers, 1 Product Manager",
    platform: "Web, Mobile app",
    tech: [],
    features: [],
    challenges: "",
    images: {
      thumbnail: bounceDashboardThumbnail,
      hero: bounceDashboardHero,
      gallery: [],
    },
    links: {
      github: "https://github.com",
    },
    featured: true,
    date: "2025",
    sections: [
      {
        type: "image",
        src: bdOverallScreens,
        alt: "Bounce Partner Portal screens overview",
        imageBg: "",
      },
      {
        type: "stats",
        items: [
          {
            label: "Bookings checked in",
            value: "~72%",
            description: "Previously: ~63%",
          },
          {
            label: "Partners with signage",
            value: "61%",
            description: "Previously: ~40%",
          },
          {
            label: "Payment support tickets",
            value: "8.5%",
            description: "Previously: ~15%",
          },
        ],
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Context",
        text: "Bounce Partner Portal had grown feature by feature without a clear structure. New fixes were layered onto old screens, making it harder to navigate, slower, and inconsistent. Partners felt it most when a customer was standing in front of them.",
      },
      {
        type: "bullet-columns",
        label: "Problem",
        columns: [
          [
            {
              bold: "Critical info was hard to find.",
              text: "Reviews and performance signals were buried in a crowded page with unrelated content.",
            },
            {
              bold: "Check-in and check-out weren\u2019t resilient.",
              text: "Common real-world scenarios (like forgetting steps or missing info) made the flow fragile and hard to recover from.",
            },
            {
              bold: "Key setup flows were easy to get wrong.",
              text: "Configuring opening hours (and exceptions) felt confusing and risky.",
            },
          ],
          [
            {
              bold: "Partners had no self-serve tools for signage.",
              text: "Ordering signage required support every time, slowing down partners and creating avoidable tickets.",
            },
            {
              bold: "Partners couldn\u2019t trust their earnings.",
              text: "Payouts, monthly earnings, and commissions didn\u2019t clearly match, so partners had to guess or contact support.",
            },
          ],
        ],
      },
      { type: "divider" },
      {
        type: "staggered-gallery",
        label: "How it was before",
        items: [
          {
            image: bdOldStores,
            imageBg: "bg-warm",
            title: "Managing store information",
            description:
              "Partners had a single, catch-all entry point for everything store-related: profile details, business hours, reviews, and signage. Too many unrelated tasks lived in the same place, so finding the right setting meant clicking deep into screens. It also made it hard to expand the platform when we needed more flexible configurations.",
          },
          {
            image: bdOldBookings,
            imageBg: "bg-warm",
            title: "Managing upcoming bookings",
            description:
              "The bookings view didn\u2019t support quick scanning. Information was dense, type was small, and hierarchy wasn\u2019t doing its job. Banners were overused, which buried the truly urgent actions. When volume was high, reaching a specific booking often meant long, manual scrolling.",
          },
          {
            image: bdOldNavigation,
            imageBg: "bg-warm",
            title: "Navigation was not scalable",
            descriptionHtml:
              '<p>The top horizontal navigation worked when the portal was small, but it didn\u2019t scale as new workflows were added. Tasks became harder to find and harder to group in a way that matched how partners actually work.</p><p>On top of that, too much of the experience lived inside stacked modals, which hurt usability and performance.</p><p class="text-sand-700">This mattered because around 30% of partners used the portal on desktop, where navigation and information density make or break speed.</p>',
          },
        ],
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Approach",
        text: "Because this work spanned multiple releases over two years, the process wasn\u2019t a single \u201Cdesign sprint.\u201D It was an ongoing cycle of discovery, decision-making, and iteration, repeated as new partner needs and platform constraints surfaced.",
      },
      {
        type: "image-content",
        image: bdData,
        title: "Use recurring signals from support, ops, and data",
        columns: [
          [
            {
              text: "We treated support conversations, ops feedback, and product analytics as continuous discovery inputs. Patterns in tickets and partner feedback helped us prioritise what to solve next and where confusion was coming from.",
            },
          ],
          [
            {
              text: "Alongside data analysis, we kept a regular cadence of partner conversations and in-person visits. We spent time at partner locations to observe how luggage storage fits into their day, spot friction they wouldn\u2019t necessarily report, and find small changes that could make their workflow easier.",
            },
          ],
        ],
      },
      {
        type: "image-content",
        image: bdFeedback,
        imageBg: "bg-sage-50",
        title: "Test prototypes and continuous feedback",
        columns: [
          [
            {
              text: "For more complex flows, we prototyped early and tested with partners before committing to build. The goal was to catch misunderstandings fast and make sure the solution worked in real store conditions, not just in a calm demo.",
            },
            {
              text: "We intentionally tested with both power users and newer partners, so the experience held up for people with very different levels of familiarity.",
            },
          ],
          [
            {
              text: "To create recurrent opportunities for partner feedback we also implemented an entry point inside the Partner Portal for them to book a call with us whenever they wanted to chat and share their ideas.",
            },
            {
              text: "All of the feedback and ideas tested were incrementally implemented to gather feedback and data as soon as possible so that we could pivot fast and keep improving our engagement metrics.",
              muted: true,
            },
          ],
        ],
      },
      { type: "divider" },
      {
        type: "delivery-showcase",
        label: "Delivery",
        summary:
          "Over two years, we shipped a set of connected improvements that turned the portal from a feature-led product into a workflow-led one. The goal wasn\u2019t to redesign everything at once. It was to make the daily partner tasks faster, clearer, and easier to recover when something goes wrong, while creating a structure that could scale with new features.",
        items: [
          {
            title:
              "Vertical navigation for desktop and mobile standardisation",
            descriptionHtml:
              '<p>We replaced the top horizontal navigation with a vertical nav that works consistently across desktop and mobile. This created clearer information architecture, made room for the portal to grow, and reduced the \u201Cwhere do I go for this?\u201D friction.</p><p>It also standardised patterns across platforms, especially for second-level navigation and when to use pages versus modals, so partners didn\u2019t have to relearn the product depending on the device.</p><p class="text-sand-700">All new components were also implemented in the Design System.</p>',
            images: [bdNavigation],
            imageBg: "bg-sage-50",
            align: "left" as const,
          },
          {
            title: "Simpler Bookings page with a clear main action",
            descriptionHtml:
              "<p>We redesigned the Bookings experience to support quick scanning and high volume. Information hierarchy was rebuilt around what matters most in the moment: quick actions to check in, what\u2019s happening now, what needs action, and what\u2019s at risk.</p><p>We reduced banner noise, improved readability, and introduced faster paths to reach a specific booking (search and filter) so partners could check customers in and out without digging.</p>",
            images: [bdBookingsNew],
            imageBg: "bg-sage-50",
            align: "right" as const,
          },
          {
            title: "Focused pages to manage Signage, Hours, and Reviews",
            descriptionHtml:
              '<p>Instead of cramming operational tools into one catch-all page, we split them into focused, task-based pages.</p><p>Each area now has its own clear purpose and UI patterns that match the job:</p><ul><li><strong>Signage:</strong> self-serve ordering and clear status updates, reducing dependence on support.</li><li><strong>Store &amp; Hours:</strong> a cleaner setup where partners manage store details and hours in one focused place, without extra clutter. Hours now show what\u2019s currently active, including exceptions, so partners can quickly verify settings instead of guessing.</li><li><strong>Reviews:</strong> a dedicated space to view feedback clearly, without competing with unrelated content. Partners can quickly understand how they\u2019re performing over time and what\u2019s driving their rating. It also allowed us to add practical guidance on how to improve, based on the patterns we saw in reviews.</li></ul>',
            images: [bdSignageNew, bdHoursNew, bdReviewsNew],
            imageBg: "bg-sage-50",
            align: "left" as const,
          },
          {
            title: "A clearer view of earnings",
            descriptionHtml:
              "<p>We broke revenue into simple, scannable sections so partners could understand what they earned, what was still processing, and what was available for payout.</p><p>Partners could also download payout receipts and see how payout cycles work, including upcoming payouts and any changes that required action.</p>",
            images: [bdEarningsNew],
            imageBg: "bg-sage-50",
            align: "right" as const,
          },
        ],
      },
    ],
  },
  {
    id: "bounce-onboarding",
    name: "Partner Onboarding",
    title: "Redesigning Partner onboarding to drive activation",
    tagline: "Bounce",
    description:
      "Redesigned Bounce\u2019s partner onboarding to help new partners reach their first successful booking faster and with fewer drop-offs. The work focused on making the setup steps clearer, reducing time-to-value, and guiding partners through the critical actions needed to go live with confidence.",
    fullDescription: "",
    role: "Product Designer",
    timeline: "6 months",
    team: "3 Engineers, 1 Product Owner",
    platform: "Web, Mobile app",
    tech: [],
    features: [],
    challenges: "",
    images: {
      thumbnail: bounceOnboardingThumbnail,
      hero: bounceOnboardingHero,
      gallery: [],
    },
    links: {
      github: "https://github.com",
    },
    featured: true,
    date: "2023",
    sections: [
      {
        type: "image",
        src: boNewSignup,
        alt: "Bounce partner onboarding new signup screens",
        imageBg: "",
      },
      {
        type: "stats",
        items: [
          {
            label: "Time to go live",
            value: "1 day",
            description: "Previously: 2-5 days",
          },
          {
            label: "Time to first booking",
            value: "4 days",
            description: "Previously: 2-3 weeks",
          },
          {
            label: "Onboarding completion",
            value: "~80%",
            description: "Previously: ~20%",
          },
        ],
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Context",
        text: "Bounce is a luggage storage marketplace that lets travellers store their bags for a few hours or a few days while they explore the city. Partners (local stores) use the partner portal to manage bookings, check customers in and out, handle store hours, and follow bounce policies.",
      },
      {
        type: "image-pair",
        images: [boNewLogin, boNewConfig],
      },
      {
        type: "bullet-columns",
        label: "Problem",
        columns: [
          [
            {
              bold: "Partner profiles were incomplete or inaccurate.",
              text: "Key details like address, contacts, and directions were missing or wrong, which created operational issues and hurt customer trust.",
            },
            {
              bold: "No guidance once inside the portal.",
              text: "After sign up, partners weren\u2019t told what to do first, what mattered most, or how to finish setup.",
            },
            {
              bold: "Go-live status was unclear.",
              text: "Partners didn\u2019t know if they were live, still in review, or on a waitlist, which led to anxiety and follow-ups.",
            },
          ],
          [
            {
              bold: "Communication was inconsistent.",
              text: "There wasn\u2019t a clear sequence of messages and updates, so partners didn\u2019t know what was happening or what to expect next.",
            },
            {
              bold: "No clear next steps after setup.",
              text: "Even when partners completed key steps, there wasn\u2019t a strong handoff into \u201Chow to run your first booking\u201D or explore the tools.",
            },
            {
              bold: "Partners weren\u2019t set up for success in-store.",
              text: "Many launched without signage, which reduced walk-ins and created confusion at drop-off.",
            },
          ],
        ],
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Approach",
        text: "This was an ongoing loop of aligning with internal teams, learning from partners, shipping improvements, and coming back to validate what changed. The work moved back and forth between discovery, prototyping, and delivery so we could keep tight feedback loops while making onboarding clearer, more reliable, and easier to complete.",
      },
      {
        type: "image-content",
        image: boJourneys,
        title: "Understand friction points and map the entire journey",
        columns: [
          [
            {
              text: "We needed a clear picture of how partner onboarding was working in practice: where teams were spending time, where handoffs broke down, and what was slowing partners down.",
            },
            {
              text: 'So we ran workshops with every team involved in onboarding and aligned on what "successful onboarding" means, what information is truly required to go live, and what can wait until later.',
            },
          ],
          [
            {
              text: "In parallel, we wanted to understand the partner experience first-hand. We spoke with both new and long-term partners to learn how they found bounce, what they expected from the process, and where they got stuck in their early days.",
            },
            {
              text: "These interviews helped us map the real journey, not just the one we assumed we had.",
            },
          ],
        ],
      },
      {
        type: "image-content",
        image: boInterviews,
        columns: [
          [
            {
              text: "We used the info gathered from those interviews and workshops to map the full onboarding journey and identified where partners needed proactive communication to reduce uncertainty and keep momentum.",
            },
            {
              text: "For each stage, we defined the trigger, the message goal, and the right channel, such as email for longer guidance, in-product messages for next steps, and push notifications for time-sensitive actions.",
            },
            {
              text: "This created a consistent communication plan so partners always knew what was happening and what to do next.",
            },
          ],
          [
            {
              text: "For bigger changes, we tested prototypes with both newer partners and experienced ones before shipping, since frequent changes can create confusion in an operational product.",
            },
            {
              text: "The focus was comprehension: do they understand what\u2019s required, what happens next, and when they\u2019ll start receiving customers?",
            },
          ],
        ],
      },
      { type: "divider" },
      {
        type: "insights",
        label: "Discovery / Key insights",
        summary:
          "Onboarding was inconsistent, key info was often missing, and partners weren\u2019t guided or kept informed after signup.",
        cards: [
          {
            title: "Onboarding quality depended on the sales rep",
            description:
              "Each rep followed their own process and shared different levels of guidance, which created large swings in partner readiness and early performance.",
          },
          {
            title:
              "Most missing or incorrect store info came from sales-sourced partners",
            description:
              "The sales flow optimised for speed to hit quotas, so critical details (address, contacts, directions, photos) were often rushed or skipped, and the problems surfaced later as customer confusion and support load.",
          },
          {
            title:
              "Supply onboarding wasn\u2019t treated as a first-class product experience",
            description:
              "The company was heavily optimised for the customer side, so partner onboarding lacked clear ownership, consistent standards, and the tooling needed for partners to self-serve.",
          },
          {
            title: "Partners had no lifecycle communication after signup",
            description:
              'Outside of the initial sales conversation, there were few updates to set expectations, confirm status, or guide next steps, which increased uncertainty and "am I live?" follow-ups.',
          },
        ],
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Delivery",
        text: "The outcome was a more consistent process across sales and inbound signups, with fewer gaps that turned into less customer confusion and support tickets.",
      },
      {
        type: "image-content",
        image: boActivation,
        imageBg: "bg-sage-50",
        title: "Standardised signup across inbound and outbound",
        columns: [
          [
            {
              text: 'We decided to align inbound and outbound onboarding into the same step-by-step signup, with a clear minimum set of information required to go live. Instead of relying on sales reps to gather and validate everything, partners entered the details directly, which improved data quality and reduced variability between reps.',
            },
          ],
          [
            {
              text: 'We also added storefront photos and "how to find us" directions into signup so customers could recognise the location and arrive with confidence.',
            },
            {
              text: 'This reduced "can\u2019t find the store" issues and improved the quality of listings at the moment customers decide to book.',
            },
          ],
        ],
      },
      {
        type: "image-content",
        image: boDashboard,
        imageBg: "bg-sage-50",
        title: "Guided setup in the portal with pending tasks",
        columns: [
          [
            {
              text: "We added guided moments inside the portal to explain core workflows and reduce early confusion. These would be triggered while the partner explored the app, prompting them to continue to explore.",
            },
            {
              text: 'We also introduced a "pending tasks" checklist that helped partners finish essential configurations and later acted as reminders for ongoing operational tasks.',
            },
            {
              text: "We eventually paused guided tours due to technical issues, but they proved valuable for reducing repeat questions during early weeks.",
              muted: true,
            },
          ],
          [
            {
              text: 'To accompany this guided approach we built a communication cadence that set expectations and kept partners moving: tutorials and help contacts, clear "you\u2019re live" updates, and next-step prompts tied to their stage.',
            },
            {
              text: "We also defined triggers for when partners needed intervention (like increased cancellations or drops), nudging action and reinforcing accountability.",
            },
          ],
        ],
      },
      {
        type: "image-content",
        image: boWelcomeKit,
        imageBg: "bg-sage-50",
        title: "Automatic welcome kit for go-live readiness",
        columns: [
          [
            {
              text: "We introduced an automatic welcome kit sent as soon as partners completed signup, so they were ready to operate and visible in-store from day one. For inbound signups, the kit was triggered after a quick location review to ensure coverage in the right POIs. Sales also started carrying signage to install it immediately after onboarding.",
            },
            {
              text: "We worked closely with the Brand Design team from the start to align on the content and make sure our offline materials clearly communicated what partners needed to know.",
              muted: true,
            },
          ],
        ],
      },
    ],
  },
  {
    id: "kitch-pay",
    name: "Kitch Pay",
    title: "Testing a new way to pay",
    tagline: "Kitch",
    description:
      "Designed a web-based pay-at-table experience that lets guests scan a QR code, review and split the bill, request an invoice, tip, and pay in seconds. In parallel, I designed a waiter-facing tool to manage tables and tips so the flow worked for restaurants, not just customers. The company closed before launch, but the work delivered a validated MVP scope and end-to-end designs ready for implementation.",
    note: "Note: Kitch closed before we could launch the product, so we didn\u2019t reach a public release.",
    fullDescription: "",
    role: "Product Designer",
    timeline: "3 months",
    team: "5 Engineers, 1 Product Owner",
    platform: "Web, Mobile app",
    tech: [],
    features: [],
    challenges: "",
    images: {
      thumbnail: kitchThumbnail,
      hero: kitchHero,
      gallery: [],
    },
    links: {
      github: "https://github.com",
    },
    featured: true,
    date: "2023",
    sections: [
      {
        type: "image",
        src: kitchMiddleScreens,
        alt: "Kitch Pay split and tip screens",
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Context",
        text: "Kitch pay is a web-based pay-at-table product that lets restaurant guests pay from their phones. Customers scan a QR code, see their bill, optionally split it, request an invoice, add a tip, and pay. In parallel, staff use a waiter-facing tool to manage tables and track tips, so the customer experience doesn\u2019t create extra work for the restaurant.",
      },
      {
        type: "flow-steps",
        steps: ["Scan", "Split", "Tip", "Pay"],
      },
      {
        type: "text-columns",
        label: "Problem",
        columns: [
          [
            "Paying the bill was slow and frustrating, especially when customers couldn\u2019t get the waiter\u2019s attention quickly.",
            "Payment often required multiple back-and-forth trips for missing items, changes, or questions, which extended table time.",
            "Requesting an invoice added extra delay, particularly for groups or when one invoice was needed across multiple people.",
          ],
          [
            "Existing flows didn\u2019t work well for groups splitting bills, which created confusion and coordination overhead.",
            "Restaurants needed a solution that improved speed without breaking their day-to-day workflow or tip management.",
          ],
        ],
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Approach",
        text: "We had more unknowns than knowns, so we treated discovery and design as one continuous loop. We started with a design sprint to validate viability, then iterated through research, prototyping, and delivery in tight cycles, even while implementation was underway.",
      },
      {
        type: "image-content",
        image: kitchJourneys,
        title:
          "Kick off with a Design Sprint and mapping of a possible journey",
        columns: [
          [
            {
              text: "Leadership brought the challenge and we used a sprint to quickly validate the concept, understand the riskiest assumptions, and decide if it was worth building.",
            },
          ],
          [
            {
              text: "After the sprint, I mapped the ideal end-to-end customer journey and translated it into early wireframes for an MVP we could realistically ship.",
            },
          ],
        ],
      },
      {
        type: "image-content",
        image: kitchResearch,
        title:
          "Deep research to reduce risk and iterate with real users",
        columns: [
          [
            {
              text: "We spent most of our time in research and documentation to understand the real context of use and common failure points. This included interviews with restaurant staff and customers, competitive analysis of pay-at-table patterns, user testing on key journey steps, \u201Cwhat if\u201D workshops with stakeholders to expand solution space, and pre-mortems with the full team to surface risks early.",
            },
          ],
          [
            {
              text: "We tested prototypes early, then trimmed and improved the flow based on what people actually did, not what they said. Even during implementation, we kept testing to catch issues quickly and adjust before they became expensive.",
            },
            {
              text: "Engineering was deeply involved throughout, which let us turn feedback into product changes fast and keep momentum between rounds of research.",
            },
          ],
        ],
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Delivery",
        text: "We designed the full product vision first, then reduced it to a focused MVP so the team could ship quickly while staying aligned on what the scalable future looked like.",
      },
      {
        type: "image-content",
        image: kitchCustomerWaiter,
        title:
          "Customer payment experience and a lightweight waiter experience",
        columns: [
          [
            {
              text: "We designed a mobile-first web flow that guides customers through scanning a QR code, reviewing the bill, selecting what to pay (including splitting), requesting an invoice, adding a tip, and completing payment without waiting.",
            },
          ],
          [
            {
              text: "To make the product adoptable for restaurants, we also designed a staff-facing tool to handle the operational side: table and payment status at a glance, refunds when needed, and a simple \u201Ctip jar\u201D view to track tips.",
            },
            {
              text: "This wasn\u2019t part of the MVP, but it was planned as the next iteration after launch.",
              muted: true,
            },
          ],
        ],
      },
      {
        type: "image-content",
        image: kitchDesktopManagement,
        title: "Management dashboard",
        columns: [
          [
            {
              text: "Managers mainly used desktop to review performance, so the management view was designed desktop-first. It gave a clear overview of orders and key signals, and was scoped as optional depending on the MVP timeline.",
            },
          ],
          [
            {
              text: "This view was not prioritised for the first iteration. The MVP was intentionally lean to get real-world usage data quickly, learn where behaviour diverged from expectations, and move into a second iteration with evidence instead of assumptions.",
            },
          ],
        ],
      },
    ],
  },
  {
    id: "mbio-workbench",
    name: "Workbench",
    title: "Building a Design System community",
    tagline: "Mercedes-Benz.io",
    description:
      "I led the community research and platform redesign for Workbench, the Mercedes-Benz design system, focused on reconnecting with its real users and improving adoption across product teams. The work reshaped the system to better bridge design and engineering, bringing clearer processes, stronger collaboration with developers, and increased community participation in the Design System.",
    fullDescription: "",
    role: "Lead Product Designer",
    timeline: "3 months",
    team: "2 Engineers, 1 Product Owner",
    platform: "Web",
    tech: [],
    features: [],
    challenges: "",
    images: {
      thumbnail: workbenchThumbnail,
      hero: workbenchHero,
      gallery: [],
    },
    links: {
      github: "https://github.com",
    },
    featured: true,
    date: "2021",
    sections: [
      {
        type: "image",
        src: wbOverallScreens,
        alt: "Workbench platform overview screens",
        imageBg: "",
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Context",
        text: "Workbench is Mercedes-Benz\u2019s Design System for digital products, used across teams and platforms throughout the organisation and the different markets.",
      },
      {
        type: "text-columns",
        label: "Problem",
        columns: [
          [
            "We didn\u2019t know who was using the Design System or how it was being used across products.",
            "Teams and the Design System team weren\u2019t aligned. They didn\u2019t know what we were building, and we didn\u2019t know what they needed.",
            "Designers contributed most, but developers used it most, and we weren\u2019t connected to them.",
          ],
          [
            "Documentation was split and hard to find, inconsistent, and often missing key implementation details.",
            "Many teams were still on old versions, and we couldn\u2019t track usage or guide upgrades.",
          ],
        ],
      },
      { type: "divider" },
      {
        type: "approach",
        label: "Approach",
        description:
          "When I joined the team, our first priority was to understand what was happening in the Workbench community: who was using the design system, how teams were using it in real projects, and where they were getting stuck.\n\nBefore joining, I\u2019d already spoken with both design and engineering and knew the platform had clear usability gaps. What we were missing was the full picture across roles and products, so I set out to gather that signal and align the team around it.",
        pullQuote:
          "\u201CWe didn\u2019t set out to redesign Workbench, we set out to reconnect with the community. Once we uncovered what was blocking adoption, the rebuild became the obvious next step.\u201D",
        cards: [],
      },
      {
        type: "image-content",
        image: wbSurveys,
        imageBg: "bg-sage-50",
        title: "Get to know our audience and audit the experience",
        columns: [
          [
            {
              text: "We ran a survey to identify our main user groups, how they relied on Workbench, and what success looked like for each role. One key insight: product owners had almost no connection to the platform, so we included them in our communication plan to improve visibility, alignment, and adoption.",
            },
            {
              text: "Using survey findings, we reviewed the entire platform and ran walkthrough sessions where users showed us how they searched for information and implemented components. This helped us map the common journey end to end and pinpoint the biggest blockers.",
            },
          ],
          [
            {
              text: "To set a bar for what \u201Cgood\u201D could look like, we benchmarked other mature Design Systems and documentation platforms. We used those insights to shape our hypotheses and prioritize design explorations based on what would move adoption and usability the most.",
            },
            {
              text: "As soon as we had early concepts, I tested them with Engineers, Product Owners, and Designers across multiple products. This kept us honest, validated our assumptions early, and ensured we were solving for the majority.",
            },
          ],
        ],
      },
      {
        type: "image",
        src: wbData,
        alt: "Workbench data analysis",
        imageBg: "bg-sage-50",
      },
      { type: "divider" },
      {
        type: "insights",
        label: "Discovery / Key insights",
        summary:
          "Workbench\u2019s core issues were unclear communication and onboarding, slow governance, and hard-to-use documentation.",
        cards: [
          {
            title:
              "Release info wasn\u2019t reaching the people building products",
            description:
              "Updates lived in scattered channels, so teams learned about changes late or not at all. This led to surprise breakages, duplicated work, and a growing trust gap between the system and product teams.",
          },
          {
            title: "No shared \u201Chow to use this\u201D baseline",
            description:
              "Without onboarding or clear usage rules, every team invented their own interpretation of components and patterns. That created inconsistent experiences and made reviews slower because there was no single source of truth to point to.",
          },
          {
            title:
              "Governance created a bottleneck and slowed the entire org",
            description:
              "The design system team owned documentation and final adjustments for contributed components, so contributions didn\u2019t scale. It reduced accountability for contributors and made the system feel like a service team instead of a shared product.",
          },
          {
            title:
              "The platform structure matched how it was built, not how people searched",
            description:
              "Users had to bounce between guidance and implementation docs to complete one task. The extra navigation wasn\u2019t just annoying, it increased mistakes because context was constantly lost during the back and forth.",
          },
          {
            title:
              "Version fragmentation was a real constraint, not just \u201Cteams not upgrading\u201D",
            description:
              "Some teams stayed on older versions due to tech stack differences and unsupported structures. We had to keep them working, but we also wanted to reduce this gap over time by making upgrades clearer, safer, and less expensive for teams.",
          },
        ],
      },
      { type: "divider" },
      {
        type: "delivery",
        label: "Delivery",
        summary:
          "We rebuilt Workbench around its community, making it easier to onboard, stay up to date, and contribute, alongside clearer navigation and documentation.",
        items: [
          {
            title: "Community first onboarding and communication",
            description:
              "We added clear starter content and onboarding sessions so new joiners and new teams could understand how to use Workbench from day one, without guessing or relying on tribal knowledge.",
            image: wbOnboarding,
            imageBg: "bg-sage-50",
          },
          {
            title: "Continuous communication with the community",
            description:
              "We created a simple cadence to make Workbench feel active and predictable: \u201Ctip of the week\u201D to surface helpful usage, and clear updates on releases and what we were working on next.",
            image: wbTips,
            imageBg: "bg-sage-50",
          },
          {
            title: "Clear contribution and governance models",
            description:
              "We simplified approvals, introduced a clear request model (icons, new components, change requests, documentation), and clarified ownership so contributors stayed accountable for what shipped.",
            image: wbGovernance,
            imageBg: "bg-sage-50",
          },
          {
            title:
              "Improved information architecture and documentation",
            description:
              "We rebuilt the information architecture to improve findability and consistency: a single sidebar, standardized component docs, dedicated sections (patterns, utilities, resources), cleaned up confusing content, and a version switcher so teams could view the docs that matched their implementation.",
            image: wbHierarchy,
            imageBg: "bg-sage-50",
          },
        ],
      },
      {
        type: "image",
        src: wbComponent,
        alt: "Workbench component documentation",
        imageBg: "bg-sage-50",
      },
      {
        type: "image",
        src: wbResources,
        alt: "Workbench resources page",
        imageBg: "bg-sage-50",
      },
    ],
  },
  {
    id: "mbio-vpp",
    name: "Vehicle Product Platform",
    title: "Building a dealer dashboard for self-serve vehicle publishing",
    tagline: "Mercedes-Benz.io",
    description:
      "Designed a desktop-first dashboard that gave Mercedes-Benz car dealers clear visibility into why vehicles weren\u2019t going live online and what to do about it. The goal was to reduce dependency on support by surfacing DMS-to-ecommerce errors in context and enabling dealers to fix issues quickly, so they could publish vehicles faster and sell with more confidence.",
    note: "Note: I transitioned off the product during implementation and, since the project was still under wraps, I didn\u2019t have access to post-launch data.",
    fullDescription: "",
    role: "Product Designer",
    timeline: "3 months",
    team: "3 Engineers, 1 Product Owner",
    platform: "Web",
    tech: [],
    features: [],
    challenges: "",
    images: {
      thumbnail: vppThumbnail,
      hero: vppHero,
      gallery: [],
    },
    links: {
      github: "https://github.com",
    },
    featured: true,
    date: "2020",
    sections: [
      {
        type: "image",
        src: placeholder("VPP — Dashboard Overview", "#84A98C"),
        alt: "Vehicle Product Platform dashboard overview",
      },
      { type: "divider" },
      {
        type: "text-block",
        label: "Context",
        text: "Vehicle listings were created and managed in a dealer management system (DMS) and synced to an e-commerce website. When something went wrong in that sync, dealers often didn\u2019t know their vehicle was blocked or why.",
      },
      {
        type: "image-pair",
        images: [
          placeholder("VPP — Context 1", "#84A98C"),
          placeholder("VPP — Context 2", "#6B8F73"),
        ],
      },
      {
        type: "text-columns",
        label: "Problem",
        columns: [
          [
            "Dealers couldn\u2019t tell when a vehicle failed to publish, or why it wasn\u2019t live.",
            "Errors between the DMS and the ecommerce site weren\u2019t surfaced at the right moment, so issues went unnoticed until a dealer checked manually or contacted support.",
          ],
          [
            "Dealers had no clear way to fix common issues on their own, creating heavy reliance on support for every problem.",
            "The previous design direction didn\u2019t align with the actual goal (reduce support load and unblock publishing), so we had to reset the approach when I joined the team.",
          ],
        ],
      },
      { type: "divider" },
      {
        type: "approach",
        label: "Approach",
        description:
          "I joined the team with a design direction already in motion, but we stepped back to realign on the goal and rebuild the foundation before committing to an MVP.",
        cards: [
          {
            title: "Reset and align with stakeholders",
            description:
              "Facilitated a stakeholder workshop to clarify the real problems, define success, and align on expectations. We used low-fi wireframes in the workshop to agree on the primary journey and user stories per step.",
            image: placeholder("VPP — Workshop", "#84A98C"),
          },
          {
            title: "Map the end-to-end user flow early",
            description:
              "Created an initial user flow to visualise the main paths, how features connected, and where information or technical feasibility was unclear. We reviewed and iterated on the flow with stakeholders throughout the project.",
            image: placeholder("VPP — User Flow", "#6B8F73"),
          },
          {
            title: "Research and benchmarking to fill knowledge gaps",
            description:
              "Because direct access to dealers was limited, I used research and benchmarking to understand DMS ecosystems, how dealerships manage stock, and how error states are typically communicated in similar platforms.",
            image: placeholder("VPP — Research", "#84A98C"),
          },
          {
            title:
              '\u201CGo rogue\u201D interviews to sanity-check assumptions',
            description:
              'To reduce the risk of solving the wrong problem, I interviewed a small set of dealers in Portugal to understand their workflows, what "going live" means operationally, and how they currently diagnose issues.',
            image: placeholder("VPP — Interviews", "#6B8F73"),
          },
          {
            title: "Design in lockstep with engineering",
            description:
              "I worked closely with the frontend engineer during implementation, iterating screen-by-screen to catch usability issues early, adjust structures quickly, and reduce rework.",
            image: placeholder("VPP — Engineering", "#84A98C"),
          },
        ],
      },
      { type: "divider" },
      {
        type: "delivery",
        label: "Delivery",
        summary:
          'The MVP focused on making vehicle status and blockers visible, with fast filtering and a clear "what\u2019s wrong" view that dealers could act on.',
        items: [
          {
            title: "Clear visibility into vehicle online status",
            description:
              "A stock overview that shows which vehicles are live, pending, or blocked, so dealers can immediately see what needs attention.",
            image: placeholder("VPP — Stock Overview", "#84A98C"),
          },
          {
            title: 'Error surfacing that explains "why"',
            description:
              "For vehicles that weren\u2019t live, the dashboard surfaced publishing errors and mismatches between the DMS and the ecommerce site in a way that was readable and actionable, reducing the guesswork that previously went to support.",
            image: placeholder("VPP — Errors", "#6B8F73"),
          },
          {
            title: "Desktop-first navigation and quick filters",
            description:
              "Because the product was desktop-only and data-heavy, the experience prioritised scannability: simple navigation, fast filters, and a layout that could handle large inventories without becoming overwhelming.",
            image: placeholder("VPP — Filters", "#84A98C"),
          },
          {
            title: "MVP scope and what came next",
            description:
              "Due to technical constraints, the MVP shipped focused on vehicle data and error visibility. The next iteration aimed to expand navigation, add onboarding, and support additional applications within the dashboard. I moved to another product before that second iteration was implemented, but the concepts were defined and in early exploration when I left.",
            image: placeholder("VPP — MVP", "#6B8F73"),
          },
        ],
      },
      {
        type: "image",
        src: placeholder("VPP — Final Design", "#84A98C"),
        alt: "Vehicle Product Platform final design",
      },
      {
        type: "image-pair",
        images: [
          placeholder("VPP — Detail 1", "#84A98C"),
          placeholder("VPP — Detail 2", "#6B8F73"),
        ],
      },
    ],
  },
];

export default projects;

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAdjacentProjects(
  id: string
): { prev: Project | undefined; next: Project | undefined } {
  const index = projects.findIndex((p) => p.id === id);
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
