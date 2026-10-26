import React from "react";
import { Link } from "react-router-dom";
import { blogs, formatBlogDate } from "../data/blogs";
import { usePageMeta } from "../hooks/use-page-meta";

const SITE = "https://www.villagepizzaseafood.com";

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE}/blog/#blog`,
  url: `${SITE}/blog/`,
  name: "Village Pizza & Seafood Blog",
  isPartOf: { "@id": `${SITE}/#website` },
  blogPost: blogs.map((b) => ({
    "@type": "BlogPosting",
    headline: b.title,
    url: `${SITE}/blog/${b.slug}/`,
    datePublished: b.date,
  })),
};

const Blog = () => {
  usePageMeta({
    title: "Blog | Village Pizza & Seafood",
    description:
      "Party planning tips, ordering guides and food ideas from Village Pizza & Seafood, serving six Texas locations since 1995.",
    schema,
    schemaId: "blog-schema",
  });

  return (
    <div data-testid="blog-index-page" className="bg-cream">
      <section className="bg-navy py-16 lg:py-20 text-cream clip-diagonal-tr">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="font-ui text-xs text-gold uppercase tracking-widest block mb-2">
            Village Pizza &amp; Seafood
          </span>
          <h1
            className="font-display text-gold"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)", lineHeight: 0.95 }}
          >
            THE VILLAGE BLOG
          </h1>
          <p className="mt-5 max-w-2xl font-body text-base sm:text-lg text-cream/90 leading-relaxed">
            Ordering guides, party planning tips and food ideas from our kitchen to your table.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md border-t-4 border-red transition-shadow hover:shadow-xl"
              data-testid={`blog-card-${b.slug}`}
            >
              <div className="h-52 overflow-hidden bg-gray-100">
                <img
                  src={b.image}
                  alt={b.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="font-ui text-xs text-red uppercase tracking-widest">
                  {b.category}
                </div>
                <h2 className="mt-2 font-display text-2xl text-navy group-hover:text-red transition-colors">
                  {b.title}
                </h2>
                <p className="mt-3 flex-1 font-body text-sm text-dark/75 leading-relaxed">
                  {b.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 font-ui text-xs text-dark/60">
                  <span>{formatBlogDate(b.date)}</span>
                  <span>{b.readMins} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
