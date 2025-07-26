// Tableau de Bord - Analyse Marché Textile Tunisien - JavaScript

// Configuration des couleurs
const colors = {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#2ecc71',
    warning: '#f39c12',
    danger: '#e74c3c',
    info: '#3498db',
    light: '#ecf0f1',
    dark: '#2c3e50'
};

// Fonction pour changer de section
function showSection(sectionId) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Désactiver tous les onglets
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Afficher la section sélectionnée
    document.getElementById(sectionId).classList.add('active');
    
    // Activer l'onglet correspondant
    event.target.classList.add('active');
    
    // Initialiser les graphiques pour la section active
    setTimeout(() => {
        initializeCharts(sectionId);
    }, 100);
}

// Initialisation des graphiques selon la section
function initializeCharts(sectionId) {
    switch(sectionId) {
        case 'overview':
            createExportChart();
            break;
        case 'trends':
            createDestinationChart();
            break;
        case 'segments':
            createClientChart();
            break;
        case 'competition':
            createCompetitionChart();
            break;
        case 'employment':
            createJobsChart();
            break;
        case 'recommendations':
            createRoadmapChart();
            break;
    }
}

// Graphique évolution des exportations
function createExportChart() {
    const ctx = document.getElementById('exportChart');
    if (!ctx) return;
    
    // Détruire le graphique existant s'il existe
    if (window.exportChartInstance) {
        window.exportChartInstance.destroy();
    }
    
    // Fixer les dimensions du canvas
    ctx.width = 800;
    ctx.height = 400;
    
    window.exportChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025 (proj.)'],
            datasets: [{
                label: 'Exportations (Milliards MD)',
                data: [7.2, 8.1, 8.5, 8.8, 9.0, 9.4],
                borderColor: colors.primary,
                backgroundColor: colors.primary + '20',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Objectif 2030',
                data: [null, null, null, null, null, 12.5],
                borderColor: colors.warning,
                backgroundColor: colors.warning + '20',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Milliards MD'
                    }
                }
            }
        }
    });
}

// Graphique répartition par destination
function createDestinationChart() {
    const ctx = document.getElementById('destinationChart');
    if (!ctx) return;
    
    if (window.destinationChartInstance) {
        window.destinationChartInstance.destroy();
    }
    
    // Fixer les dimensions du canvas
    ctx.width = 800;
    ctx.height = 400;
    
    window.destinationChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['France', 'Italie', 'Allemagne', 'Belgique', 'États-Unis', 'Autres'],
            datasets: [{
                data: [35, 25, 19, 8, 5, 8],
                backgroundColor: [
                    colors.primary,
                    colors.secondary,
                    colors.info,
                    colors.success,
                    colors.warning,
                    colors.light
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// Graphique segmentation clients
function createClientChart() {
    const ctx = document.getElementById('clientChart');
    if (!ctx) return;
    
    if (window.clientChartInstance) {
        window.clientChartInstance.destroy();
    }
    
    // Fixer les dimensions du canvas
    ctx.width = 800;
    ctx.height = 400;
    
    window.clientChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Marques Internationales', 'Distributeurs', 'Franchises', 'Marché Local', 'E-commerce'],
            datasets: [{
                label: 'Part de marché (%)',
                data: [45, 30, 12, 8, 5],
                backgroundColor: [
                    colors.primary,
                    colors.secondary,
                    colors.info,
                    colors.success,
                    colors.warning
                ],
                borderColor: [
                    colors.primary,
                    colors.secondary,
                    colors.info,
                    colors.success,
                    colors.warning
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Pourcentage (%)'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 0
                    }
                }
            }
        }
    });
}

// Graphique position concurrentielle
function createCompetitionChart() {
    const ctx = document.getElementById('competitionChart');
    if (!ctx) return;
    
    if (window.competitionChartInstance) {
        window.competitionChartInstance.destroy();
    }
    
    // Fixer les dimensions du canvas
    ctx.width = 800;
    ctx.height = 400;
    
    window.competitionChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Prix', 'Qualité', 'Délais', 'Proximité', 'Innovation', 'Durabilité'],
            datasets: [{
                label: 'Tunisie',
                data: [6, 8, 9, 10, 5, 7],
                borderColor: colors.primary,
                backgroundColor: colors.primary + '30',
                borderWidth: 2
            }, {
                label: 'Chine',
                data: [10, 6, 4, 2, 8, 4],
                borderColor: colors.danger,
                backgroundColor: colors.danger + '30',
                borderWidth: 2
            }, {
                label: 'Turquie',
                data: [7, 7, 7, 8, 6, 5],
                borderColor: colors.warning,
                backgroundColor: colors.warning + '30',
                borderWidth: 2
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    ticks: {
                        stepSize: 2
                    }
                }
            }
        }
    });
}

// Graphique métiers en tension
function createJobsChart() {
    const ctx = document.getElementById('jobsChart');
    if (!ctx) return;
    
    if (window.jobsChartInstance) {
        window.jobsChartInstance.destroy();
    }
    
    // Fixer les dimensions du canvas
    ctx.width = 800;
    ctx.height = 400;
    
    window.jobsChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Piqueurs/Agents fab.',
                'Contrôleurs qualité',
                'Agents de coupe',
                'Techniciens fabrication',
                'Agents repassage',
                'Techniciens méthode',
                'Tech. contrôle qualité',
                'Mécaniciens',
                'Ingénieurs Textile',
                'Machines spéciales'
            ],
            datasets: [{
                label: 'Besoins (milliers de postes)',
                data: [24.7, 1.4, 1.3, 1.2, 1.0, 0.8, 0.6, 0.5, 0.3, 0.3],
                backgroundColor: [
                    colors.danger,
                    colors.danger,
                    colors.danger,
                    colors.warning,
                    colors.danger,
                    colors.warning,
                    colors.warning,
                    colors.warning,
                    colors.danger,
                    colors.info
                ],
                borderColor: colors.dark,
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Milliers de postes'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// Graphique feuille de route
function createRoadmapChart() {
    const ctx = document.getElementById('roadmapChart');
    if (!ctx) return;
    
    if (window.roadmapChartInstance) {
        window.roadmapChartInstance.destroy();
    }
    
    // Fixer les dimensions du canvas
    ctx.width = 800;
    ctx.height = 400;
    
    window.roadmapChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
            datasets: [{
                label: 'Formation (milliers formés)',
                data: [2, 8, 12, 15, 18, 20],
                borderColor: colors.success,
                backgroundColor: colors.success + '20',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Intégration locale (%)',
                data: [7, 10, 15, 20, 23, 25],
                borderColor: colors.info,
                backgroundColor: colors.info + '20',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Exportations (Milliards €)',
                data: [3.0, 3.5, 4.0, 4.3, 4.7, 5.0],
                borderColor: colors.primary,
                backgroundColor: colors.primary + '20',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Animation des métriques au chargement
function animateMetrics() {
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach((metric, index) => {
        setTimeout(() => {
            metric.style.transform = 'scale(1.1)';
            setTimeout(() => {
                metric.style.transform = 'scale(1)';
            }, 200);
        }, index * 100);
    });
}

// Animation des barres de progression
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, index * 200);
    });
}

// Fonction d'export PDF
function exportToPDF() {
    window.print();
}

// Fonction de recherche dans le tableau de bord
function searchDashboard(query) {
    const searchTerm = query.toLowerCase();
    const cards = document.querySelectorAll('.card, .recommendation-item');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.border = '2px solid ' + colors.warning;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Réinitialiser après 3 secondes
    setTimeout(() => {
        cards.forEach(card => {
            card.style.display = 'block';
            card.style.border = 'none';
        });
    }, 3000);
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les graphiques de la vue d'ensemble
    setTimeout(() => {
        createExportChart();
        animateMetrics();
        animateProgressBars();
    }, 500);
    
    // Ajouter des événements pour les interactions
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                this.style.backgroundColor = colors.primary + '10';
            });
            row.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '';
            });
        });
    });
    
    // Ajouter un bouton d'export PDF
    const header = document.querySelector('.header');
    const exportBtn = document.createElement('button');
    exportBtn.innerHTML = '📄 Exporter PDF';
    exportBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 10px 20px;
        background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.3s ease;
    `;
    exportBtn.addEventListener('click', exportToPDF);
    exportBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    exportBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    header.style.position = 'relative';
    header.appendChild(exportBtn);
    
    // Ajouter une barre de recherche
    const searchContainer = document.createElement('div');
    searchContainer.style.cssText = `
        text-align: center;
        margin-bottom: 20px;
    `;
    searchContainer.innerHTML = `
        <input type="text" id="searchInput" placeholder="🔍 Rechercher dans le tableau de bord..." 
               style="padding: 12px 20px; width: 300px; border: 2px solid ${colors.light}; 
                      border-radius: 25px; font-size: 14px; outline: none;">
    `;
    
    const container = document.querySelector('.container');
    container.insertBefore(searchContainer, document.querySelector('.nav-tabs'));
    
    document.getElementById('searchInput').addEventListener('input', function(e) {
        if (e.target.value.length > 2) {
            searchDashboard(e.target.value);
        }
    });
    
    console.log('🧵 Tableau de Bord Textile Tunisien initialisé avec succès!');
});

// Fonction utilitaire pour formater les nombres
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Fonction pour mettre à jour les données en temps réel (simulation)
function updateRealTimeData() {
    // Simulation de mise à jour des métriques
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        const currentValue = parseFloat(metric.textContent.replace(/[^\d.]/g, ''));
        if (!isNaN(currentValue)) {
            const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
            const newValue = currentValue * (1 + variation);
            
            if (metric.textContent.includes('K')) {
                metric.textContent = Math.round(newValue) + 'K';
            } else if (metric.textContent.includes('B')) {
                metric.textContent = newValue.toFixed(1) + 'B';
            } else if (metric.textContent.includes('%')) {
                metric.textContent = Math.round(newValue) + '%';
            }
        }
    });
}

// Mettre à jour les données toutes les 30 secondes (simulation)
setInterval(updateRealTimeData, 30000);