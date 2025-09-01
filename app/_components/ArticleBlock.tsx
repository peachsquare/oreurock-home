import ClauseBlock from "@/app/_components/ClausBlock";
import {Article} from "@/app/_components/Types";

export default function ArticleBlock({article}: { article: Article }) {
    return (
        <article className="mt-6">
            <h3 className="mt-2 text-xl font-semibold">
                제{article.no}조 ({article.title})
            </h3>
            <div className="mt-3 space-y-3">
                {article.clauses.map((clause, idx) => (
                    <ClauseBlock key={idx} clause={clause}/>
                ))}
            </div>
        </article>
    );
}


