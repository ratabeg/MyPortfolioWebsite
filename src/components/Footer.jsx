import React from 'react';

function Footer() {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', background: '#222', color: '#fff' }}>
            <p>&copy; {new Date().getFullYear()} The Wandering Developer. All rights reserved.</p>
        </footer>
    );
}

export default Footer;