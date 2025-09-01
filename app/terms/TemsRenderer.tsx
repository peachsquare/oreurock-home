import ArticleBlock from "@/app/terms/ArticleBlock";
import {Chapter} from "@/app/terms/Types";

export default function TermsRenderer({terms}: { terms: Chapter[] }) {
    return (
        <div className="prose prose-slate max-w-none">
            {terms.map((ch, ci) => (
                <section key={ci} className="mt-8">
                    <h2 className="text-2xl font-semibold">{ch.chapter}</h2>
                    {ch.articles.map((a) => (
                        <ArticleBlock key={a.no} article={a}/>
                    ))}
                </section>
            ))}
        </div>
    );
}