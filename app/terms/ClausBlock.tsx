import {Clause} from "@/app/terms/Types";

export default function ClauseBlock({clause}: { clause: Clause }) {
    if (typeof clause === 'string') {
        return <p className="leading-7">{clause}</p>;
    }

    const ListTag = clause.type === 'ol' ? 'ol' : 'ul';
    return (
        <ListTag className={clause.type === 'ol' ? 'list-decimal pl-6 space-y-2' : 'list-disc pl-6 space-y-2'}>
            {clause.items.map((item, i) =>
                typeof item === 'string' ? (
                    <li key={i}>{item}</li>
                ) : (
                    <li key={i}>
                        <ClauseBlock clause={item}/>
                    </li>
                )
            )}
        </ListTag>
    );
}

