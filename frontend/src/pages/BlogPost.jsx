import React, { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Phone, ExternalLink } from "lucide-react";
import { blogs, getBlogBySlug, formatBlogDate } from "../data/blogs";
import { getLocationById } from "../data/locations";
import { usePageMeta } from "../hooks/use-page-meta";

const SITE = "https://www.villagepizzaseafood.com";
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

// Renders "text [label](/path) text" with router links.
const RichText = ({ text }) => {
  const out = [];
  let last = 0;
  for (const m of text.matchAll(LINK_RE)) {
    out.push(text.slice(last, m.index));
    out.push(
      <Link key={m.index} to={m[2]} className="text-red underline underline-offset-4 hover:text-navy">
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  out.push(text.slice(last));
  return <>{out}</>;
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  const schema = useMemo(() => {
    if (!post) return null;
    const url = `${SITE}/blog/${post.slug}/`;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "@id": `${url}#post`,
          mainEntityOfPage: url,
          headline: post.title,
          description: post.description,
          image: `${SITE}${post.image}`,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: "Village Pizza & Seafood" },
          publisher: { "@type": "Organization", name: "Village Pizza & Seafood", url: `${SITE}/` },
          isPartOf: { "@id": `${SITE}/#website` },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        },
      ],
    };
  }, [post]);

  usePageMeta({
    title: post?.metaTitle ?? "Blog | Village Pizza & Seafood",
    description: post?.description ?? "",
    schema,
    schemaId: "blogpost-schema",
  });

  if (!post) return <Navigate to="/blog" replace />;

  const loc = getLocationById(post.locationId);
  const more = blogs.filter((b) => b.slug !== post.slug).slice(0, 2);

  return (
    <article data-testid="blog-post-page" className="bg-cream">
      <header className="bg-navy py-14 lg:py-20 text-cream clip-diagonal-tr">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-ui text-xs text-gold uppercase tracking-widest hover:text-cream"
          >
            <ArrowLeft size={14} /> All Posts
          </Link>
          <div className="mt-6 font-ui text-xs text-cream/80 uppercase tracking-widest">
            {post.category}
          </div>
          <h1
            className="mt-2 font-display text-gold"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1 }}
            data-testid="blog-post-title"
          >
            {post.title}
          </h1>
          <div className="mt-5 font-ui text-xs text-cream/70">
            {formatBlogDate(post.date)} &middot; {post.readMins} min read
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
        <div className="overflow-hidden rounded-2xl border-4 border-gold/40 shadow-xl">
          <img src={post.image} alt={post.imageAlt} className="h-auto w-full object-cover" />
        </div>

        <div className="mt-10">
          {post.body.map((b, i) => {
            if (b.t === "h2")
              return (
                <h2 key={i} className="mt-12 mb-1 font-display text-3xl sm:text-4xl text-navy">
                  {b.x}
                  <div className="brand-gradient-warm mt-2 h-1.5 w-16 rounded-full" />
                </h2>
              );
            if (b.t === "h3")
              return (
                <h3 key={i} className="mt-8 font-display text-xl sm:text-2xl text-navy">
                  {b.x}
                </h3>
              );
            return (
              <p key={i} className="mt-4 font-body text-base sm:text-lg leading-relaxed text-dark/85">
                <RichText text={b.x} />
              </p>
            );
          })}
        </div>

        {loc && (
          <aside className="mt-14 rounded-2xl bg-navy p-8 text-center text-cream border-t-4 border-gold">
            <h2 className="font-display text-3xl text-gold">PLANNING A PARTY IN {loc.name.toUpperCase()}?</h2>
            <p className="mt-3 font-body text-cream/85">
              Call ahead for large orders or browse the menu and order online.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/menu?category=partyHelper" className="btn-primary">
                View Party Options
              </Link>
              {loc.orderUrl && (
                <a href={loc.orderUrl} target="_blank" rel="noreferrer" className="btn-gold">
                  Order Online <ExternalLink size={16} />
                </a>
              )}
              <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="btn-ghost-gold">
                <Phone size={16} /> {loc.phone}
              </a>
            </div>
          </aside>
        )}
      </div>

      {more.length > 0 && (
        <section className="border-t border-navy/10 bg-white py-14">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-display text-3xl text-navy">MORE FROM THE BLOG</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {more.map((b) => (
                <Link
                  key={b.slug}
                  to={`/blog/${b.slug}`}
                  className="rounded-xl border border-navy/10 p-5 hover:border-gold hover:shadow-md transition-all"
                >
                  <div className="font-ui text-xs text-red uppercase tracking-widest">{b.category}</div>
                  <div className="mt-1 font-display text-xl text-navy">{b.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

export default BlogPost;
