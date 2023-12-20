'use strict';

function About() {
    return (
        <React.Fragment>
            <h1>This site was created by Allison!</h1>
            <div>
                <a href="http://www.github.com/amcrochet3" target="_blank" rel="noreferrer">
                    My Github!
                </a>
            </div>
            <div>
                <a href="/">Back to the Homepage</a>
            </div>
        </React.Fragment>
    );
}

ReactDOM.render(<About />, document.querySelector('#about'));
