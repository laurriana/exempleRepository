import { useState } from 'react';
import { useTranslation } from 'react-i18next';




function Header() {

    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState("eng")

    const handleLocalChange = () => {
        i18n.changeLanguage(lang)

        if(lang === "fr")
            {
            setLang("en")
        }
        else
        {
            setLang("fr")
        }
    }
    

    return (
        
        <div>
            <button onClick={handleLocalChange}>{lang}</button>

            <h1>{t("welcome")}</h1>
        </div>
    );
}

export default Header;