import React, { useState, useEffect } from 'react';

import { HomeButtons } from './styles';
import { MdKeyboardVoice } from 'react-icons/md';
import { MdSend } from 'react-icons/md';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <HomeButtons>

			<Link to={`/menu`}>
            <div>
                <span>Escolha a seguir o seu produto</span>
				<MdSend size={45} color="#FFF" background="#ddd" />
            </div>
			</Link>

        </HomeButtons>
    );
}
