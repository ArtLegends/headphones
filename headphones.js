function determineLocation() {
    const userLang = (navigator.language || navigator.userLanguage).substring(0,2);
    return translations[userLang] ? userLang : 'en';
}

var translations = {
    "de": {
        "meta": {
            "description": "Bestellen Sie das Logitech G733 Lightspeed Gaming-Headset mit einem Rabatt von 30% mit dem Promo-Code TECH30. Erfahren Sie mehr über die neuesten Spezifikationen und Funktionen.",
            "keywords": "Logitech G733 Lightspeed, Gaming-Headset, TechMarket, jetzt bestellen, Promo-Code",
            "title": "Logitech G733 Lightspeed bestellen"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (80).jpg": "Logitech G733 Lightspeed Gaming-Headset",
            "51gpUnTkRDL._SP576,624,0_51dmmPdG6FL.jpg,412EWo4Zg9L.jpg,51A3eP+9tpL.jpg,51HWkJPRgyL.jpg,41W9bvqOXDL.jpg_ (1).jpg": "Logitech G733 Lightspeed Gaming-Headset"
        },
        "content": {
            "h1": "Logitech G733 Lightspeed",
            "h3_preorder": "Bestellen Sie das Logitech G733 Lightspeed bei TechMarket!",
            "p_description": "Das Logitech G733 Lightspeed ist ein kabelloses Gaming-Headset, das immersiven Klang und Bewegungsfreiheit bietet. Das ultraleichte Design macht es perfekt für längere Gaming-Sessions. Genießen Sie hochwertigen Klang und anpassbare RGB-Beleuchtung für ein unvergleichliches Spielerlebnis.",
            "button_order": "Jetzt bestellen"
        },
        "specifications": {
            "Physische Spezifikationen": {
                'Länge': '194 mm',
                'Breite': '190 mm',
                'Tiefe': '83 mm',
                'Gewicht': '278 g'
            },
            "Kopfhörer": {
                'Treiber': 'PRO-G 40 mm',
                'Frequenzantwort': '20 Hz - 20 kHz',
                'Impedanz': '>39 Ohms (passiv), 5k Ohms (aktiv)',
                'Empfindlichkeit': '87.5 dB SPL/mW'
            },
            "Mikrofon": {
                'Mikrofon Aufnahmemuster': 'Nierenförmig (Unidirektional)',
                'Größe': '6 mm',
                'Frequenzantwort': '100 Hz-10 KHz',
                'Drahtloser Bereich': 'Bis zu 20 m',
                'Anschlusstyp': 'LIGHTSPEED drahtlos über USB'
            },
            "Batterielebensdauer": {
                'Ohne Beleuchtung': '29 Std.',
                'Standardbeleuchtung': '20 Std.'
            }
        },
        "promo_content": {
            "h3_1": "Warum Logitech G733 Lightspeed?",
            "p1": "Das Logitech G733 Lightspeed bietet ein beeindruckendes Klangerlebnis mit Lightspeed Wireless-Technologie. Mit einem leichten und bequemen Design ist es perfekt für längere Gaming-Sessions. Personalisieren Sie Ihr Audio mit RGB-Beleuchtung und genießen Sie hochwertigen Klang für ein unschlagbares Spielerlebnis.",
            "h3_2": "Warum bei TechMarket bestellen?",
            "p2": "Bei TechMarket sorgen wir dafür, dass Sie zu den Ersten gehören, die die neuesten Geräte in den Händen halten. Profitieren Sie von exklusiven Vorbestellervorteilen, erstklassigem Kundenservice und einem nahtlosen Einkaufserlebnis. Außerdem erhalten Sie besondere Rabatte und Angebote, die Sie nirgendwo anders finden!",
            "button_order": "Jetzt bestellen"
        }
    },
    "en": {
        "meta": {
            "description": "Order the Logitech G733 Lightspeed Gaming Headset with a 30% discount using the promo code TECH30. Learn more about the latest specifications and features.",
            "keywords": "Logitech G733 Lightspeed, Gaming Headset, TechMarket, order now, Promo Code",
            "title": "Order Logitech G733 Lightspeed"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (80).jpg": "Logitech G733 Lightspeed Gaming Headset",
            "51gpUnTkRDL._SP576,624,0_51dmmPdG6FL.jpg,412EWo4Zg9L.jpg,51A3eP+9tpL.jpg,51HWkJPRgyL.jpg,41W9bvqOXDL.jpg_ (1).jpg": "Logitech G733 Lightspeed Gaming Headset"
        },
        "content": {
            "h1": "Logitech G733 Lightspeed",
            "h3_preorder": "Order the Logitech G733 Lightspeed at TechMarket!",
            "p_description": "The Logitech G733 Lightspeed is a wireless gaming headset that offers immersive sound and freedom of movement. Its ultra-light design makes it perfect for extended gaming sessions. Enjoy high-quality sound and customizable RGB lighting for an unparalleled gaming experience.",
            "button_order": "Order now"
        },
        "specifications": {
            "Physical Specifications": {
                'Length': '194 mm',
                'Width': '190 mm',
                'Depth': '83 mm',
                'Weight': '278 g'
            },
            "Headphones": {
                'Driver': 'PRO-G 40 mm',
                'Frequency response': '20 Hz - 20 kHz',
                'Impedance': '>39 Ohms (passive), 5k Ohms (active)',
                'Sensitivity': '87.5 dB SPL/mW'
            },
            "Microphone": {
                'Microphone pickup pattern': 'Cardioid (Unidirectional)',
                'Size': '6 mm',
                'Frequency response': '100 Hz-10 KHz',
                'Wireless range': 'Up to 20 m',
                'Connection type': 'LIGHTSPEED wireless via USB'
            },
            "Battery life": {
                'Without lighting': '29 hrs.',
                'Standard lighting': '20 hrs.'
            }
        },
        "promo_content": {
            "h3_1": "Why Logitech G733 Lightspeed?",
            "p1": "The Logitech G733 Lightspeed offers an impressive sound experience with Lightspeed Wireless technology. With a light and comfortable design, it's perfect for extended gaming sessions. Personalize your audio with RGB lighting and enjoy high-quality sound for an unbeatable gaming experience.",
            "h3_2": "Why order from TechMarket?",
            "p2": "At TechMarket, we ensure you're among the first to get your hands on the latest devices. Benefit from exclusive pre-order advantages, top-notch customer service, and a seamless shopping experience. Plus, get special discounts and offers you won't find anywhere else!",
            "button_order": "Order now"
        }
    },
    "fr": {
        "meta": {
            "description": "Commandez le casque de jeu Logitech G733 Lightspeed avec une réduction de 30% en utilisant le code promo TECH30. Découvrez les dernières spécifications et fonctionnalités.",
            "keywords": "Logitech G733 Lightspeed, Casque de jeu, TechMarket, commander maintenant, Code Promo",
            "title": "Commander Logitech G733 Lightspeed"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (80).jpg": "Casque de jeu Logitech G733 Lightspeed",
            "51gpUnTkRDL._SP576,624,0_51dmmPdG6FL.jpg,412EWo4Zg9L.jpg,51A3eP+9tpL.jpg,51HWkJPRgyL.jpg,41W9bvqOXDL.jpg_ (1).jpg": "Casque de jeu Logitech G733 Lightspeed"
        },
        "content": {
            "h1": "Logitech G733 Lightspeed",
            "h3_preorder": "Commandez le Logitech G733 Lightspeed chez TechMarket!",
            "p_description": "Le Logitech G733 Lightspeed est un casque de jeu sans fil offrant un son immersif et une liberté de mouvement. Son design ultra-léger le rend parfait pour des sessions de jeu prolongées. Profitez d'un son de haute qualité et d'un éclairage RGB personnalisable pour une expérience de jeu inégalée.",
            "button_order": "Commander maintenant"
        },
        "specifications": {
            "Spécifications physiques": {
                'Longueur': '194 mm',
                'Largeur': '190 mm',
                'Profondeur': '83 mm',
                'Poids': '278 g'
            },
            "Casque": {
                'Pilote': 'PRO-G 40 mm',
                'Réponse en fréquence': '20 Hz - 20 kHz',
                'Impédance': '>39 Ohms (passif), 5k Ohms (actif)',
                'Sensibilité': '87.5 dB SPL/mW'
            },
            "Microphone": {
                'Motif de prise de microphone': 'Cardioïde (Unidirectionnel)',
                'Taille': '6 mm',
                'Réponse en fréquence': '100 Hz-10 KHz',
                'Portée sans fil': 'Jusqu à 20 m',
                "Type de connexion": 'LIGHTSPEED sans fil via USB'
            },
            "Durée de vie de la batterie": {
                'Sans éclairage': '29 hrs.',
                'Éclairage standard': '20 hrs.'
            }
        },
        "promo_content": {
            "h3_1": "Pourquoi Logitech G733 Lightspeed?",
            "p1": "Le Logitech G733 Lightspeed offre une expérience sonore impressionnante avec la technologie sans fil Lightspeed. Avec un design léger et confortable, il est parfait pour des sessions de jeu prolongées. Personnalisez votre audio avec l'éclairage RGB et profitez d'un son de haute qualité pour une expérience de jeu inégalée.",
            "h3_2": "Pourquoi commander chez TechMarket?",
            "p2": "Chez TechMarket, nous veillons à ce que vous soyez parmi les premiers à mettre la main sur les derniers appareils. Bénéficiez d'avantages de précommande exclusifs, d'un service client haut de gamme et d'une expérience d'achat fluide. De plus, bénéficiez de remises spéciales et d'offres que vous ne trouverez nulle part ailleurs!",
            "button_order": "Commander maintenant"
        }
    },
    "es": {
        "meta": {
            "description": "Ordene el auricular de juego Logitech G733 Lightspeed con un descuento del 30% utilizando el código promocional TECH30. Conozca más sobre las últimas especificaciones y características.",
            "keywords": "Logitech G733 Lightspeed, Auricular de juego, TechMarket, ordenar ahora, Código promocional",
            "title": "Ordene Logitech G733 Lightspeed"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (80).jpg": "Auriculares de juego Logitech G733 Lightspeed",
            "51gpUnTkRDL._SP576,624,0_51dmmPdG6FL.jpg,412EWo4Zg9L.jpg,51A3eP+9tpL.jpg,51HWkJPRgyL.jpg,41W9bvqOXDL.jpg_ (1).jpg": "Auriculares de juego Logitech G733 Lightspeed"
        },
        "content": {
            "h1": "Logitech G733 Lightspeed",
            "h3_preorder": "¡Ordene el Logitech G733 Lightspeed en TechMarket!",
            "p_description": "El Logitech G733 Lightspeed es un auricular de juego inalámbrico que ofrece sonido envolvente y libertad de movimiento. Su diseño ultraligero lo hace perfecto para sesiones de juego prolongadas. Disfrute de un sonido de alta calidad y una iluminación RGB personalizable para una experiencia de juego sin igual.",
            "button_order": "Ordenar ahora"
        },
        "specifications": {
            "Especificaciones Físicas": {
                'Longitud': '194 mm',
                'Ancho': '190 mm',
                'Profundidad': '83 mm',
                'Peso': '278 g'
            },
            "Auriculares": {
                'Conductor': 'PRO-G 40 mm',
                'Respuesta de frecuencia': '20 Hz - 20 kHz',
                'Impedancia': '>39 Ohms (pasiva), 5k Ohms (activa)',
                'Sensibilidad': '87.5 dB SPL/mW'
            },
            "Micrófono": {
                'Patrón de captación del micrófono': 'Cardioide (Unidireccional)',
                'Tamaño': '6 mm',
                'Respuesta de frecuencia': '100 Hz-10 KHz',
                'Alcance inalámbrico': 'Hasta 20 m',
                'Tipo de conexión': 'Inalámbrico LIGHTSPEED a través de USB'
            },
            "Duración de la batería": {
                'Sin iluminación': '29 hrs.',
                'Iluminación estándar': '20 hrs.'
            }
        },
        "promo_content": {
            "h3_1": "¿Por qué Logitech G733 Lightspeed?",
            "p1": "El Logitech G733 Lightspeed ofrece una impresionante experiencia de sonido con la tecnología inalámbrica Lightspeed. Con un diseño ligero y cómodo, es perfecto para sesiones de juego extendidas. Personalice su audio con iluminación RGB y disfrute de un sonido de alta calidad para una experiencia de juego insuperable.",
            "h3_2": "¿Por qué ordenar desde TechMarket?",
            "p2": "En TechMarket, nos aseguramos de que seas uno de los primeros en tener en tus manos los últimos dispositivos. Benefíciate de ventajas exclusivas de preventa, un servicio al cliente de primera clase y una experiencia de compra fluida. Además, obtén descuentos especiales y ofertas que no encontrarás en ningún otro lugar.",
            "button_order": "Ordenar ahora"
        }
    }    
};

function applyTranslation(lang) {
    if (!translations[lang]) {
        console.error(`No translations available for language: ${lang}`);
        return; 
    }

    console.log("Lang value:", lang);

    document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].meta.description);
    if (translations[lang] && translations[lang].meta) {
        document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].meta.description);
        document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].meta.keywords);
        document.title = translations[lang].meta.title;
    } else {
        console.warn("Translation for the specified language is not available.");
    }    
    document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].meta.keywords);
    document.title = translations[lang].meta.title;
    document.querySelector('img[src="photo_2023-08-06_15-42-25 (70).jpg"]').setAttribute("alt", translations[lang].images.macbook_air_15);

    document.querySelectorAll('img[alt="Bild von MacBook Air 15"]').forEach(img => {
        img.setAttribute('alt', translations[lang].images.macbook_air_15);
    });

    document.querySelector('h1').textContent = translations[lang].content.h1;
    document.querySelector('#preorderContent h3').textContent = translations[lang].content.h3_preorder;
    document.querySelector('#preorderContent p').textContent = translations[lang].content.p_description;
    document.querySelector('#preorderContent button').textContent = translations[lang].content.button_order;

    document.querySelector('.promo-content h2').textContent = translations[lang].promo_content.h2;
    document.querySelector('.promo-content p:nth-child(2)').textContent = translations[lang].promo_content.p1;
    document.querySelector('.promo-content h3').textContent = translations[lang].promo_content.h3;
    document.querySelector('.promo-content p:nth-child(4)').textContent = translations[lang].promo_content.p2;
    document.querySelector('.promo-content button').textContent = translations[lang].promo_content.button_order;

    var specSections = document.querySelectorAll('.specs-section');
    var specCategories = Object.keys(translations[lang].specifications);

    specSections.forEach((section, idx) => {
        var specCategory = specCategories[idx];
        var specKeys = Object.keys(translations[lang].specifications[specCategory]);
        specKeys.forEach(function(key, index) {
            section.querySelector(`.spec-row:nth-child(${index + 1}) .spec-value`).textContent = translations[lang].specifications[specCategory][key];
        });
    });
}

window.onload = function() {
    const userLang = determineLocation();
    applyTranslation(userLang);
    
    // Устанавливаем выбранным язык пользователя в выпадающем списке
    document.getElementById('languageSelector').value = userLang;
}


document.getElementById('languageSelector').addEventListener('change', function() {
    applyTranslation(this.value);
});
