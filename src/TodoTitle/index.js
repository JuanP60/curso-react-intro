// Titulo de nuestra app Todo's
import './TodoTitle.css';

function TodoTitle() {
    return(
        <header className='headerParent'>
            <div className='headerChild'>
                <h1 className="header">
                    My TODO's
                </h1>
            </div>
        </header>
    );
}

export { TodoTitle };