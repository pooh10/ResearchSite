// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check for reduced motion preference
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Chart utility functions
function createSVG(width, height) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    return svg;
}

function scaleLinear([d0, d1], [r0, r1]) {
    const m = (r1 - r0) / (d1 - d0 || 1);
    return v => r0 + (v - d0) * m;
}

function scaleBand(categories, [r0, r1], padding = 0.2) {
    const n = categories.length;
    const width = r1 - r0;
    const step = width / (n + padding * (n + 1));
    const band = step * (1 - padding);
    const starts = categories.map((_, i) => r0 + step * padding + i * step);
    return { x: i => starts[i], bandwidth: band };
}

function niceTicks(max, count = 5) {
    const step = Math.pow(10, Math.floor(Math.log10(max / count || 1)));
    const mult = Math.ceil(max / (step * count));
    const niceMax = mult * step * count;
    return { step, max: niceMax };
}

// Chart rendering functions removed - using static SVG images instead

// Awareness chart function removed - using static SVG image instead

function renderThemes(containerId, themes) {
    // Separate themes into positive feedback and improvement suggestions
    const positiveThemes = themes.slice(0, 6); // First 6 are positive feedback
    const improvementThemes = themes.slice(6); // Last 6 are improvement suggestions
    
    // Render positive themes
    const positiveContainer = document.querySelector('#themes-positive');
    if (positiveContainer) {
        if (positiveThemes && positiveThemes.length > 0) {
            const positiveList = positiveThemes.map(theme => `
                <li>
                    <div class="quote">"${theme.quote}"</div>
                    <div class="author">— ${theme.author}</div>
                </li>
            `).join('');
            positiveContainer.innerHTML = positiveList;
        } else {
            positiveContainer.innerHTML = '<li class="no-data">No positive themes yet</li>';
        }
    }
    
    // Render improvement themes
    const improvementContainer = document.querySelector('#themes-improvements');
    if (improvementContainer) {
        if (improvementThemes && improvementThemes.length > 0) {
            const improvementList = improvementThemes.map(theme => `
                <li>
                    <div class="quote">"${theme.quote}"</div>
                    <div class="author">— ${theme.author}</div>
                </li>
            `).join('');
            improvementContainer.innerHTML = improvementList;
        } else {
            improvementContainer.innerHTML = '<li class="no-data">No improvement suggestions yet</li>';
        }
    }
}

// Animated counters
function animateCounter(element, target, duration = 800) {
    if (reduceMotion) {
        element.textContent = target;
        return;
    }

    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (target - start) * easeOut);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function setupCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-counter'), 10);
        if (!isNaN(target)) {
            animateCounter(counter, target);
        }
    });
}

function hydrateStats(studyStats) {
    if (!studyStats) return;
    
    const statElements = {
        'participants': document.querySelector('[data-counter="6"]'),
        'avg_days': document.querySelector('[data-counter="10"]'),
        'journals_logged': document.querySelector('[data-counter="23"]')
    };
    
    if (studyStats.participants && statElements.participants) {
        statElements.participants.setAttribute('data-counter', studyStats.participants);
        animateCounter(statElements.participants, studyStats.participants);
    }
    
    if (studyStats.avg_days && statElements.avg_days) {
        statElements.avg_days.setAttribute('data-counter', studyStats.avg_days);
        animateCounter(statElements.avg_days, studyStats.avg_days);
    }
    
    if (studyStats.journals_logged && statElements.journals_logged) {
        statElements.journals_logged.setAttribute('data-counter', studyStats.journals_logged);
        animateCounter(statElements.journals_logged, studyStats.journals_logged);
    }
}

// Navigation functionality
function setupNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('#nav-list');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navList.classList.toggle('open');
        });
        
        // Close mobile menu when clicking on links
        const navLinks = navList.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navList.classList.remove('open');
            });
        });
        
        // Keyboard support for nav toggle
        navToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navToggle.click();
            }
        });
    }
}

// Scrollspy functionality
function setupScrollspy() {
    const sections = document.querySelectorAll('#abstract, #about, #study, #results, #discussion, #conclusion, #app, #acknowledgments, #downloads, #references');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-40% 0px -55% 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// Back to top functionality
function setupBackToTop() {
    const toTopButton = document.querySelector('#to-top');
    const abstractSection = document.querySelector('#abstract');
    if (!toTopButton) return;
    
    function toggleToTop() {
        if (abstractSection) {
            const abstractBottom = abstractSection.offsetTop + abstractSection.offsetHeight;
            if (window.scrollY > abstractBottom) {
                toTopButton.classList.add('visible');
            } else {
                toTopButton.classList.remove('visible');
            }
        } else {
            // Fallback to original behavior if abstract section not found
            if (window.scrollY > 600) {
                toTopButton.classList.add('visible');
            } else {
                toTopButton.classList.remove('visible');
            }
        }
    }
    
    window.addEventListener('scroll', toggleToTop);
    
    toTopButton.addEventListener('click', () => {
        document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
    });
}

// Data loading
async function loadJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Validate required keys
        if (!data.participants || !data.awareness_scores || !data.qualitative_themes) {
            console.warn('Missing required data keys in JSON');
            return null;
        }
        
        return data;
    } catch (error) {
        console.error('Error loading JSON data:', error);
        return null;
    }
}

function showEmptyStates() {
    // Don't override static SVG images - let them display naturally
    const themesContainer = document.querySelector('#themes');
    if (themesContainer) {
        themesContainer.innerHTML = '<li class="no-data">No themes available</li>';
    }
}

// Footer year
function setYear() {
    const yearElement = document.querySelector('#year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Chart resize not needed for static SVG images
function setupChartResize() {
    // Static SVG images don't need resize handling
}

// Theme functionality
function setupTheme() {
    const themeToggle = document.querySelector('#theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Main initialization
async function init() {
    setupTheme();
    setYear();
    setupNav();
    setupScrollspy();
    setupBackToTop();
    setupCounters(); // Use default numbers first
    setupChartResize();
    
    const data = await loadJSON('assets/data/survey_results.json');
    if (data) {
        window.chartData = data; // Store for resize handling
        hydrateStats(data.study_stats);
        // Use static SVG images instead of dynamic charts
        
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
            renderThemes('#themes', data.qualitative_themes);
        }, 100);
    } else {
        showEmptyStates();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
