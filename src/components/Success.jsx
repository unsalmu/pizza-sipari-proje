import Header from "./Header";
import "./Success.css";

export default function Success() {
    return (
        <div className="success">
            <Header showBreadcrumb={false} />
            <div className="success-content">
                <h1>TEBRİKLER! <br />SİPARİŞİNİZ ALINDI!</h1>   
            </div>
        </div>
    );
    }