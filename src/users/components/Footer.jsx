import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-008DDA text-white text-center py-2">
            <div className="container mx-auto flex justify-center">
                <p className="mr-4">&copy; 2024 VaxTrack. All Rights Reserved</p>
                <p>
                    <a href="#" className="text-white">Terms of Service</a> |{' '}
                    <a href="#" className="text-white">Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
