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

// Sign Up form submission (placeholder - will integrate with Iterable API later)
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('signupEmail').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            interests: Array.from(document.getElementById('interests').selectedOptions).map(option => option.value),
            consentEmail: document.getElementById('consentEmail').checked,
            consentSMS: document.getElementById('consentSMS').checked,
            termsConsent: document.getElementById('termsConsent').checked
        };
        
        // TODO: Integrate with Iterable API to:
        // 1. Create/update user profile
        // 2. Track signup event
        // 3. Update subscription preferences based on consent checkboxes
        // 4. Add user to lists based on interests
        
        console.log('Sign up form submitted:', formData);
        
        // Show success message (will be replaced with actual API call)
        alert('Thank you for signing up! We\'ll be in touch soon.\n\n(API integration coming soon)');
        
        // Reset form
        signupForm.reset();
        
        // Scroll to top to show confirmation
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// CTA button handlers (placeholder)
const ctaButtons = document.querySelectorAll('#ctaPrimary, #ctaSecondary, #ctaBottom');
ctaButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            // TODO: Track custom events to Iterable
            console.log('CTA clicked:', btn.id);
            // Scroll to signup form
            const signupSection = document.getElementById('signup');
            if (signupSection) {
                signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
