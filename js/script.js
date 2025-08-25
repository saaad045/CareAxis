  document.addEventListener('DOMContentLoaded', function () {
            // Initialize carousel with enhanced options
            const myCarousel = document.getElementById('heroCarousel');
            if (myCarousel) {
                const carousel = new bootstrap.Carousel(myCarousel, {
                    interval: 5000,
                    wrap: true,
                    touch: true
                });

                // Pause carousel on hover
                myCarousel.addEventListener('mouseenter', function () {
                    carousel.pause();
                });

                myCarousel.addEventListener('mouseleave', function () {
                    carousel.cycle();
                });
            }

            // Animation on scroll
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target); // prevents re-trigger
                    }
                });
            }, { threshold: 0.1 });

            animatedElements.forEach(element => observer.observe(element));

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Navbar background change on scroll
            window.addEventListener('scroll', function () {
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    if (window.scrollY > 50) {
                        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    } else {
                        navbar.style.boxShadow = 'none';
                    }
                }
            });
        });

        //about us page charts
         // Initialize charts after page load
        document.addEventListener('DOMContentLoaded', function () {
            // Revenue Chart
            const revenueCtx = document.getElementById('revenueChart').getContext('2d');
            new Chart(revenueCtx, {
                type: 'bar',
                data: {
                    labels: ['Before', 'After'],
                    datasets: [{
                        label: 'Revenue Growth',
                        data: [100, 127],
                        backgroundColor: [
                            'rgba(42, 91, 140, 0.5)',
                            'rgba(42, 91, 140, 1)'
                        ],
                        borderColor: [
                            'rgba(42, 91, 140, 1)',
                            'rgba(42, 91, 140, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            // A/R Days Chart
            const arCtx = document.getElementById('arChart').getContext('2d');
            new Chart(arCtx, {
                type: 'bar',
                data: {
                    labels: ['Before', 'After'],
                    datasets: [{
                        label: 'A/R Days Reduction',
                        data: [100, 58],
                        backgroundColor: [
                            'rgba(58, 123, 188, 0.5)',
                            'rgba(58, 123, 188, 1)'
                        ],
                        borderColor: [
                            'rgba(58, 123, 188, 1)',
                            'rgba(58, 123, 188, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            // Collection Ratio Chart
            const collectionCtx = document.getElementById('collectionChart').getContext('2d');
            new Chart(collectionCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Collections', 'Outstanding'],
                    datasets: [{
                        data: [96, 4],
                        backgroundColor: [
                            'rgba(42, 91, 140, 1)',
                            'rgba(255, 107, 107, 0.3)'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        });
        // End of charts initialization

        //navbar dropdown on hover for desktop
        document.addEventListener("DOMContentLoaded", function () {
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-link.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        const href = toggle.getAttribute('href');
        let openedOnce = false;

        if (isTouchDevice()) {
            // Tap to open, 2nd tap to navigate (Mobile)
            toggle.addEventListener('click', function (e) {
                if (!openedOnce) {
                    e.preventDefault(); // First tap: show dropdown
                    const bsDropdown = new bootstrap.Dropdown(toggle);
                    bsDropdown.show();
                    openedOnce = true;
                } else {
                    window.location.href = href; // Second tap: go to link
                }
            });

            // Close on outside tap
            document.addEventListener('click', function (event) {
                if (!dropdown.contains(event.target)) {
                    const openDropdown = bootstrap.Dropdown.getInstance(toggle);
                    if (openDropdown) {
                        openDropdown.hide();
                        openedOnce = false;
                    }
                }
            });

        } else {
            // Hover-based dropdown for desktop
            let timeout;
            dropdown.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                toggle.classList.add('show');
                menu.classList.add('show');
            });

            dropdown.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    toggle.classList.remove('show');
                    menu.classList.remove('show');
                }, 200);
            });

            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = href;
            });
        }
    });
});
// End of dropdown hover script

//Medical Coding services page
  // Initialize charts after page load
        document.addEventListener('DOMContentLoaded', function() {
            // Accuracy Chart
            const accuracyCtx = document.getElementById('accuracyChart').getContext('2d');
            new Chart(accuracyCtx, {
                type: 'bar',
                data: {
                    labels: ['Before CareAxis', '3 Months', '6 Months', 'Current'],
                    datasets: [{
                        label: 'Coding Accuracy %',
                        data: [78, 88, 93, 97],
                        backgroundColor: [
                            'rgba(130, 196, 190, 0.6)',
                            'rgba(130, 196, 190, 0.7)',
                            'rgba(130, 196, 190, 0.8)',
                            'rgba(130, 196, 190, 1)'
                        ],
                        borderColor: [
                            'rgba(130, 196, 190, 1)',
                            'rgba(130, 196, 190, 1)',
                            'rgba(130, 196, 190, 1)',
                            'rgba(130, 196, 190, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            // Denial Rate Chart
            const denialCtx = document.getElementById('denialChart').getContext('2d');
            new Chart(denialCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Denial Rate %',
                        data: [14, 13, 12, 10, 9, 8, 7, 6, 6, 5, 5, 5],
                        borderColor: 'rgba(26, 118, 210, 1)',
                        backgroundColor: 'rgba(26, 118, 210, 0.1)',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        });
        // End of charts initialization for Medical Coding services page

        //Js for VOB
                // Initialize charts after page load
        document.addEventListener('DOMContentLoaded', function() {
            // Denial Reasons Chart
            const denialCtx = document.getElementById('denialChart').getContext('2d');
            new Chart(denialCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Eligibility Issues', 'Authorization Required', 'Non-Covered Services', 'Other'],
                    datasets: [{
                        data: [45, 30, 20, 5],
                        backgroundColor: [
                            'rgba(255, 107, 107, 0.8)',
                            'rgba(26, 118, 210, 0.8)',
                            'rgba(130, 196, 190, 0.8)',
                            'rgba(108, 117, 125, 0.8)'
                        ],
                        borderColor: [
                            'rgba(255, 107, 107, 1)',
                            'rgba(26, 118, 210, 1)',
                            'rgba(130, 196, 190, 1)',
                            'rgba(108, 117, 125, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });

            // Approval Rate Chart
            const approvalCtx = document.getElementById('approvalChart').getContext('2d');
            new Chart(approvalCtx, {
                type: 'bar',
                data: {
                    labels: ['Before VOB', '3 Months', '6 Months', 'Current'],
                    datasets: [{
                        label: 'Claim Approval Rate %',
                        data: [72, 85, 92, 96],
                        backgroundColor: [
                            'rgba(130, 196, 190, 0.6)',
                            'rgba(130, 196, 190, 0.7)',
                            'rgba(130, 196, 190, 0.8)',
                            'rgba(130, 196, 190, 1)'
                        ],
                        borderColor: [
                            'rgba(130, 196, 190, 1)',
                            'rgba(130, 196, 190, 1)',
                            'rgba(130, 196, 190, 1)',
                            'rgba(130, 196, 190, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        });
        //End of VOB

        //Js for Denial Management services page
         // Interactive Denial Reasons Tabs
        document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabs = document.querySelectorAll('.reason-tab');
            const contents = document.querySelectorAll('.reason-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs and contents
                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    tab.classList.add('active');
                    
                    // Show corresponding content
                    const tabId = tab.getAttribute('data-tab');
                    document.getElementById(`${tabId}-content`).classList.add('active');
                });
            });    
        });
        // End of Denial Management services page script

        //js for Accounts Receivable Management services page
         // Interactive Analysis Tabs
        document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabs = document.querySelectorAll('.analysis-tab');
            const contents = document.querySelectorAll('.analysis-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs and contents
                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    tab.classList.add('active');
                    
                    // Show corresponding content
                    const tabId = tab.getAttribute('data-tab');
                    document.getElementById(`${tabId}-content`).classList.add('active');
                });
            });
            
            // Initialize charts
            const daysInArCtx = document.getElementById('daysInArChart').getContext('2d');
            new Chart(daysInArCtx, {
                type: 'bar',
                data: {
                    labels: ['Before CareAxis', '3 Months', '6 Months', 'Current'],
                    datasets: [{
                        label: 'Days in AR',
                        data: [52, 41, 35, 29],
                        backgroundColor: [
                            'rgba(255, 107, 107, 0.8)',
                            'rgba(255, 107, 107, 0.6)',
                            'rgba(26, 118, 210, 0.6)',
                            'rgba(26, 118, 210, 0.8)'
                        ],
                        borderColor: [
                            'rgba(255, 107, 107, 1)',
                            'rgba(255, 107, 107, 1)',
                            'rgba(26, 118, 210, 1)',
                            'rgba(26, 118, 210, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Days'
                            }
                        }
                    }
                }
            });
            
            const agingReportCtx = document.getElementById('agingReportChart').getContext('2d');
            new Chart(agingReportCtx, {
                type: 'bar',
                data: {
                    labels: ['0-30 Days', '31-60 Days', '61-90 Days', '90+ Days'],
                    datasets: [
                        {
                            label: 'Before CareAxis',
                            data: [45, 25, 18, 12],
                            backgroundColor: 'rgba(255, 107, 107, 0.6)',
                            borderColor: 'rgba(255, 107, 107, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Current',
                            data: [72, 15, 8, 5],
                            backgroundColor: 'rgba(26, 118, 210, 0.6)',
                            borderColor: 'rgba(26, 118, 210, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Percentage of AR'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
            
            const collectionRateCtx = document.getElementById('collectionRateChart').getContext('2d');
            new Chart(collectionRateCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Collection Rate %',
                        data: [88, 89, 91, 92, 93, 94, 95, 95, 96, 96, 96, 97],
                        borderColor: 'rgba(26, 118, 210, 1)',
                        backgroundColor: 'rgba(26, 118, 210, 0.1)',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 85,
                            max: 100,
                            title: {
                                display: true,
                                text: 'Collection Rate %'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
            
            const denialRateCtx = document.getElementById('denialRateChart').getContext('2d');
            new Chart(denialRateCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Denial Rate %',
                        data: [18, 16, 14, 12, 11, 9, 8, 7, 7, 6, 6, 5],
                        borderColor: 'rgba(255, 107, 107, 1)',
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            reverse: true,
                            title: {
                                display: true,
                                text: 'Denial Rate %'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        });
        // End of Accounts Receivable Management services page script

        // Back to top button
const backToTopBtn = document.getElementById('backToTopBtn');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}