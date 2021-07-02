import { useEffect, useState } from "react";
import { fetchWords } from "./api";

function Header() {
    return (
        <header className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">名言API</h1>
                </div>
            </div>
        </header>
    );
}

function Loading() {
    return <p>Lodading...</p>
}

/*
//ボタン表示のみ
function Button() {
    return (
        <div id="btn" className="control">
            <button type="submit" className="button is-dark">
                Reload
            </button>
        </div>
    );
}
*/

function Form(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const { breed } = event.target.elements;
        props.onFormSubmit();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <button type="submit" className="button is-dark">
                        Reload
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function Print(props) {
    return (
        <div>{props.msg}</div>
    );
}

function Main() {
    const test = "テスト"
    const [msg, setText] = useState("");

    useEffect(() => {
        fetchWords().then((msg) => {
          setText(msg) 
        });
    }, []);

    function reloadWord() {
        fetchWords().then((msg) => {
            setText(msg);
        });
    }

    return (
        <main>
            <div>
                <Print msg={msg} />
                {test}
                {msg.meigen}
            </div>
        </main>
    );
}
  
function App() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}
  
export default App;
