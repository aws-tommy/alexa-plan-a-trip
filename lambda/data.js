module.exports.questions = [
    "Do you like hot spring?",
    "Do you like museum?",
    "Is air quality important to you?",
    "Do you want to have street food?",
    "Do you want to go to America?",
    "Do you want to have Asian food?",
    "Do you want to visit top university?",
    "Do you want to go shopping?",
    "Do you want to explore languages other than Chinese and English?"
];

module.exports.destinations = [
    "Budapest",
    "Mexico City",
    "Hokkaido",
    "Egypt",
    "Heidelberg",
    "Los Angeles",
    "Thailand"
]

module.exports.questionDestinationMatch = [
    ["Budapest", "Hokkaido"],
    ["Mexico City", "Los Angeles", "Egypt", "Thailand"],
    ["Budapest", "Hokkaido", "Heidelberg"],
    ["Mexico City", "Egypt", "Thailand"],
    ["Mexico City", "Los Angeles"],
    ["Hokkaido", "Thailand"],
    ["Heidelberg", "Los Angeles"],
    ["Los Angeles", "Thailand", "Hokkaido"],
    ["Heidelberg", "Hokkaido", "Egypt", "Thailand"]
];
