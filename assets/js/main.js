/**
 * HOME LINE — Modern Civil Engineering, Construction & Interior Design
 * Main JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. DATA & CONSTANTS
  // --------------------------------------------------------------------------
  const PRIMARY_PHONE = '+918920952451';
  const SECONDARY_PHONE = '+919220140524';
  const WHATSAPP_RAW_PHONE = '918920952451';

  // Detailed services data for the "Learn More" modal
  const SERVICES_DATA = {
    interior: {
      title: 'Interior Design',
      subtitle: 'Residential & Commercial Interior Architecture',
      description: 'Transform your home or workspace with thoughtful layouts, modern concepts, and interior design solutions tailored to your needs. At HOME LINE, we balance aesthetic elegance with functional utility to create calm, inspiring, and efficient living and working environments.',
      features: [
        'Custom Space Planning & Layout Optimization',
        'Modern False Ceiling & Architectural Lighting Concepts',
        'Modular Kitchen & Bespoke Wardrobe Planning',
        'Material, Texture & Color Palette Selection',
        'Living Room, Master Suite & Dining Styling',
        'Ergonomic Commercial & Executive Office Layouts'
      ]
    },
    renovation: {
      title: 'Renovation',
      subtitle: 'Space Modernization & Structural Upgrades',
      description: 'Refresh and improve existing residential and commercial spaces with practical renovation planning and modern design upgrades. We evaluate the existing structure, identify areas for improvement, and systematically upgrade the space for enhanced comfort, longevity, and visual appeal.',
      features: [
        'Complete Residential & Commercial Overhauls',
        'Structural Remodeling & Interior Wall Reconfiguration',
        'Modern Facade Renewal & Exterior Redesign',
        'Bathroom & Kitchen Transformation',
        'Flooring, Wall Cladding & Electrical Upgrades',
        'Waterproofing & Structural Reinforcement Solutions'
      ]
    },
    construction: {
      title: 'Construction',
      subtitle: 'Residential & Commercial Civil Engineering',
      description: 'Explore construction solutions for residential and commercial projects, with attention to planning, functionality, and structural requirements. Based in Kasganj, we execute civil construction with systematic material planning, structural integrity, and dedicated site supervision.',
      features: [
        'Custom Residential Villas & Independent Homes',
        'Commercial Showrooms & Multi-Storey Buildings',
        'Reinforced Concrete (RCC) Structural Engineering',
        'Foundation Planning & Site Earthwork Coordination',
        'Quality Masonry, Plastering & Structural Finishing',
        'Turnkey Construction from Groundbreaking to Handover'
      ]
    },
    demolition: {
      title: 'Demolition',
      subtitle: 'Safe, Controlled Structural Dismantling',
      description: 'Professional demolition service inquiries, with project requirements and appropriate safety and regulatory considerations. Whether clearing a plot for new construction or dismantling an aging structure, we focus on safety, surrounding building protection, and organized site cleanup.',
      features: [
        'Controlled Residential & Commercial Building Demolition',
        'Precision Selective Interior Demolition',
        'Safety Barrier & Dust Containment Protocols',
        'Site Clearing, Earth Leveling & Debris Handling',
        'Regulatory Compliance & Neighboring Structure Safety',
        'Readiness Preparation for Subsequent Construction'
      ]
    }
  };

  // Curated project gallery items (clearly tagged with sample placeholder badges)
  const PROJECTS_DATA = [
    {
      id: 1,
      title: 'The Solstice Residence',
      category: 'construction',
      categoryLabel: 'Construction',
      location: 'Contemporary Residential Villa',
      image: 'assets/images/projects/project-1.jpg',
      featured: true,
      description: 'A modern multi-level residential design featuring reinforced concrete cantilevers, extensive glass framing, and seamless indoor-outdoor living.'
    },
    {
      id: 2,
      title: 'Nordic Minimalist Penthouse',
      category: 'interior',
      categoryLabel: 'Interior',
      location: 'Luxury Living Space',
      image: 'assets/images/projects/project-2.jpg',
      featured: false,
      description: 'An architectural interior composition with custom oak wood paneling, hidden acoustic lighting, and bespoke furniture placement.'
    },
    {
      id: 3,
      title: 'Heritage Loft Modernization',
      category: 'renovation',
      categoryLabel: 'Renovation',
      location: 'Urban Studio Transformation',
      image: 'assets/images/projects/project-3.jpg',
      featured: false,
      description: 'Transforming a dated structural layout into an open-concept architectural studio with renewed structural steel beams and modern lighting.'
    },
    {
      id: 4,
      title: 'Apex Commercial Complex',
      category: 'construction',
      categoryLabel: 'Construction',
      location: 'Commercial Facade & Structure',
      image: 'assets/images/projects/project-4.jpg',
      featured: false,
      description: 'Multi-storey commercial building construction engineered for optimal floor loads, maximum natural illumination, and high pedestrian accessibility.'
    },
    {
      id: 5,
      title: 'The Hearth Dining Suite',
      category: 'interior',
      categoryLabel: 'Interior',
      location: 'Bespoke Dining & Kitchen Concept',
      image: 'assets/images/projects/project-5.jpg',
      featured: false,
      description: 'Thoughtfully planned kitchen and dining interior balancing stone countertops, streamlined cabinetry, and ambient lighting.'
    },
    {
      id: 6,
      title: 'Vanguard Estate Expansion',
      category: 'renovation',
      categoryLabel: 'Renovation',
      location: 'Full Exterior & Interior Renewal',
      image: 'assets/images/projects/project-6.jpg',
      featured: true,
      description: 'Comprehensive property remodeling extending usable floor square footage with modern thermal insulation and contemporary facade cladding.'
    },
    {
      id: 7,
      title: 'Lumina Executive Lounge',
      category: 'interior',
      categoryLabel: 'Interior',
      location: 'Modern Master Suite',
      image: 'assets/images/projects/project-7.jpg',
      featured: false,
      description: 'Warm, textured interior design integrating architectural cove lighting, bespoke finishes, and ergonomic comfort.'
    },
    {
      id: 8,
      title: 'Monolith Glass Pavilion',
      category: 'construction',
      categoryLabel: 'Construction',
      location: 'Architectural Concrete Pavilion',
      image: 'assets/images/projects/project-8.jpg',
      featured: false,
      description: 'Expressive exposed concrete and steel structural construction built for durability, spatial purity, and natural ventilation.'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. STICKY HEADER & SCROLL SPY
  // --------------------------------------------------------------------------
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Active navigation highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // --------------------------------------------------------------------------
  // 3. MOBILE DRAWER NAVIGATION
  // --------------------------------------------------------------------------
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu(open) {
    const isOpen = open !== undefined ? open : !mobileDrawer?.classList.contains('open');
    mobileToggle?.classList.toggle('active', isOpen);
    mobileToggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileDrawer?.classList.toggle('open', isOpen);
    drawerOverlay?.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  mobileToggle?.addEventListener('click', () => toggleMobileMenu());
  drawerOverlay?.addEventListener('click', () => toggleMobileMenu(false));

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      toggleMobileMenu(false);
    }
  });

  // --------------------------------------------------------------------------
  // 4. SMOOTH SCROLLING FOR ALL ANCHOR LINKS
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. SERVICES "LEARN MORE" MODAL
  // --------------------------------------------------------------------------
  const serviceModal = document.getElementById('serviceModal');
  const serviceModalTitle = document.getElementById('serviceModalTitle');
  const serviceModalSubtitle = document.getElementById('serviceModalSubtitle');
  const serviceModalDesc = document.getElementById('serviceModalDesc');
  const serviceModalFeatures = document.getElementById('serviceModalFeatures');
  const serviceModalCta = document.getElementById('serviceModalCta');
  const serviceModalClose = document.getElementById('serviceModalClose');

  function openServiceModal(serviceKey) {
    const data = SERVICES_DATA[serviceKey];
    if (!data || !serviceModal) return;

    if (serviceModalTitle) serviceModalTitle.textContent = data.title;
    if (serviceModalSubtitle) serviceModalSubtitle.textContent = data.subtitle;
    if (serviceModalDesc) serviceModalDesc.textContent = data.description;

    if (serviceModalFeatures) {
      serviceModalFeatures.innerHTML = data.features.map(feat => `
        <div class="service-modal-feature-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${feat}</span>
        </div>
      `).join('');
    }

    if (serviceModalCta) {
      serviceModalCta.onclick = () => {
        closeServiceModal();
        // Select the service in the contact form
        const serviceSelect = document.getElementById('inquiryService');
        if (serviceSelect) {
          serviceSelect.value = data.title;
        }
        // Scroll to contact form
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }

    serviceModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeServiceModal() {
    serviceModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  serviceModalClose?.addEventListener('click', closeServiceModal);
  serviceModal?.addEventListener('click', (e) => {
    if (e.target === serviceModal) closeServiceModal();
  });

  // Bind service card "Learn More" and "Request Quote" buttons
  document.querySelectorAll('[data-service-learn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service-learn');
      openServiceModal(serviceKey);
    });
  });

  document.querySelectorAll('[data-service-quote]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service-quote');
      const serviceSelect = document.getElementById('inquiryService');
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. PORTFOLIO FILTERING & LIGHTBOX
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.getElementById('projectsGrid');
  let currentFilter = 'all';
  let activeProjectIndex = 0;
  let filteredProjects = [...PROJECTS_DATA];

  function renderProjects(filter) {
    if (!projectsGrid) return;

    currentFilter = filter;
    filteredProjects = filter === 'all' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === filter);

    projectsGrid.innerHTML = filteredProjects.map((project, index) => {
      const isWide = project.featured ? 'featured-wide' : '';
      return `
        <article class="project-card ${isWide} fade-in-up visible" data-index="${index}" tabindex="0" role="button" aria-label="View ${project.title}">
          <img src="${project.image}" alt="${project.title} - Sample Architectural Concept" class="project-img" loading="lazy">
          <div class="project-overlay">
            <div class="project-top-meta">
              <span class="project-cat-badge">${project.categoryLabel}</span>
              <span class="project-sample-tag">Sample Concept</span>
            </div>
            <div class="project-bottom-meta">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-subtitle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent-orange);">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${project.location}
              </p>
              <div class="project-expand-indicator">
                <span>View Project Concept</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    projectsGrid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(idx);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(card.getAttribute('data-index'), 10);
          openLightbox(idx);
        }
      });
    });
  }

  // Filter button click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects('all');

  // Lightbox Modal Controls
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxLocation = document.getElementById('lightboxLocation');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  function openLightbox(index) {
    if (!filteredProjects[index] || !lightboxModal) return;
    activeProjectIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateLightboxContent() {
    const project = filteredProjects[activeProjectIndex];
    if (!project) return;
    if (lightboxImg) {
      lightboxImg.src = project.image;
      lightboxImg.alt = `${project.title} - Sample Architectural Concept`;
    }
    if (lightboxTitle) lightboxTitle.textContent = project.title;
    if (lightboxLocation) lightboxLocation.textContent = `${project.categoryLabel} • ${project.location}`;
  }

  function closeLightbox() {
    lightboxModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showNextProject() {
    if (filteredProjects.length <= 1) return;
    activeProjectIndex = (activeProjectIndex + 1) % filteredProjects.length;
    updateLightboxContent();
  }

  function showPrevProject() {
    if (filteredProjects.length <= 1) return;
    activeProjectIndex = (activeProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;
    updateLightboxContent();
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxNext?.addEventListener('click', showNextProject);
  lightboxPrev?.addEventListener('click', showPrevProject);

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextProject();
    if (e.key === 'ArrowLeft') showPrevProject();
  });

  // --------------------------------------------------------------------------
  // 7. CONTACT & INQUIRY FORM (WHATSAPP VERIFIED DISPATCH)
  // --------------------------------------------------------------------------
  const inquiryForm = document.getElementById('inquiryForm');
  const inquiryModal = document.getElementById('inquiryModal');
  const inquiryModalClose = document.getElementById('inquiryModalClose');
  const modalWhatsappLaunch = document.getElementById('modalWhatsappLaunch');
  const modalCopyBtn = document.getElementById('modalCopyBtn');
  
  // Modal Summary fields
  const sumName = document.getElementById('sumName');
  const sumPhone = document.getElementById('sumPhone');
  const sumService = document.getElementById('sumService');
  const sumLocation = document.getElementById('sumLocation');
  const sumDetails = document.getElementById('sumDetails');

  let activeWhatsAppUrl = '';
  let activeFormattedMessage = '';

  function validateInput(input, condition) {
    const group = input.closest('.form-group');
    if (!condition) {
      group?.classList.add('has-error');
      return false;
    } else {
      group?.classList.remove('has-error');
      return true;
    }
  }

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('inquiryName');
      const phoneInput = document.getElementById('inquiryPhone');
      const emailInput = document.getElementById('inquiryEmail');
      const serviceInput = document.getElementById('inquiryService');
      const locationInput = document.getElementById('inquiryLocation');
      const detailsInput = document.getElementById('inquiryDetails');

      // Validations
      const isNameValid = validateInput(nameInput, nameInput.value.trim().length >= 2);
      
      // Indian 10-digit phone regex (allowing optional +91 or 0 prefix)
      const cleanPhone = phoneInput.value.trim().replace(/\D/g, '');
      const isPhoneValid = validateInput(phoneInput, cleanPhone.length >= 10);

      const isServiceValid = validateInput(serviceInput, serviceInput.value !== '');
      const isLocationValid = validateInput(locationInput, locationInput.value.trim().length >= 2);
      const isDetailsValid = validateInput(detailsInput, detailsInput.value.trim().length >= 4);

      // Email optional but validate if provided
      let isEmailValid = true;
      if (emailInput.value.trim() !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isEmailValid = validateInput(emailInput, emailRegex.test(emailInput.value.trim()));
      }

      if (!isNameValid || !isPhoneValid || !isServiceValid || !isLocationValid || !isDetailsValid || !isEmailValid) {
        // Focus first invalid element
        const firstError = inquiryForm.querySelector('.has-error input, .has-error select, .has-error textarea');
        firstError?.focus();
        return;
      }

      // Prepare Structured Inquiry Message for WhatsApp
      const clientName = nameInput.value.trim();
      const clientPhone = phoneInput.value.trim();
      const clientEmail = emailInput.value.trim() || 'Not Provided';
      const clientService = serviceInput.value;
      const clientLocation = locationInput.value.trim();
      const clientDetails = detailsInput.value.trim();

      activeFormattedMessage = 
`*NEW INQUIRY — HOME LINE*
----------------------------------------
*Client Name:* ${clientName}
*Phone Number:* ${clientPhone}
*Email:* ${clientEmail}
*Service Required:* ${clientService}
*Project Location:* ${clientLocation}
*Project Requirements:*
${clientDetails}
----------------------------------------
_Submitted via HOME LINE Official Website_`;

      const encodedMsg = encodeURIComponent(activeFormattedMessage);
      activeWhatsAppUrl = `https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encodedMsg}`;

      // Populate Summary Modal
      if (sumName) sumName.textContent = clientName;
      if (sumPhone) sumPhone.textContent = clientPhone;
      if (sumService) sumService.textContent = clientService;
      if (sumLocation) sumLocation.textContent = clientLocation;
      if (sumDetails) sumDetails.textContent = clientDetails.length > 70 ? clientDetails.substring(0, 70) + '...' : clientDetails;

      // Show Confirmation Modal
      if (inquiryModal) {
        inquiryModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      // Immediately launch WhatsApp in a new tab
      window.open(activeWhatsAppUrl, '_blank');

      // Reset form fields
      inquiryForm.reset();
    });
  }

  modalWhatsappLaunch?.addEventListener('click', () => {
    if (activeWhatsAppUrl) {
      window.open(activeWhatsAppUrl, '_blank');
    }
  });

  modalCopyBtn?.addEventListener('click', () => {
    if (activeFormattedMessage) {
      navigator.clipboard.writeText(activeFormattedMessage).then(() => {
        const originalText = modalCopyBtn.innerHTML;
        modalCopyBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Inquiry Text Copied!
        `;
        setTimeout(() => {
          modalCopyBtn.innerHTML = originalText;
        }, 2500);
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    }
  });

  function closeInquiryModal() {
    inquiryModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  inquiryModalClose?.addEventListener('click', closeInquiryModal);
  inquiryModal?.addEventListener('click', (e) => {
    if (e.target === inquiryModal) closeInquiryModal();
  });

  // --------------------------------------------------------------------------
  // 8. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
  // --------------------------------------------------------------------------
  const animatedElements = document.querySelectorAll('.fade-in-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach(el => el.classList.add('visible'));
  }
});

