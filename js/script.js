// script.js
import tournaments from './data/tournaments.js';

// Global variables
let currentTournament = "master-toronto";
let currentTalent = "plat-chat";
let showEliminated = true;
let isGridView = true;

// DOM Elements
const playersContainer = document.getElementById('players-container');
const tournamentDropdown = document.getElementById('tournament-dropdown');
const talentButtons = document.querySelectorAll('.talent-btn');
const showEliminatedCheckbox = document.getElementById('show-eliminated');
const toggleViewButton = document.getElementById('toggle-view');
const modal = document.getElementById('player-modal');
const closeModal = document.querySelector('.close-modal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    setupEventListeners();
    
    // Initialize UI
    populateTournamentDropdown();
    updatePlayersDisplay();
});

function setupEventListeners() {
    // Tournament dropdown
    tournamentDropdown.addEventListener('change', function() {
        currentTournament = this.value;
        updatePlayersDisplay();
    });
    
    // Talent buttons
    talentButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentTalent = this.dataset.talent;
            updateActiveTalentButton();
            updatePlayersDisplay();
        });
    });
    
    // Show eliminated toggle
    showEliminatedCheckbox.addEventListener('change', function() {
        showEliminated = this.checked;
        updatePlayersDisplay();
    });
    
    // Toggle view button
    toggleViewButton.addEventListener('click', function() {
        isGridView = !isGridView;
        updateViewMode();
        updatePlayersDisplay();
    });
    
    // Modal close button
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function populateTournamentDropdown() {
    // Clear existing options
    tournamentDropdown.innerHTML = '';
    
    // Add options for each tournament
    Object.entries(tournaments).forEach(([id, tournament]) => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = `${tournament.name} ${tournament.year}`;
        tournamentDropdown.appendChild(option);
    });
    
    // Set current tournament
    tournamentDropdown.value = currentTournament;
}

function updateActiveTalentButton() {
    talentButtons.forEach(button => {
        if (button.dataset.talent === currentTalent) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function updateViewMode() {
    if (isGridView) {
        playersContainer.classList.add('grid-view');
        playersContainer.classList.remove('list-view');
        toggleViewButton.innerHTML = '<i class="fas fa-list"></i> LIST VIEW';
    } else {
        playersContainer.classList.add('list-view');
        playersContainer.classList.remove('grid-view');
        toggleViewButton.innerHTML = '<i class="fas fa-th-large"></i> GRID VIEW';
    }
}

function updatePlayersDisplay() {
    const tournament = tournaments[currentTournament];
    const rankings = tournament.rankings[currentTalent];
    const players = tournament.players;
    
    // Clear container
    playersContainer.innerHTML = '';
    
    // Sort players by current talent's ranking
    const sortedRankings = [...rankings].sort((a, b) => a.rank - b.rank);
    
    // Display players
    sortedRankings.forEach(item => {
        const player = players[item.playerId];
        if (!player) return;
        
        // Skip eliminated players if setting is off
        if (!showEliminated && player.eliminated) return;
        
        // Create player card
        const playerCard = createPlayerCard(player, item.rank);
        playersContainer.appendChild(playerCard);
    });
}

function createPlayerCard(player, rank) {
    const card = document.createElement('div');
    card.className = `player-card ${player.eliminated ? 'eliminated' : ''}`;
    card.dataset.playerId = player.id;
    
    // Add click event for modal
    card.addEventListener('click', () => showPlayerModal(player.id));
    
    // Card content
    card.innerHTML = `
        <div class="player-rank">${rank}</div>
        <div class="player-image-container">
            <img src="${player.image}" alt="${player.name}" class="player-image">
            ${player.eliminated ? '<div class="eliminated-overlay">ELIMINATED</div>' : ''}
        </div>
        <div class="player-info">
            <h3 class="player-name">${player.name}</h3>
            <p class="player-team">${player.team}</p>
            <div class="player-stats">
                <div class="stat">
                    <span class="stat-label">RATING</span>
                    <span class="stat-value">${player.stats.rating}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">K/D</span>
                    <span class="stat-value">${player.stats.kd}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">KAST</span>
                    <span class="stat-value">${player.stats.kast}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">ADR</span>
                    <span class="stat-value">${player.stats.adr}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function showPlayerModal(playerId) {
    const player = tournaments[currentTournament].players[playerId];
    if (!player) return;
    
    // Calculate ranking stats across all talents
    const rankingStats = calculateRankingStats(playerId);
    
    // Update modal content
    document.getElementById('modal-player-image').src = player.image;
    document.getElementById('modal-player-name').textContent = player.name;
    document.getElementById('modal-player-team').textContent = player.team;
    document.getElementById('modal-high-rank').textContent = rankingStats.highestRank;
    document.getElementById('modal-avg-rank').textContent = rankingStats.averageRank.toFixed(1);
    document.getElementById('modal-low-rank').textContent = rankingStats.lowestRank;
    document.getElementById('modal-top5-count').textContent = rankingStats.top5Count;
    
    // Update rankings breakdown
    const rankingsList = document.getElementById('modal-rankings-list');
    rankingsList.innerHTML = '';
    
    Object.entries(tournaments[currentTournament].rankings).forEach(([talentId, rankings]) => {
        const rankingItem = rankings.find(item => item.playerId === playerId);
        if (rankingItem) {
            const itemElement = document.createElement('div');
            itemElement.className = 'ranking-item';
            itemElement.innerHTML = `
                <span class="talent-name">${formatTalentName(talentId)}</span>
                <span class="talent-rank">${rankingItem.rank}</span>
            `;
            rankingsList.appendChild(itemElement);
        }
    });
    
    // Show modal
    modal.style.display = "block";
}

function calculateRankingStats(playerId) {
    const allRankings = tournaments[currentTournament].rankings;
    const rankings = [];
    
    // Collect all rankings for this player
    Object.values(allRankings).forEach(talentRankings => {
        const playerRanking = talentRankings.find(item => item.playerId === playerId);
        if (playerRanking) {
            rankings.push(playerRanking.rank);
        }
    });
    
    // Calculate stats
    return {
        highestRank: rankings.length > 0 ? Math.min(...rankings) : 'N/A',
        lowestRank: rankings.length > 0 ? Math.max(...rankings) : 'N/A',
        averageRank: rankings.length > 0 ? rankings.reduce((a, b) => a + b, 0) / rankings.length : 0,
        top5Count: rankings.filter(rank => rank <= 5).length
    };
}

function formatTalentName(talentId) {
    // Convert kebab-case to Title Case
    return talentId.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Initialize view mode
updateViewMode();
updateActiveTalentButton();