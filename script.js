// Resource data
const resources = [
    {
        name: 'Common Heart',
        category: 'Human Services',
        description: 'Focusing on hunger eradication and kindness through community support programs.',
        contact: '704-218-9060 | info@commonheart.org',
        detailedInfo: 'A grassroots "small revolution of kindness" that focuses on food stability and economic empowerment for residents in Union County.',
        keyPrograms: 'Mobile food pantries, "The Cupboard" food pantry, and the Economic Empowerment program.',
        howToHelp: 'Host a food drive or volunteer at the Waxhaw thrift shop.',
        website: 'commonheart.org'
    },
    {
        name: 'Museum of the Waxhaws',
        category: 'Arts/History',
        description: 'Highlighting local history and heritage with exhibits and educational programs.',
        contact: '704-843-1832 | info@museumofthewaxhaws.org',
        detailedInfo: 'A regional history center dedicated to the Andrew Jackson era and the Scotch-Irish settlement of the Waxhaws. Features indoor exhibits, an amphitheater, and historic structures.',
        keyPrograms: 'Living History Days, Guided School Tours, and the "Birthplace of Andrew Jackson" exhibit.',
        howToHelp: 'Volunteers needed for tour guiding and grounds maintenance.',
        website: 'museumofthewaxhaws.org'
    },
    {
        name: 'Waxhaw Community Theatre',
        category: 'Arts/History',
        description: 'Providing theatrical performances and arts education to the community.',
        contact: 'info@waxhawtheatre.com',
        detailedInfo: 'A volunteer-based organization that brings high-quality Broadway-style plays and musicals to the local stage at the Stewart Building in downtown Waxhaw.',
        keyPrograms: 'Seasonal mainstage productions, youth acting workshops, and technical theater internships.',
        howToHelp: 'Open auditions for all ages; donations support costume and set design.',
        website: 'waxhawcommunitytheatre.com'
    },
    {
        name: 'Heart for Monroe',
        category: 'Human Services',
        description: 'Supporting families and individuals in need with various community services.',
        contact: 'info@heartformonroe.org',
        detailedInfo: 'A massive network of non-profits and churches that addresses homelessness, hunger, and education gaps across the county, including the Waxhaw area.',
        keyPrograms: 'School supply drives, "Bed Build" events for children, and local disaster relief.',
        howToHelp: 'Join the "Village" to mentor students or provide weekend food bags.',
        website: 'heartformonroe.com'
    },
    {
        name: 'Turning Point',
        category: 'Health',
        description: 'Offering mental health services and support for personal growth.',
        contact: '704-283-7233 | info@turningpointnc.org',
        detailedInfo: 'The only specialized resource in Union County for survivors of domestic violence, sexual assault, and child abuse.',
        keyPrograms: '24-hour crisis hotline, emergency shelter, and professional counseling.',
        howToHelp: 'Donate items for the shelter or volunteer for the crisis line.',
        website: 'turningpointnc.org'
    },
    {
        name: 'HealthQuest',
        category: 'Health',
        description: 'Providing comprehensive health services and wellness programs.',
        contact: '704-226-2050 | info@healthquestnc.com',
        detailedInfo: 'A free pharmacy and wellness center that provides prescription medication and health education to uninsured residents.',
        keyPrograms: 'Prescription assistance, diabetes management classes, and nutritional counseling.',
        howToHelp: 'Financial donations help purchase bulk medications at cost.',
        website: 'healthquestuc.org'
    },
    {
        name: 'Thrive Counseling',
        category: 'Health',
        description: 'Professional counseling services for mental health and well-being.',
        contact: '704-243-2615 | info@thrivecounseling.com',
        detailedInfo: 'A local private practice focused on modern, accessible mental health care for the families of Waxhaw and Weddington.',
        keyPrograms: 'Teen therapy, marriage counseling, and anxiety management workshops.',
        howToHelp: 'They offer community workshops and resources for local schools.',
        website: 'thrivewellnesstherapy.com'
    },
    {
        name: 'Cane Creek Park',
        category: 'Recreation',
        description: 'A recreational park offering trails, sports, and outdoor activities.',
        contact: '704-843-3919 | parks@waxhaw.com',
        detailedInfo: 'A 1,575-acre park surrounding a 350-acre lake. It is one of the premier outdoor spots in Union County for families.',
        keyPrograms: 'Camping, boat rentals, bank fishing, and over 15 miles of hiking/equestrian trails.',
        howToHelp: 'Participate in the annual "Clean the Lake" community events.',
        website: 'unioncountync.gov/canecreek'
    },
    {
        name: 'WCWAA',
        category: 'Arts/History',
        description: 'Waxhaw Community Wellness and Arts Association promoting arts and wellness.',
        contact: 'info@wcwaa.org',
        detailedInfo: 'While primarily known for athletics, WCWAA serves as a massive community wellness hub for Weddington and Wesley Chapel families, managing extensive park facilities.',
        keyPrograms: 'Youth Baseball, Soccer, Softball, and Football leagues; community wellness events.',
        howToHelp: 'Seasonal coaching opportunities and corporate sponsorships.',
        website: 'wcwaa.org'
    },
    {
        name: 'JAARS',
        category: 'Education',
        description: 'Focusing on aviation and educational outreach programs.',
        contact: '704-843-6000 | info@jaars.org',
        detailedInfo: 'A unique global aviation and technology center based in Waxhaw that supports Bible translation and humanitarian aid in remote areas.',
        keyPrograms: 'Museum of the Alphabet, Missions Aviation training, and "JAARS Day" community festivals.',
        howToHelp: 'Visit the campus for a tour or participate in the youth STEM programs.',
        website: 'jaars.org'
    },
    {
        name: 'SPCC',
        category: 'Human Services',
        description: 'Society for the Prevention of Cruelty to Children providing child protection services.',
        contact: '704-272-5300 | info@spcc.edu',
        detailedInfo: 'Correction for your Hub: While SPCC is an education center, they offer extensive Human Services through career coaching and GED programs for adult learners in the community.',
        keyPrograms: 'University Transfer, Workforce Development, and the Small Business Center.',
        howToHelp: 'Community members can serve as guest speakers for career paths.',
        website: 'spcc.edu'
    },
    {
        name: 'Humane Society',
        category: 'Human Services',
        description: 'Animal welfare organization offering adoption and care services.',
        contact: '704-283-9126 | info@humanesociety.org',
        detailedInfo: 'Dedicated to ending the overpopulation of unwanted animals through adoption and low-cost veterinary services.',
        keyPrograms: 'Pet Adoption, Low-cost Spay/Neuter vouchers, and the "Pet Food Pantry."',
        howToHelp: 'Foster an animal or volunteer at the "Re-Tail" thrift store.',
        website: 'hsuc.org'
    }
];

// Function to render resources
function renderResources(filteredResources) {
    const grid = document.getElementById('resourceGrid');
    grid.innerHTML = '';
    filteredResources.forEach((resource, index) => {
        const card = document.createElement('div');
        card.className = 'bg-primary p-6 rounded-lg shadow-lg border-t-4 border-accent cursor-pointer hover:shadow-xl transition-shadow text-secondary';
        card.onclick = () => openModal(resource);
        card.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${resource.name}</h3>
            <p class="text-sm text-secondary mb-2">${resource.category}</p>
            <p class="mb-4">${resource.description}</p>
            <p class="text-sm"><strong>Contact:</strong> ${resource.contact}</p>
        `;
        grid.appendChild(card);
    });
}

// Initial render
renderResources(resources);

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = resources.filter(resource =>
        resource.name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.category.toLowerCase().includes(query)
    );
    renderResources(filtered);
});

// Filter functionality
function filterResources(category) {
    let filtered;
    if (category === 'all') {
        filtered = resources;
    } else {
        const categoryMap = {
            'human': 'Human Services',
            'health': 'Health',
            'arts': 'Arts/History',
            'recreation': 'Recreation',
            'education': 'Education'
        };
        filtered = resources.filter(resource => resource.category === categoryMap[category]);
    }
    renderResources(filtered);
}

// Form validation and submission - handled by Formspree
// Removed local validation to allow Formspree submission

// Modal functions
function openModal(resource) {
    document.getElementById('modalTitle').textContent = resource.name;
    document.getElementById('modalCategory').textContent = resource.category;
    document.getElementById('modalDescription').textContent = resource.description;
    document.getElementById('modalDetailedInfo').textContent = resource.detailedInfo;
    document.getElementById('modalKeyPrograms').textContent = resource.keyPrograms;
    document.getElementById('modalHowToHelp').textContent = resource.howToHelp;
    document.getElementById('modalContact').textContent = resource.contact;
    const websiteBtn = document.getElementById('modalWebsiteBtn');
    websiteBtn.onclick = () => window.open(`https://${resource.website}`, '_blank');
    document.getElementById('resourceModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('resourceModal').classList.add('hidden');
}

// Close modal on outside click
document.getElementById('resourceModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Chatbot functions
function toggleChat() {
    const window = document.getElementById('chatbot-window');
    window.classList.toggle('hidden');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;
    addMessage('user', message);
    input.value = '';
    const response = getBotResponse(message);
    setTimeout(() => addMessage('bot', response), 500);
}

function addMessage(sender, text) {
    const messages = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'mb-2';
    if (sender === 'user') {
        div.innerHTML = `<p class="bg-accent text-primary p-2 rounded ml-8">${text}</p>`;
    } else {
        div.innerHTML = `<p class="bg-gray-200 p-2 rounded mr-8">${text}</p>`;
    }
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(message) {
    const lower = message.toLowerCase();
    if (lower.includes('food') || lower.includes('hunger') || lower.includes('pantry')) {
        return "For food assistance, check out Common Heart: They have mobile food pantries and 'The Cupboard' food pantry. Visit commonheart.org for more info.";
    }
    if (lower.includes('history') || lower.includes('museum')) {
        return "Learn about local history at the Museum of the Waxhaws, featuring exhibits on Andrew Jackson and Scotch-Irish settlement. Website: museumofthewaxhaws.org";
    }
    if (lower.includes('theatre') || lower.includes('arts')) {
        return "Enjoy theatrical performances at Waxhaw Community Theatre. They have seasonal productions and youth workshops. Check waxhawcommunitytheatre.com";
    }
    if (lower.includes('health') || lower.includes('mental')) {
        return "For health services, consider Turning Point for domestic violence support, HealthQuest for prescriptions, or Thrive Counseling for mental health. See the directory for contacts.";
    }
    if (lower.includes('park') || lower.includes('outdoor')) {
        return "Visit Cane Creek Park for hiking, boating, and camping. It's a great spot for outdoor activities. More at unioncountync.gov/canecreek";
    }
    if (lower.includes('education') || lower.includes('school')) {
        return "For education, JAARS offers STEM programs and tours, and SPCC provides career coaching and GED programs. Visit jaars.org or spcc.edu";
    }
    if (lower.includes('day out') || lower.includes('plan') || lower.includes('event')) {
        return "For planning a day out, check the Community Calendar: Autumn Treasures festival on Oct 15, Christmas Parade on Dec 5, or Jammin' by the Tracks on June 20. Also, visit Cane Creek Park for outdoor fun!";
    }
    if (lower.includes('animal') || lower.includes('pet')) {
        return "For animal services, the Humane Society offers adoptions and low-cost vet care. Website: hsuc.org";
    }
    if (lower.includes('human services') || lower.includes('help')) {
        return "Human services include Common Heart for food, Heart for Monroe for family support, and SPCC for child protection. See the directory for more.";
    }
    return "I'm here to help with community resources and planning. Try asking about food, health, parks, events, or specific categories!";
}