// Data for figures (using placeholder paths for demonstration)
// Salt data (you can expand this object with more salts)
const saltData = {
    salt1: {
        title: "Salt 1 (46%NaF-33%RbF-21%UF4): Critical Enrichment",
        image: "images/Screenshot 2024-11-08 214306.png",
        description: "This is the critical enrichment information for Salt 1."
    },
    salt2: {
        title: "Salt 2 (49%NaF-38%ZrF4-12%UF4): Critical Enrichment",
        image: "images/Screenshot 2024-11-08 214454.png",
        description: "This is the critical enrichment information for Salt 2."
    },
    salt3: {
        title: "Salt 3 (50.5%NaF-21.5%KF-28%UF4): Critical Enrichment",
        image: "images/Screenshot 2024-11-08 214520.png",
        description: "This is the critical enrichment information for Salt 3."
    },
    salt4: {
        title: "Salt 4 (58%NaF-30%BeF2-12%UF4): Critical Enrichment",
        image: "images/Screenshot 2024-11-08 214544.png",
        description: "This is the critical enrichment information for Salt 4."
    },

    salt5: {
        title: "Salt 5(72%LiF-16%BeF2-12%UF4): Critical Enrichment",
        image: "images/Screenshot 2024-11-08 214609.png",
        description: "This is the critical enrichment information for Salt 5."
    },

    salt6: {
        title: "Salt 6(73%LiF-27%UF4): Critical Enrichment",
        image: "images/Screenshot 2024-11-08 214631.png",
        description: "This is the critical enrichment information for Salt 4."
    },

    salt7: {
        title: "Salt 7(74%NaF-12%BeF2-14%UF4): Critical Enrichment",
        image: "images/Screenshot 2024-11-08 214653.png",
        description: "This is the critical enrichment information for Salt 4."
    },

    salt8: {
        title: "Salt 8(78%NaF-22%UF4): Critical Enrichment",
        image: "images/Screenshot 2024-11-08 214715.png",
        description: "This is the critical enrichment information for Salt 4."
    },

       saltT1: {
        title: "Salt 1 (46%NaF-33%RbF-21%UF4): Temperature Coefficient",
        image: "images1/Screenshot 2024-11-08 223803.png",
        description: "This is the temperature coefficient information for Salt 1."
    },
    saltT2: {
        title: "Salt 2 (49%NaF-38%ZrF4-12%UF4): Temperature Coefficient",
        image: "images1/Screenshot 2024-11-08 223820.png",
        description: "This is the temperature coefficient information for Salt 2."
    },
    saltT3: {
        title: "Salt 3 (50.5%NaF-21.5%KF-28%UF4): Temperature Coefficient",
        image: "images1/Screenshot 2024-11-08 223911.png",
        description: "This is the temperature coefficient information for Salt 3."
    },
    saltT4: {
        title: "Salt 4 (58%NaF-30%BeF2-12%UF4): Temperature Coefficient",
        image: "images1/Screenshot 2024-11-08 223929.png",
        description: "This is the temperature coefficient information for Salt 4."
    },
    saltT5: {
        title: "Salt 5 (72%LiF-16%BeF2-12%UF4): Temperature Coefficient",
        image: "images1/Screenshot 2024-11-08 223948.png",
        description: "This is the temperature coefficient information for Salt 5."
    },
    saltT6: {
        title: "Salt 6 (73%LiF-27%UF4): Temperature Coefficient",
        image: "images1/Screenshot 2024-11-08 224008.png",
        description: "This is the temperature coefficient information for Salt 6."
    },
    saltT7: {
        title: "Salt 7 (74%NaF-12%BeF2-14%UF4): Temperature Coefficient",
        image: "images1/Screenshot 2024-11-08 224019.png",
        description: "This is the temperature coefficient information for Salt 7."
    },
    saltT8: {
        title: "Salt 8 (78%NaF-22%UF4): Temperature Coefficient",
        image: "images1/Screenshot 2024-11-08 224032.png",
        description: "This is the temperature coefficient information for Salt 8."
    },

    specialsalt: {
        title: "Neutron spetrum of proposed fuel salts",
        image: "images1/Screenshot 2024-11-08 225302.png",
        description: "Combined neutron spectrum."
    }

    
    // Add additional salt entries as needed
}

// Load selected salt data
const selectedSalt = localStorage.getItem('selectedSalt');
if (selectedSalt && saltData[selectedSalt]) {
    const saltInfo = saltData[selectedSalt];
    document.getElementById('salt-title').textContent = saltInfo.title;
    document.getElementById('salt-image').src = saltInfo.image;
    document.getElementById('salt-image').alt = saltInfo.title;
    document.getElementById('salt-description').textContent = saltInfo.description;
} else {
    document.getElementById('salt-title').textContent = "Salt Not Found";
    document.getElementById('salt-description').textContent = "The requested salt data could not be found.";
}
