// ==================== PORTFOLIO DATA STRUCTURE ====================
const portfolioData = {
    profile: {
        name: 'Your Name',
        title: 'Full Stack Developer',
        about: 'Hi! I\'m a passionate developer with a keen interest in creating beautiful and functional web applications. With expertise in both frontend and backend technologies, I love turning ideas into reality.',
        phone: '+1 (555) 000-0000',
        email: 'email@example.com',
        profilePhoto: 'https://via.placeholder.com/250'
    },
    social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
    },
    skills: [],
    projects: [],
    documents: [],
    cv: null
};

// ==================== DOM ELEMENTS ====================
const settingsBtn = document.getElementById('settingsBtn');
const adminModal = document.getElementById('adminModal');
const closeBtn = document.querySelector('.close');
const profilePhoto = document.getElementById('profilePhoto');
const photoUpload = document.getElementById('photoUpload');

// ==================== LOCAL STORAGE FUNCTIONS ====================
function saveToLocalStorage() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('portfolioData');
    if (data) {
        Object.assign(portfolioData, JSON.parse(data));
    }
}

// ==================== PROFILE PHOTO UPLOAD ====================
photoUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            portfolioData.profile.profilePhoto = event.target.result;
            profilePhoto.src = event.target.result;
            saveToLocalStorage();
            showNotification('Profile photo updated successfully!');
        };
        reader.readAsDataURL(file);
    }
});

// ==================== MODAL FUNCTIONS ====================
settingsBtn.addEventListener('click', () => {
    adminModal.classList.add('active');
    loadAdminPanelData();
});

closeBtn.addEventListener('click', () => {
    adminModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === adminModal) {
        adminModal.classList.remove('active');
    }
});

// ==================== ADMIN PANEL TABS ====================
const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
adminTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        adminTabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.admin-tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        btn.classList.add('active');
        const tabName = btn.getAttribute('data-tab');
        document.getElementById(tabName + 'Tab').classList.add('active');
    });
});

// ==================== LOAD ADMIN PANEL DATA ====================
function loadAdminPanelData() {
    document.getElementById('adminName').value = portfolioData.profile.name;
    document.getElementById('adminTitle').value = portfolioData.profile.title;
    document.getElementById('adminAbout').value = portfolioData.profile.about;
    document.getElementById('adminPhone').value = portfolioData.profile.phone;
    document.getElementById('adminEmail').value = portfolioData.profile.email;
    
    document.getElementById('adminLinkedin').value = portfolioData.social.linkedin;
    document.getElementById('adminGithub').value = portfolioData.social.github;
    document.getElementById('adminTwitter').value = portfolioData.social.twitter;
    document.getElementById('adminInstagram').value = portfolioData.social.instagram;
}

// ==================== PROFILE FUNCTIONS ====================
window.saveProfile = function() {
    portfolioData.profile.name = document.getElementById('adminName').value;
    portfolioData.profile.title = document.getElementById('adminTitle').value;
    portfolioData.profile.about = document.getElementById('adminAbout').value;
    portfolioData.profile.phone = document.getElementById('adminPhone').value;
    portfolioData.profile.email = document.getElementById('adminEmail').value;
    
    saveToLocalStorage();
    updateProfileDisplay();
    showNotification('Profile updated successfully!');
};

window.saveSocialLinks = function() {
    portfolioData.social.linkedin = document.getElementById('adminLinkedin').value;
    portfolioData.social.github = document.getElementById('adminGithub').value;
    portfolioData.social.twitter = document.getElementById('adminTwitter').value;
    portfolioData.social.instagram = document.getElementById('adminInstagram').value;
    
    saveToLocalStorage();
    updateSocialLinks();
    showNotification('Social links updated successfully!');
};

// ==================== UPDATE PROFILE DISPLAY ====================
function updateProfileDisplay() {
    document.getElementById('userName').textContent = portfolioData.profile.name;
    document.getElementById('userTitle').textContent = portfolioData.profile.title;
    document.getElementById('aboutDescription').textContent = portfolioData.profile.about;
    document.getElementById('contactPhone').innerHTML = `<i class="fas fa-phone"></i> ${portfolioData.profile.phone}`;
    document.getElementById('contactEmail').innerHTML = `<i class="fas fa-envelope"></i> ${portfolioData.profile.email}`;
    profilePhoto.src = portfolioData.profile.profilePhoto;
}

// ==================== UPDATE SOCIAL LINKS ====================
function updateSocialLinks() {
    document.getElementById('linkedinLink').href = portfolioData.social.linkedin;
    document.getElementById('githubLink').href = portfolioData.social.github;
    document.getElementById('twitterLink').href = portfolioData.social.twitter;
    document.getElementById('instagramLink').href = portfolioData.social.instagram;
}

// ==================== SKILL MANAGEMENT ====================
window.addSkill = function() {
    const name = document.getElementById('skillName').value;
    const level = document.getElementById('skillLevel').value;
    const category = document.getElementById('skillCategory').value;
    
    if (!name.trim()) {
        showNotification('Please enter a skill name', 'error');
        return;
    }
    
    const skill = {
        id: Date.now(),
        name,
        level: parseInt(level),
        category
    };
    
    portfolioData.skills.push(skill);
    saveToLocalStorage();
    renderSkills();
    
    document.getElementById('skillForm').reset();
    document.getElementById('skillLevelValue').textContent = '70%';
    showNotification('Skill added successfully!');
};

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';
    
    portfolioData.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-category">${skill.category}</span>
            </div>
            <div class="skill-level-bar">
                <div class="skill-level-fill" style="width: ${skill.level}%"></div>
            </div>
            <div class="skill-percentage">${skill.level}%</div>
            <div class="skill-actions">
                <button class="edit-btn" onclick="editSkill(${skill.id})">Edit</button>
                <button class="delete-btn" onclick="deleteSkill(${skill.id})">Delete</button>
            </div>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

window.deleteSkill = function(id) {
    portfolioData.skills = portfolioData.skills.filter(s => s.id !== id);
    saveToLocalStorage();
    renderSkills();
    showNotification('Skill deleted successfully!');
};

window.editSkill = function(id) {
    const skill = portfolioData.skills.find(s => s.id === id);
    if (skill) {
        document.getElementById('skillName').value = skill.name;
        document.getElementById('skillLevel').value = skill.level;
        document.getElementById('skillCategory').value = skill.category;
        document.getElementById('skillLevelValue').textContent = skill.level + '%';
        deleteSkill(id);
        
        const skillTab = document.querySelector('[data-tab="skill"]');
        skillTab.click();
    }
};

document.getElementById('skillLevel').addEventListener('input', function() {
    document.getElementById('skillLevelValue').textContent = this.value + '%';
});

document.getElementById('addSkillBtn').addEventListener('click', () => {
    const skillTab = document.querySelector('[data-tab="skill"]');
    skillTab.click();
    settingsBtn.click();
});

// ==================== PROJECT MANAGEMENT ====================
window.addProject = function() {
    const title = document.getElementById('projectTitle').value;
    const description = document.getElementById('projectDescription').value;
    const tech = document.getElementById('projectTech').value;
    const link = document.getElementById('projectLink').value;
    const github = document.getElementById('projectGithub').value;
    const image = document.getElementById('projectImage').value;
    
    if (!title.trim() || !description.trim()) {
        showNotification('Please fill in required fields', 'error');
        return;
    }
    
    const project = {
        id: Date.now(),
        title,
        description,
        tech,
        link,
        github,
        image: image || 'https://via.placeholder.com/400x300?text=Project+Image'
    };
    
    portfolioData.projects.push(project);
    saveToLocalStorage();
    renderProjects();
    
    document.getElementById('projectForm').reset();
    showNotification('Project added successfully!');
};

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.split(',').map(t => `<span class="tech-tag">${t.trim()}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.link ? `<a href="${project.link}" target="_blank"><i class="fas fa-globe"></i> Live Demo</a>` : ''}
                    ${project.github ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                </div>
                <div class="project-actions">
                    <button class="edit-btn" onclick="editProject(${project.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteProject(${project.id})">Delete</button>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

window.deleteProject = function(id) {
    portfolioData.projects = portfolioData.projects.filter(p => p.id !== id);
    saveToLocalStorage();
    renderProjects();
    showNotification('Project deleted successfully!');
};

window.editProject = function(id) {
    const project = portfolioData.projects.find(p => p.id === id);
    if (project) {
        document.getElementById('projectTitle').value = project.title;
        document.getElementById('projectDescription').value = project.description;
        document.getElementById('projectTech').value = project.tech;
        document.getElementById('projectLink').value = project.link;
        document.getElementById('projectGithub').value = project.github;
        document.getElementById('projectImage').value = project.image;
        deleteProject(id);
        
        const projectTab = document.querySelector('[data-tab="project"]');
        projectTab.click();
    }
};

document.getElementById('addProjectBtn').addEventListener('click', () => {
    const projectTab = document.querySelector('[data-tab="project"]');
    projectTab.click();
    settingsBtn.click();
});

// ==================== CV/RESUME MANAGEMENT ====================
document.getElementById('uploadCVBtn').addEventListener('click', () => {
    document.getElementById('cvUpload').click();
});

document.getElementById('cvUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            portfolioData.cv = {
                name: file.name,
                data: event.target.result
            };
            saveToLocalStorage();
            showNotification('CV uploaded successfully!');
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('downloadCVBtn').addEventListener('click', () => {
    if (portfolioData.cv) {
        const link = document.createElement('a');
        link.href = portfolioData.cv.data;
        link.download = portfolioData.cv.name;
        link.click();
    } else {
        showNotification('No CV uploaded yet', 'warning');
    }
});

// ==================== DOCUMENT MANAGEMENT ====================
document.getElementById('addDocumentBtn').addEventListener('click', () => {
    document.getElementById('documentUpload').click();
});

document.getElementById('documentUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const doc = {
                id: Date.now(),
                name: file.name,
                type: file.type,
                data: event.target.result
            };
            portfolioData.documents.push(doc);
            saveToLocalStorage();
            renderDocuments();
            showNotification('Document uploaded successfully!');
        };
        reader.readAsDataURL(file);
    }
});

function renderDocuments() {
    const documentsList = document.getElementById('documentsList');
    documentsList.innerHTML = '';
    
    if (portfolioData.documents.length === 0) {
        documentsList.innerHTML = '<p style="color: #64748b; text-align: center;">No documents uploaded yet</p>';
        return;
    }
    
    portfolioData.documents.forEach(doc => {
        const docItem = document.createElement('div');
        docItem.className = 'document-item';
        const icon = getFileIcon(doc.type);
        docItem.innerHTML = `
            <i class="${icon}"></i>
            <span class="document-item-name">${doc.name}</span>
            <div class="document-item-actions">
                <button class="download-btn" onclick="downloadDocument(${doc.id})">Download</button>
                <button class="delete-btn" onclick="deleteDocument(${doc.id})">Delete</button>
            </div>
        `;
        documentsList.appendChild(docItem);
    });
}

window.downloadDocument = function(id) {
    const doc = portfolioData.documents.find(d => d.id === id);
    if (doc) {
        const link = document.createElement('a');
        link.href = doc.data;
        link.download = doc.name;
        link.click();
    }
};

window.deleteDocument = function(id) {
    portfolioData.documents = portfolioData.documents.filter(d => d.id !== id);
    saveToLocalStorage();
    renderDocuments();
    showNotification('Document deleted successfully!');
};

function getFileIcon(fileType) {
    if (fileType.includes('pdf')) return 'fas fa-file-pdf';
    if (fileType.includes('word') || fileType.includes('document')) return 'fas fa-file-word';
    if (fileType.includes('sheet') || fileType.includes('excel')) return 'fas fa-file-excel';
    if (fileType.includes('image')) return 'fas fa-file-image';
    return 'fas fa-file';
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#f59e0b'};
        color: white;
        border-radius: 6px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== SMOOTH SCROLLING NAVIGATION ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                updateActiveNavLink(href);
            }
        }
    });
});

function updateActiveNavLink(href) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`a[href="${href}"]`).classList.add('active');
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    if (current) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`a[href="#${current}"]`)?.classList.add('active');
    }
});

// ==================== CONTACT FORM ====================
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Message sent successfully! We\'ll get back to you soon.');
    this.reset();
});

// ==================== HAMBURGER MENU ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    navMenu.style.position = 'absolute';
    navMenu.style.top = '70px';
    navMenu.style.left = '0';
    navMenu.style.right = '0';
    navMenu.style.flexDirection = 'column';
    navMenu.style.background = 'white';
    navMenu.style.padding = '1rem';
    navMenu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    navMenu.style.zIndex = '50';
});

// ==================== INITIALIZATION ====================
function initializePortfolio() {
    loadFromLocalStorage();
    updateProfileDisplay();
    updateSocialLinks();
    renderSkills();
    renderProjects();
    renderDocuments();
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
window.addEventListener('load', initializePortfolio);