import React, { useContext } from 'react';

import Context from '../context';


export default function MyLearning() {

    const { state } = useContext(Context);
    const { currentUser } = state;

    return (
        <div>
            My Learning space! <br></br>
            Hello dear {currentUser.name}
            <div>
                { currentUser &&
                    (<div>
                            <img src={currentUser.picture} alt={currentUser.name}></img>
                    </div>
                )}
            </div>
        </div>
    )
}
