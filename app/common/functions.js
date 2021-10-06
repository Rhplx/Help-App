import AsyncStorage from "@react-native-async-storage/async-storage";

export const getBaseApi = () => {
    return "https://helpapp.mx:4443";
}

export const checkSession = async (navigation) => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    if (!sessionId) {
        navigation.navigate("Login");
    }
}

export const getCities = (state) => {
    let cities = {
        "Aguascalientes": [
            {
                "label": "Aguascalientes",
                "value": "Aguascalientes",
            }
        ],
        "Baja California": [
            {
                "label": "Ensenada",
                "value": "Ensenada",
            },
            {
                "label": "Mexicali",
                "value": "Mexicali",
            },
            {
                "label": "Tijuana",
                "value": "Tijuana",
            }
        ],
        "Baja California Sur": [
            {
                "label": "La Paz",
                "value": "La Paz",
            },
            {
                "label": "Los Cabos",
                "value": "Los Cabos",
            }
        ],
        "Campeche": [
            {
                "label": "Campeche",
                "value": "Campeche",
            },
            {
                "label": "Ciudad del Carmen",
                "value": "Ciudad del Carmen",
            }
        ],
        "Coahuila de Zaragoza": [
            {
                "label": "Saltillo",
                "value": "Saltillo",
            },
            {
                "label": "Monclova-Frontera",
                "value": "Monclova-Frontera",
            },
            {
                "label": "La Laguna",
                "value": "La Laguna",
            },
            {
                "label": "Piedras Negras",
                "value": "Piedras Negras",
            }
        ],
        "Colima": [
            {
                "label": "Tecomán",
                "value": "Tecomán",
            },
            {
                "label": "Colima-Villa de Álvarez",
                "value": "Colima-Villa de Álvarez",
            },
            {
                "label": "Manzanillo",
                "value": "Manzanillo",
            }
        ],
        "Chiapas": [
            {
                "label": "Tuxtla Gutiérrez",
                "value": "Tuxtla Gutiérrez",
            },
            {
                "label": "Tapachula",
                "value": "Tapachula",
            }
        ],
        "Chihuahua": [
            {
                "label": "Chihuahua",
                "value": "Chihuahua",
            },
            {
                "label": "Juárez",
                "value": "Juárez",
            }
        ],
        "Distrito Federal": [
            {
                "label": "Valle de México",
                "value": "Valle de México",
            }
        ],
        "Durango": [
            {
                "label": "Durango",
                "value": "Durango",
            }
        ],
        "Guanajuato": [
            {
                "label": "Celaya",
                "value": "Celaya",
            },
            {
                "label": "Guanajuato",
                "value": "Guanajuato",
            },
            {
                "label": "Irapuato",
                "value": "Irapuato",
            },
            {
                "label": "León",
                "value": "León",
            },
            {
                "label": "La Piedad-Pénjamo",
                "value": "La Piedad-Pénjamo",
            },
            {
                "label": "San Francisco del Rincón",
                "value": "San Francisco del Rincón",
            },
            {
                "label": "Salamanca",
                "value": "Salamanca",
            }
        ],
        "Guerrero": [
            {
                "label": "Acapulco",
                "value": "Acapulco",
            },
            {
                "label": "Chilpancingo",
                "value": "Chilpancingo",
            }
        ],
        "Hidalgo": [
            {
                "label": "Tula",
                "value": "Tula",
            },
            {
                "label": "Tulancingo",
                "value": "Tulancingo",
            },
            {
                "label": "Pachuca",
                "value": "Pachuca",
            }
        ],
        "Jalisco": [
            {
                "label": "Guadalajara",
                "value": "Guadalajara",
            },
            {
                "label": "Ocotlán",
                "value": "Ocotlán",
            },
            {
                "label": "Puerto Vallarta",
                "value": "Puerto Vallarta",
            }
        ],
        "México": [
            {
                "label": "Toluca",
                "value": "Toluca",
            }
        ],
        "Michoacán de Ocampo": [
            {
                "label": "Zamora-Jacona",
                "value": "Zamora-Jacona",
            },
            {
                "label": "Morelia",
                "value": "Morelia",
            },
            {
                "label": "Uruapan",
                "value": "Uruapan",
            }
        ],
        "Morelos": [
            {
                "label": "Cuautla",
                "value": "Cuautla",
            },
            {
                "label": "Cuernavaca",
                "value": "Cuernavaca",
            }
        ],
        "Nayarit": [
            {
                "label": "Tepic",
                "value": "Tepic",
            }
        ],
        "Nuevo León": [
            {
                "label": "Monterrey",
                "value": "Monterrey",
            }
        ],
        "Oaxaca": [
            {
                "label": "Oaxaca",
                "value": "Oaxaca",
            },
            {
                "label": "Tehuantepec-Salina Cruz",
                "value": "Tehuantepec-Salina Cruz",
            }
        ],
        "Puebla": [
            {
                "label": "Puebla-Tlaxcala",
                "value": "Puebla-Tlaxcala",
            },
            {
                "label": "Tehuacán",
                "value": "Tehuacán",
            }
        ],
        "Querétaro": [
            {
                "label": "Querétaro",
                "value": "Querétaro",
            },
            {
                "label": "San Juan del Río",
                "value": "San Juan del Río",
            }
        ],
        "Quintana Roo": [
            {
                "label": "Cancún",
                "value": "Cancún",
            },
            {
                "label": "Chetumal",
                "value": "Chetumal",
            }
        ],
        "San Luis Potosí": [
            {
                "label": "Ciudad Valles",
                "value": "Ciudad Valles",
            },
            {
                "label": "Rioverde",
                "value": "Rioverde",
            },
            {
                "label": "San Luis Potosí",
                "value": "San Luis Potosí",
            },
            {
                "label": "Soledad",
                "value": "Soledad",
            }
        ],
        "Sinaloa": [
            {
                "label": "Los Mochis",
                "value": "Los Mochis",
            },
            {
                "label": "Culiacán",
                "value": "Culiacán",
            },
            {
                "label": "Mazatlán",
                "value": "Mazatlán",
            }
        ],
        "Sonora": [
            {
                "label": "Ciudad Obregón",
                "value": "Ciudad Obregón",
            },
            {
                "label": "Guaymas",
                "value": "Guaymas",
            },
            {
                "label": "Hermosillo",
                "value": "Hermosillo",
            }
        ],
        "Tabasco": [
            {
                "label": "Cárdenas",
                "value": "Cárdenas",
            },
            {
                "label": "Villahermosa",
                "value": "Villahermosa",
            }
        ],
        "Tamaulipas": [
            {
                "label": "Tampico-Pánuco",
                "value": "Tampico-Pánuco",
            },
            {
                "label": "Matamoros",
                "value": "Matamoros",
            },
            {
                "label": "Nuevo Laredo",
                "value": "Nuevo Laredo",
            },
            {
                "label": "Reynosa-Río Bravo",
                "value": "Reynosa-Río Bravo",
            },
            {
                "label": "Ciudad Victoria",
                "value": "Ciudad Victoria",
            }
        ],
        "Tlaxcala": [
            {
                "label": "Tlaxcala-Apizaco",
                "value": "Tlaxcala-Apizaco",
            }
        ],
        "Veracruz de Ignacio de la Llave": [
            {
                "label": "Veracruz",
                "value": "Veracruz",
            },
            {
                "label": "Córdoba",
                "value": "Córdoba",
            },
            {
                "label": "Orizaba",
                "value": "Orizaba",
            },
            {
                "label": "Xalapa",
                "value": "Xalapa",
            },
            {
                "label": "Poza Rica",
                "value": "Poza Rica",
            },
            {
                "label": "Coatzacoalcos",
                "value": "Coatzacoalcos",
            },
            {
                "label": "Minatitlán",
                "value": "Minatitlán",
            }
        ],
        "Yucatán": [
            {
                "label": "Mérida",
                "value": "Mérida",
            }
        ],
        "Zacatecas": [
            {
                "label": "Zacatecas-Guadalupe",
                "value": "Zacatecas-Guadalupe",
            }
        ]
    }
    return state ? cities[state] : [];
}