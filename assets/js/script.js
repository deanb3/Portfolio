// JavaScript for interactive features
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add hover effect for project cards
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const allCards = document.querySelectorAll('.project');
            allCards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.7';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            const allCards = document.querySelectorAll('.project');
            allCards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });

    // Add animation for skill tags
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            skill.style.transform = 'scale(1.2)';
            setTimeout(() => {
                skill.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add dark/light mode toggle
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '🌓';
    toggleButton.className = 'theme-toggle';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    // Add dynamic year to footer
    const yearSpan = document.querySelector('.year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Add style for new interactive elements
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .theme-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        border-radius: 50%;
        border: none;
        background: #333;
        color: white;
        cursor: pointer;
        width: 40px;
        height: 40px;
        font-size: 20px;
        z-index: 1000;
        transition: transform 0.3s ease;
    }

    .theme-toggle:hover {
        transform: rotate(180deg);
    }

    .light-mode {
        background-color: #f0f0f0;
        color: #121212;
    }

    .light-mode .project {
        background: white;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .light-mode .skills {
        background: #f5f5f5;
    }

    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    body.loaded {
        opacity: 1;
    }
`;

document.head.appendChild(style);
