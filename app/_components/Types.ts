export type Chapter = { chapter: string; articles: Article[] };

export type Clause =
    | string
    | { type: 'ol' | 'ul'; items: (string | { type: 'ol' | 'ul'; items: string[] })[] };

export type Article = { no: number; title: string; clauses: Clause[] };