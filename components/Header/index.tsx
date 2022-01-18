import React from 'react';
import Image from 'next/image';

import styles from './Header.module.css';

import SmartTracking from '../../assets/images/smartTracking.png';

export const Header = () => {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_content}>
                <Image src={SmartTracking} alt="Smart tracking logo" />
                <div className={styles.header_content_menu}>
                    <a>Rastrear</a>
                    <a>Sobre nós</a>
                </div>
            </div>
            <div>
                <button
                    className={styles.header_content_download_button}
                >
                    Baixar aplicativo
                </button>
            </div>
        </header>
    );
}

export default Header;
