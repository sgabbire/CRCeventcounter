// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#64ffda'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#64ffda',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Actual events data
const events = [
    {
        title: "Digital Forensics of Deep Fakes: From Research to Practice",
        date: "2024-11-12",
        description: "Exploring the latest techniques in detecting and analyzing deep fake content.",
        link: "events/digital-forensics-deep-fakes.html",
        speakers: ["speakers/michael-chen.jpg", "speakers/amanda-rodriguez.jpg", "speakers/david-kumar.jpg"]
    },
    {
        title: "AI EXECUTIVE ORDER SERIES: Privacy Considerations",
        date: "2024-12-05",
        description: "Analysis of privacy implications in the Executive Order on AI Development.",
        link: "events/ai-privacy-considerations.html",
        speakers: ["speakers/privacy-expert1.jpg", "speakers/privacy-expert2.jpg"]
    },
    {
        title: "AI and INNOVATION SERIES: AI and Workforce",
        date: "2025-02-11",
        description: "Examining the impact of AI on the future workforce.",
        link: "events/ai-workforce.html"
    },
    {
        title: "AI EXECUTIVE ORDER SERIES: Innovation and Competition",
        date: "2024-06-20",
        description: "International considerations of the AI Executive Order.",
        link: "events/ai-innovation-competition.html"
    },
    {
        title: "Energy, Data Centers and Regulatory Sandboxes",
        date: "2024-08-22",
        description: "Exploring potential, possibilities and challenges in energy management.",
        link: "events/energy-data-centers.html"
    },
    {
        title: "AI: Redefining the Power Grid",
        date: "2024-09-10",
        description: "How AI is transforming power grid management and efficiency.",
        link: "events/ai-power-grid.html"
    },
    {
        title: "2024 Global Cybersecurity: Leadership Challenges",
        date: "2024-10-02",
        description: "Top ten challenges & best practices in global cybersecurity leadership.",
        link: "events/global-cybersecurity-2024.html"
    },
    {
        title: "AI and Local Government",
        date: "2024-05-14",
        description: "Implementation and challenges of AI in local government operations.",
        link: "events/ai-local-government.html"
    },
    {
        title: "AI EXECUTIVE ORDER SERIES: IP Rights",
        date: "2024-03-06",
        description: "Analysis of Trade Secrets, Copyrights, and Patents in AI.",
        link: "events/ai-ip-rights.html"
    },
    {
        title: "Securing the Nation's Cyberinfrastructure",
        date: "2023-11-08",
        description: "Launch of the Center for Excellence in Government Cybersecurity.",
        link: "events/securing-nations-cyberinfrastructure.html"
    }
];

// Sort events by date
const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

// Find the next upcoming event
const now = new Date();
const upcomingEvent = {
    title: "How are States and Local Governments Developing AI Policy?",
    date: "2025-02-25 15:30:00", // Updated to 2025
    description: "Join us for an insightful discussion on AI policy development at state and local government levels.",
    link: "events/upcoming-ai-state-local-gov.html"
};

// Update upcoming event section
document.getElementById('upcoming-event-title').textContent = upcomingEvent.title;
document.getElementById('upcoming-event-date').textContent = new Date(upcomingEvent.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}) + ' | 3:30 PM - 5:00 PM EST';
document.getElementById('upcoming-event-description').textContent = upcomingEvent.description;

// Countdown timer
function updateCountdown() {
    const eventDate = new Date(upcomingEvent.date);
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Populate past events
const pastEventsContainer = document.getElementById('past-events-container');
const pastEvents = sortedEvents.filter(event => new Date(event.date) < now);

pastEvents.reverse().forEach(event => {
    const eventCard = document.createElement('a');
    eventCard.href = event.link;
    eventCard.className = 'event-link';
    
    const cardContent = document.createElement('div');
    cardContent.className = 'past-event-card';
    
    // Add speaker preview div
    if (event.speakers && event.speakers.length > 0) {
        const speakerPreview = document.createElement('div');
        speakerPreview.className = 'speaker-preview';
        // Create a gradient with speaker images if multiple speakers
        if (event.speakers.length > 1) {
            const gradient = event.speakers.map((speaker, index) => {
                const percentage = (100 / event.speakers.length) * index;
                return `url(${speaker}) ${percentage}%`;
            }).join(', ');
            speakerPreview.style.backgroundImage = gradient;
        } else {
            speakerPreview.style.backgroundImage = `url(${event.speakers[0]})`;
        }
        cardContent.appendChild(speakerPreview);
    }
    
    const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = `
        <h3>${event.title}</h3>
        <p class="date">${new Date(event.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}</p>
        <p>${event.description}</p>
        <div class="glow-button">Learn More</div>
    `;
    
    cardContent.appendChild(content);
    eventCard.appendChild(cardContent);
    pastEventsContainer.appendChild(eventCard);
}); 