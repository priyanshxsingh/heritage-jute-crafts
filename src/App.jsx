import { useState } from "react";
import {
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Recycle,
  Heart,
  HandHeart,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { SiPinterest } from "react-icons/si";

import heroImage from "./assets/heroImage.avif";
import heroImage1 from "./assets/heroImage1.avif";
import image2 from "./assets/promotional-bags.jpg";
import image3 from "./assets/shopping-bags.jpeg";
import image4 from "./assets/tote-bags.jpg";
import image5 from "./assets/sling-bags.jpeg";
import image6 from "./assets/crossbody-laptop-bags.jpg";
import image7 from "./assets/fanny-pack.jpg";

const collections = [
  {
    title: "Promotional Bags",
    description:
      "Give your brand a lasting impression with promotional bags designed for exhibitions, corporate events, trade fairs, conferences, and marketing campaigns. Custom branding and versatile designs help turn everyday bags into memorable brand ambassadors.",
    image: image2,
    number: "01",
  },
  {
    title: "Shopping Bags",
    description:
      "Make shopping more convenient with practical, reusable bags for groceries, retail purchases, and everyday errands. Designed to carry your essentials comfortably, these bags offer a useful alternative to disposable shopping bags while keeping style and functionality in mind.",
    image: image3,
    number: "02",
  },
  {
    title: "Tote Bags",
    description:
      "Discover versatile tote bags for college, work, shopping, travel, and daily outings. With spacious interiors and timeless styling, they offer room for your everyday essentials while complementing casual and contemporary looks.",
    image: image4,
    number: "03",
  },
  {
    title: "Sling Bags",
    description:
      "Carry your essentials comfortably with compact sling bags made for busy days and spontaneous outings. Their easy-to-carry design makes them suitable for shopping, sightseeing, casual meetups, and daily use when you want to travel light.",
    image: image5,
    number: "04",
  },
  {
    title: "Crossbody Laptop Bags",
    description:
      "Keep your workday essentials organised with crossbody laptop bags designed for students, professionals, and commuters. Their practical carrying style offers convenience on the move, with space for a laptop and other everyday accessories depending on the selected model.",
    image: image6,
    number: "05",
  },
  {
    title: "Fanny Packs",
    description:
      "Enjoy hands-free convenience with compact fanny packs for travel, festivals, walks, shopping, and weekend adventures. Keep smaller essentials close and accessible while moving around comfortably without carrying a larger bag.",
    image: image7,
    number: "06",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Naturally Thoughtful",
    description:
      "We celebrate jute, a versatile natural fibre, through products designed for everyday use.",
  },
  {
    icon: HandHeart,
    title: "Made with Care",
    description:
      "Every design is inspired by the beauty of craftsmanship and attention to detail.",
  },
  {
    icon: Recycle,
    title: "A Better Choice",
    description:
      "Discover reusable alternatives that help you make more considered everyday choices.",
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${
          light ? "text-[#d9c49a]" : "text-[#7b8750]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl md:text-5xl ${
          light ? "text-[#fff9ee]" : "text-[#273b2b]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base ${
            light ? "text-white/70" : "text-[#6f7167]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const interest = formData.get("interest");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Heritage Jute Craft enquiry from ${name}`,
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\nMessage:\n${message}`,
    );

    // Replace this placeholder with your real business email.
    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    event.currentTarget.reset();
  }

  const [activeCollection, setActiveCollection] = useState(0);

  const scrollCollections = (direction) => {
    const container = document.getElementById("collection-slider");
    if (!container) return;

    const card = container.querySelector("[data-collection-card]");
    if (!card) return;

    const gap = 24;
    const distance = card.getBoundingClientRect().width + gap;

    container.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  const handleCollectionScroll = () => {
    const container = document.getElementById("collection-slider");
    if (!container) return;

    const card = container.querySelector("[data-collection-card]");
    if (!card) return;

    const distance = card.getBoundingClientRect().width + 24;
    const nextIndex = Math.round(container.scrollLeft / distance);

    setActiveCollection(
      Math.max(0, Math.min(nextIndex, collections.length - 1)),
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf8f1] font-sans text-[#273b2b]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#e9e3d6] bg-[#fbf8f1]/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={closeMenu}
            aria-label="Heritage Jute Craft home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#344c35] text-[#e9d7a9]">
              <Leaf size={23} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-serif text-lg font-semibold leading-tight sm:text-xl">
                Heritage
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#7b8750] sm:text-[10px]">
                Jute Craft
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Home", "#home"],
              ["Our Story", "#story"],
              ["Collections", "#collections"],
              ["Our Craft", "#craft"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-[#555c4d] transition hover:text-[#829052]"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#344c35] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#496348] md:flex"
          >
            Start an Enquiry <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#e9e3d6] bg-[#fbf8f1] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-1">
              {[
                ["Home", "#home"],
                ["Our Story", "#story"],
                ["Collections", "#collections"],
                ["Our Craft", "#craft"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm transition hover:bg-[#eee8d9]"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#344c35] px-5 py-3 text-sm font-semibold text-white"
              >
                Start an Enquiry <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative isolate flex min-h-[620px] items-center sm:min-h-[680px]"
        >
          <div className="absolute inset-0 -z-20">
            <img
              src={heroImage}
              alt="Natural textures and handcrafted design inspiration"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17291e]/90 via-[#17291e]/70 to-[#17291e]/20" />

          <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs tracking-wide text-white backdrop-blur-sm">
                <Leaf size={14} />
                Rooted in tradition, shaped by skilled hands
              </div>

              <h1 className="font-serif text-5xl leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Woven by hand.
                <br />
                <span className="italic text-[#e4d2a3]">Inspired by</span>
                <br />
                nature.
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                Behind every jute creation is the skill of artisans who
                transform a humble natural fibre into something beautiful and
                purposeful. Through traditional craftsmanship and thoughtful
                design, we celebrate the people, textures, and heritage woven
                into every piece.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#collections"
                  className="inline-flex items-center gap-3 rounded-full bg-[#e4d2a3] px-6 py-4 text-sm font-semibold text-[#273b2b] transition hover:bg-white"
                >
                  Explore Collections <ArrowRight size={17} />
                </a>

                <a
                  href="#story"
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Meet Our Story
                </a>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/25 pt-6 text-xs text-white/80 sm:gap-x-12">
                <span className="flex items-center gap-2">
                  <Leaf size={15} className="text-[#e4d2a3]" />
                  Natural jute fibre
                </span>

                <span className="flex items-center gap-2">
                  <Heart size={15} className="text-[#e4d2a3]" />
                  Artisan craftsmanship
                </span>

                <span className="flex items-center gap-2">
                  <Recycle size={15} className="text-[#e4d2a3]" />
                  Thoughtful design
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 hidden text-xs tracking-[0.2em] text-white/70 [writing-mode:vertical-rl] md:block">
            CRAFTED WITH NATURE IN MIND
          </div>
        </section>

        {/* Collections */}
        <section
          id="collections"
          className="scroll-mt-24 overflow-hidden bg-[#f0eadc] px-5 py-16 sm:px-8 sm:py-24 lg:px-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#7b8750]">
                  Find your favourite
                </p>

                <h2 className="font-serif text-3xl leading-tight text-[#273b2b] sm:text-4xl md:text-5xl">
                  Collections with character
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#6f7167] sm:text-base">
                  Thoughtfully designed bags for everyday journeys, business
                  essentials, shopping, travel, and everything in between. Find
                  a style that fits your life.
                </p>
              </div>

              <div className="hidden shrink-0 items-center gap-3 sm:flex">
                <button
                  type="button"
                  onClick={() => scrollCollections(-1)}
                  aria-label="Previous collection"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c8c8b7] text-[#344c35] transition duration-300 hover:border-[#344c35] hover:bg-[#344c35] hover:text-white active:scale-95"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={() => scrollCollections(1)}
                  aria-label="Next collection"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#344c35] text-white transition duration-300 hover:bg-[#506749] active:scale-95"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                id="collection-slider"
                onScroll={handleCollectionScroll}
                className="
    flex gap-4 md:gap-6
    overflow-x-auto
    snap-x snap-mandatory
    scroll-smooth
    scrollbar-hide
    px-4 sm:px-6
  "
              >
                {collections.map((item, index) => (
                  <article
                    key={item.number}
                    data-collection-card
                    className="
                    group relative
    w-[calc(100vw-40px)]
    min-w-[calc(100vw-40px)]
    sm:w-[calc(100vw-64px)]
    sm:min-w-[calc(100vw-64px)]
    md:w-[calc((100%-48px)/3)]
    md:min-w-[calc((100%-48px)/3)]
    snap-start
    overflow-hidden
    rounded-[28px]
    border border-[#e5dece]
    bg-[#faf8f1]
    p-5 sm:p-6 md:p-8
  "
                  >
                    <a
                      href="#contact"
                      aria-label={`Enquire about ${item.title}`}
                      className="block"
                    >
                      <div className="relative m-3 mb-0 overflow-hidden rounded-xl bg-[#e7e0d2]">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          draggable="false"
                          className="w-full
    aspect-square
    object-cover
    rounded-[22px]
  "
                        />

                        <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-[#fbf8f1]/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#344c35] backdrop-blur-sm">
                          COLLECTION {item.number}
                        </span>

                        <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#fbf8f1] text-[#344c35] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>

                      <div className="p-5 pt-5 sm:p-6">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-serif text-xl leading-snug text-[#273b2b] sm:text-2xl">
                            {item.title}
                          </h3>
                          <span className="mt-1 shrink-0 text-xs text-[#8b8b79]">
                            {item.number}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-[#77776a]">
                          {item.description}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-[#e7e0d2] pt-4">
                          <span className="text-xs font-semibold text-[#526744]">
                            Enquire now
                          </span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9d8c9] text-[#344c35] transition duration-300 group-hover:border-[#344c35] group-hover:bg-[#344c35] group-hover:text-white">
                            <ArrowRight size={15} />
                          </span>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between sm:hidden">
                <p className="text-xs text-[#77776a]">
                  <span className="font-semibold text-[#344c35]">
                    {String(activeCollection + 1).padStart(2, "0")}
                  </span>
                  {" / "}
                  {String(collections.length).padStart(2, "0")}
                  <span className="ml-2">· Swipe to explore</span>
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => scrollCollections(-1)}
                    aria-label="Previous collection"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8c8b7] bg-[#fbf8f1] text-[#344c35] active:scale-95"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCollections(1)}
                    aria-label="Next collection"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#344c35] text-white active:scale-95"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-4 hidden items-center justify-center gap-2 sm:flex">
                {collections.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    aria-label={`Go to ${item.title}`}
                    onClick={() => {
                      const container =
                        document.getElementById("collection-slider");
                      const card = container?.querySelectorAll(
                        "[data-collection-card]",
                      )[index];

                      if (container && card) {
                        container.scrollTo({
                          left: card.offsetLeft - container.offsetLeft,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeCollection === index
                        ? "w-8 bg-[#344c35]"
                        : "w-2 bg-[#c8c8b7] hover:bg-[#8b9870]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 text-center sm:mt-14">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#344c35] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#506749] hover:shadow-lg active:scale-[0.98]"
              >
                Discuss Your Requirements <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* Story */}
        <section
          id="story"
          className="scroll-mt-24 px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <img
                src={heroImage1}
                alt="Creative materials and hands-on craft work"
                className="h-[390px] w-full rounded-sm object-cover sm:h-[520px]"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-3 max-w-[230px] bg-[#e8dfc9] p-5 sm:-right-6 sm:p-7">
                <p className="font-serif text-2xl italic text-[#344c35]">
                  Nature in every thread.
                </p>
                <p className="mt-2 text-xs leading-5 text-[#686b5d]">
                  A celebration of simple materials and thoughtful living.
                </p>
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#7b8750]">
                The story behind the craft
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Inspired by nature.
                <br />
                <span className="italic text-[#7b8750]">Made to be loved.</span>
              </h2>
              <p className="mt-7 text-sm leading-8 text-[#6f7167] sm:text-base">
                At Heritage Jute Craft, we believe everyday objects can be
                beautiful, useful, and more mindful. Our inspiration comes from
                the character of jute: its earthy texture, natural warmth, and
                remarkable versatility.
              </p>
              <p className="mt-4 text-sm leading-8 text-[#6f7167] sm:text-base">
                From carry bags to thoughtful gifts, our collection celebrates a
                material with a long tradition and a place in contemporary
                living. We bring together simple design ideas and a love for
                natural textures.
              </p>

              <a
                href="#craft"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#344c35] pb-2 text-sm font-semibold transition hover:gap-5"
              >
                Discover our approach <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* Craft video */}
        <section
          id="craft"
          className="scroll-mt-24 bg-[#263b2b] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="A closer look"
              title="The beauty of making"
              description="Explore the story, ideas, and inspiration behind the world of jute craft."
              light
            />

            <div className="mx-auto max-w-5xl overflow-hidden border border-white/15 bg-black shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/LZiodnlVfMM"
                  title="Heritage Jute Craft — craft inspiration"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-6 text-white/60">
              Discover the hands, traditions, and natural fibres behind every
              creation — a celebration of craftsmanship rooted in nature.
            </p>
          </div>
        </section>

        {/* Values */}

        <section className="px-6 py-10 sm:px-10 sm:py-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What we believe"
              title="The little things matter"
              description="Good design is about more than appearance. It is about the materials we choose, the way we use things, and the stories they carry."
            />

            <div className="mt-8">
              {values.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="flex gap-4 border-t border-[#dcd5c6] py-5 sm:gap-6 sm:py-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9e3d3] text-[#526744] sm:h-12 sm:w-12">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 sm:flex sm:items-start sm:gap-8">
                    <div className="sm:w-1/3 sm:shrink-0">
                      <p className="mb-1 text-[10px] tracking-[0.18em] text-[#8a8b7b]">
                        0{index + 1}
                      </p>
                      <h3 className="font-serif text-xl sm:text-2xl">
                        {title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#77776a] sm:mt-0 sm:flex-1 sm:pt-3">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote banner */}
        <section className="relative overflow-hidden bg-[#e7ddc7] px-6 py-16 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-10 -top-24 h-72 w-72 rounded-full border border-[#c6b99a]/60 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute -right-2 -top-16 h-56 w-56 rounded-full border border-[#c6b99a]/60 sm:h-80 sm:w-80" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Leaf className="mx-auto mb-6 text-[#788553]" size={30} />

            <p className="font-serif text-3xl leading-snug text-[#344c35] sm:text-4xl md:text-5xl">
              Crafted by hand,
              <br />
              <span className="italic">inspired by the earth.</span>
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[#76745f]">
              The Heritage Jute Crafts philosophy
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#7b8750]">
                Let's connect
              </p>
              
<h2 className="font-serif text-4xl leading-tight sm:text-5xl">
  Ready to
  <br />
  <span className="italic text-[#7b8750]">place an order?</span>
</h2>

              <p className="mt-6 max-w-md text-sm leading-8 text-[#77776a]">
                Looking for a particular product, corporate gifts, event
                merchandise, or a custom jute creation? Tell us what you have in
                mind and start a conversation.
              </p>

              <div className="mt-9 space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9e3d3]">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-[#898879]">Email</p>
                    <a
                      href="mailto:hello@heritagejutecraft.example"
                      className="mt-1 block text-sm font-medium hover:text-[#7b8750]"
                    >
                      hello@heritagejutecraft.example
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9e3d3]">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-[#898879]">Phone</p>
                    <a
                      href="tel:+9198765XXXXX"
                      className="mt-1 block text-sm font-medium hover:text-[#7b8750]"
                    >
                      +91 98765 XXXXX
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9e3d3]">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-[#898879]">Location</p>
                    <p className="mt-1 text-sm font-medium leading-6">
                      24 Park Street, Kolkata,
                      <br />
                      West Bengal 700016, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="border border-[#e5dece] bg-white p-6 sm:p-9"
            >
              <h3 className="font-serif text-2xl">Send an enquiry</h3>
              <p className="mt-2 text-sm text-[#77776a]">
                Tell us a little about what you are looking for.
              </p>

              {submitted && (
                <div
                  role="status"
                  className="mt-5 flex items-start gap-2 rounded-lg bg-[#edf3e7] p-4 text-sm text-[#344c35]"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  Your email app should open with your enquiry. If it did not,
                  check the email address configured in App.jsx.
                </div>
              )}

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-[#4c5548]">
                  Your name *
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="mt-2 w-full border border-[#ded9cc] bg-[#fbf8f1] px-4 py-3 text-sm font-normal outline-none transition placeholder:text-[#aaa99d] focus:border-[#7b8750]"
                  />
                </label>

                <label className="block text-xs font-semibold text-[#4c5548]">
                  Email address *
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="mt-2 w-full border border-[#ded9cc] bg-[#fbf8f1] px-4 py-3 text-sm font-normal outline-none transition placeholder:text-[#aaa99d] focus:border-[#7b8750]"
                  />
                </label>
              </div>

              <label className="mt-5 block text-xs font-semibold text-[#4c5548]">
                What are you interested in?
                <select
                  name="interest"
                  defaultValue=""
                  className="mt-2 w-full border border-[#ded9cc] bg-[#fbf8f1] px-4 py-3 text-sm font-normal outline-none focus:border-[#7b8750]"
                >
                  <option value="" disabled>
                    Choose a collection
                  </option>
                  {collections.map((item) => (
                    <option key={item.number} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                  <option value="Wholesale">Wholesale enquiry</option>
                  <option value="Other">Something else</option>
                </select>
              </label>

              <label className="mt-5 block text-xs font-semibold text-[#4c5548]">
                Your message *
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your idea, quantity, or requirements..."
                  required
                  className="mt-2 w-full resize-y border border-[#ded9cc] bg-[#fbf8f1] px-4 py-3 text-sm font-normal outline-none transition placeholder:text-[#aaa99d] focus:border-[#7b8750]"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#344c35] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#496348] sm:w-auto"
              >
                Send Enquiry <ArrowRight size={17} />
              </button>

              <p className="mt-4 text-[11px] leading-5 text-[#898879]">
                This form opens the visitor's default email application. A
                backend or form service is needed to receive submissions
                directly on your website.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#203326] px-6 pb-7 pt-12 text-white sm:px-10 sm:pt-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="#home" className="inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#e4d2a3]">
                  <Leaf size={25} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-xl">Heritage</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4c59e]">
                    Jute Craft
                  </p>
                </div>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                Celebrating natural materials, thoughtful design, and the
                timeless character of jute.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
                <span className="text-base" aria-hidden="true">
                  🇮🇳
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e4d2a3]">
                  Made in India
                </span>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#e4d2a3]">
                Explore
              </h4>
              <div className="flex flex-col gap-3 text-sm text-white/65">
                <a className="transition hover:text-white" href="#story">
                  Our Story
                </a>
                <a className="transition hover:text-white" href="#collections">
                  Collections
                </a>
                <a className="transition hover:text-white" href="#craft">
                  Our Craft
                </a>
                <a className="transition hover:text-white" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#e4d2a3]">
                Get in touch
              </h4>
              <p className="text-sm leading-7 text-white/65">
                Have a project or product idea?
                <br />
                We'd love to hear from you.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm text-[#e4d2a3] transition hover:text-white"
              >
                Start a conversation <ArrowRight size={15} />
              </a>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10 hover:text-[#e4d2a3]"
                >
                  <Instagram size={17} />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10 hover:text-[#e4d2a3]"
                >
                  <Facebook size={17} />
                </a>

                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10 hover:text-[#e4d2a3]"
                >
                  <Twitter size={17} />
                </a>

                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10 hover:text-[#e4d2a3]"
                >
                  <SiPinterest size={17} />
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10 hover:text-[#e4d2a3]"
                >
                  <Youtube size={17} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Heritage Jute Craft. All rights
              reserved.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <span className="inline-flex items-center gap-2 text-white/65">
                <span aria-hidden="true">🇮🇳</span>
                Made in India
              </span>

              <a href="#home" className="transition hover:text-white">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
