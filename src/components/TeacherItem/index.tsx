import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/46967994?s=460&u=3ffcb5f7ff12d37d8dc362df07f79ac2a943558f&v=4" alt="Sara Correia" />
                <div>
                    <strong>Sara Correia</strong>
                    <span>English</span>
                </div>
            </header>

            <p>
                English enthusiast.
                        <br /> <br />
                        Have taught no one so far.
                    </p>

            <footer>
                <p>
                    Price per hour
                            <strong>20€</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Reach Out
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;

