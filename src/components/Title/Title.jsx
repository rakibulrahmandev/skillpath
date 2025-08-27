export default function Title({title, text, link}) {
    return (
        <>
            <div>
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <button className="secondary-btn">{link}</button>
            </div>
        </>
    );
};