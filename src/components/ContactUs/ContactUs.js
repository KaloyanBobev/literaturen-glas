import React from 'react';
import { useTranslation } from 'react-i18next';

import './ContactUs.scss';

function ContactUs() {
    const { t } = useTranslation();

    return (
        <section id="contacts">
            <h2>{t('contact.center')}</h2>
            <div>{t('contact.address')}</div>
            <div>{t('contact.phoneNumber')}</div>
            <div>{t('contact.mobile')}</div>
            <div>
                <iframe className="googleMap" title="community center"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3596374086586!2d25.61543122922663!3d42.418399288754536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI1JzA2LjIiTiAyNcKwMzYnNTcuNSJF!5e0!3m2!1sbg!2suk!4v1590675402039!5m2!1sbg!2suk"
                    frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </section>
    )
}


export default ContactUs;