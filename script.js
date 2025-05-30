document.addEventListener('DOMContentLoaded', function () {
    const playersContainer = document.getElementById('players-container');
    const toggleViewBtn = document.getElementById('toggle-view');
    const showEliminatedCheckbox = document.getElementById('show-eliminated');
    const talentButtons = document.querySelectorAll('.talent-btn');

    let currentView = 'grid'; // Default view

    // Initial render
    renderPlayers();

    // Toggle between grid and list view
    toggleViewBtn.addEventListener('click', function () {
        if (currentView === 'grid') {
            playersContainer.classList.remove('grid-view');
            playersContainer.classList.add('list-view');
            currentView = 'list';
            toggleViewBtn.innerHTML = '<i class="fas fa-th"></i> TOGGLE GRID VIEW';
        } else {
            playersContainer.classList.remove('list-view');
            playersContainer.classList.add('grid-view');
            currentView = 'grid';
            toggleViewBtn.innerHTML = '<i class="fas fa-th-list"></i> TOGGLE LIST VIEW';
        }
    });

    // Toggle showing eliminated players
    showEliminatedCheckbox.addEventListener('change', renderPlayers);

    // Talent selection
    talentButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            talentButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Update current talent and re-render
            currentTalent = this.dataset.talent;
            renderPlayers();
        });
    });

    // Render players based on current filters
    function renderPlayers() {
        playersContainer.innerHTML = '';

        const showEliminated = showEliminatedCheckbox.checked;
        const currentPlayers = playerRankings[currentTalent];

        // Sort players by rank
        const sortedPlayers = [...currentPlayers].sort((a, b) => a.rank - b.rank);

        sortedPlayers.forEach(player => {
            if (!player.eliminated || showEliminated) {
                const playerCard = createPlayerCard(player);
                playersContainer.appendChild(playerCard);
            }
        });
    }

    // Add these variables at the top
    const modal = document.getElementById('player-modal');
    const closeModal = document.querySelector('.close-modal');

    // Add this after your createPlayerCard function
    function calculatePlayerStats(playerName) {
        const stats = {
            highest: 15,
            lowest: 1,
            average: 0,
            top5Count: 0,
            rankings: []
        };

        let total = 0;
        let count = 0;

        // Find player in all rankings
        Object.entries(playerRankings).forEach(([talent, players]) => {
            const player = players.find(p => p.name === playerName);
            if (player) {
                stats.highest = Math.min(stats.highest, player.rank);
                stats.lowest = Math.max(stats.lowest, player.rank);
                total += player.rank;
                count++;

                if (player.rank <= 5) stats.top5Count++;

                stats.rankings.push({
                    talent: talent.toUpperCase(),
                    rank: player.rank
                });
            }
        });

        stats.average = count > 0 ? (total / count).toFixed(1) : 'N/A';

        return stats;
    }

    function showPlayerModal(player) {
        const stats = calculatePlayerStats(player.name);

        // Set modal content
        document.getElementById('modal-player-name').textContent = player.name;
        document.getElementById('modal-player-team').textContent = player.team;
        document.getElementById('modal-player-image').src = player.image;
        document.getElementById('modal-high-rank').textContent = `#${stats.highest}`;
        document.getElementById('modal-avg-rank').textContent = `#${stats.average}`;
        document.getElementById('modal-low-rank').textContent = `#${stats.lowest}`;
        document.getElementById('modal-top5-count').textContent = stats.top5Count;

        // Populate rankings breakdown
        const rankingsList = document.getElementById('modal-rankings-list');
        rankingsList.innerHTML = '';

        stats.rankings.forEach(r => {
            const div = document.createElement('div');
            div.className = 'ranking-item';
            div.innerHTML = `
      <span class="ranking-name">${r.talent}</span>
      <span>#${r.rank}</span>
    `;
            rankingsList.appendChild(div);
        });

        // Show modal
        modal.style.display = 'block';
    }

    // Add event listeners
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Create a player card element
    function createPlayerCard(player) {
        const card = document.createElement('div');
        card.className = `player-card ${player.eliminated ? 'eliminated' : ''}`;
        // Add placement data if eliminated
        if (player.eliminated && player.placement) {
            card.dataset.placement = `#${player.placement}`;
        }

        // Add click handler
        card.addEventListener('click', () => {
            showPlayerModal(player);
        });
        // Add rank-specific class
        let rankClass = '';
        if (player.rank === 1) rankClass = 'rank-1';
        else if (player.rank === 2) rankClass = 'rank-2';
        else if (player.rank === 3) rankClass = 'rank-3';

        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}" class="player-image" onerror="this.src='playerImages/default.jpg'">
            <div class="player-info">
                <h2 class="player-name">${player.name}</h2>
                <p class="player-team">${player.team}</p>
                <div class="player-rank">
                    <div class="rank-badge ${rankClass}">${player.rank}</div>
                    <span>${currentTalent.toUpperCase()} Ranking</span>
                </div>
                <div class="player-stats">
                    <div class="stat">
                        <div class="stat-value">${player.stats.rating}</div>
                        <div class="stat-label">Rating</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${player.stats.kd}</div>
                        <div class="stat-label">K/D</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${player.stats.kast}</div>
                        <div class="stat-label">KAST</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${player.stats.adr}</div>
                        <div class="stat-label">ADR</div>
                    </div>
                </div>
            </div>
        `;

        return card;
    }
});