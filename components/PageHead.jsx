export default function PageHead({title, elementsNumber}) {
    return (
        <>
            <div className="page-head">
                <h2 className="page-title">{title}</h2>
                {elementsNumber && <h5 className="elements-number">{elementsNumber}</h5>}
            </div>
            <hr className="head-separator" />
        </>
    );
}
