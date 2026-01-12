// ============================================
// BASIC INTERACTIVITY (Placeholder for future API integration)
// ============================================

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const modalClose = document.getElementById('modalClose');
const loginForm = document.getElementById('loginForm');
const userPanel = document.getElementById('userPanel');
const logoutBtn = document.getElementById('logoutBtn');
const userDisplayName = document.getElementById('userDisplayName');

// Modal functionality
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('active');
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });
}

// Close modal when clicking outside
if (loginModal) {
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });
}

// Login form submission (placeholder - will integrate with Iterable API later)
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const userId = document.getElementById('userId').value;
        
        // TODO: Integrate with Iterable API for authentication
        // For now, just show the user panel
        console.log('Login attempt:', { email, userId });
        
        // Simulate successful login
        userDisplayName.textContent = email || userId;
        userPanel.style.display = 'block';
        loginModal.classList.remove('active');
        
        // Update navigation
        if (loginBtn) {
            loginBtn.style.display = 'none';
        }
    });
}

// Logout functionality
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        // TODO: Clear Iterable session/tokens
        userPanel.style.display = 'none';
        if (loginBtn) {
            loginBtn.style.display = 'inline-block';
        }
        loginForm.reset();
    });
}

// CTA button handlers (placeholder)
const ctaButtons = document.querySelectorAll('#ctaPrimary, #ctaSecondary, #ctaBottom');
ctaButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            // TODO: Track custom events to Iterable
            console.log('CTA clicked:', btn.id);
            // For now, open login modal
            if (loginModal) {
                loginModal.classList.add('active');
            }
        });
    }
});

// Event trigger button (placeholder)
const triggerEventBtn = document.getElementById('triggerEventBtn');
if (triggerEventBtn) {
    triggerEventBtn.addEventListener('click', () => {
        // TODO: Trigger custom event to Iterable API
        console.log('Trigger custom event');
        alert('Custom event trigger - API integration coming soon!');
    });
}

// Update profile button (placeholder)
const updateProfileBtn = document.getElementById('updateProfileBtn');
if (updateProfileBtn) {
    updateProfileBtn.addEventListener('click', () => {
        // TODO: Update user profile via Iterable API
        console.log('Update user profile');
        alert('Profile update - API integration coming soon!');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
