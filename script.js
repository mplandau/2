// Master Local Sports Encyclopedia Dataset
const sportsArchiveDataset = [
    {
        keys: ["lebron", "james", "lakers"],
        title: "LeBron James",
        type: "Player Profile",
        league: "NBA (Los Angeles Lakers)",
        era: "2003 - Present",
        classification: "Forward",
        venue: "Crypto.com Arena",
        logs: [
            { game: "Finals Game 7 (2016)", play: "Executes iconic full-court chase-down block on Andre Iguodala with 1:50 left on the clock." },
            { game: "vs Thunder (2023)", play: "Hits a signature turnaround fadeaway jumper to surpass Kareem Abdul-Jabbar as all-time points leader." }
        ]
    },
    {
        keys: ["deni", "avdija", "trail blazers", "blazers"],
        title: "Deni Avdija",
        type: "Player Profile",
        league: "NBA (Portland Trail Blazers)",
        era: "2020 - Present",
        classification: "Small Forward",
        venue: "Moda Center",
        logs: [
            { game: "vs Celtics (2024)", play: "Intercepts dynamic perimeter pass, executes a full fast-break drive, and finishes with a thunderous dunk." },
            { game: "vs Wizards (2025)", play: "Secures a vital contested defensive rebound and launches an accurate 80-foot outlet assist." }
        ]
    },
    {
        keys: ["jordan", "michael", "bulls"],
        title: "Michael Jordan",
        type: "Player Profile",
        league: "NBA (Chicago Bulls)",
        era: "1984 - 2003",
        classification: "Shooting Guard",
        venue: "United Center",
        logs: [
            { game: "Finals Game 6 (1998)", play: "Steals possession from Karl Malone, drives the floor, and drains a clutch 20-foot jumper with 5.2 seconds left for the title." },
            { game: "vs Celtics (1986)", play: "Erupts for a historic, record-setting 63 points in a single intense double-overtime playoff game." }
        ]
    },
    {
        keys: ["arsenal", "epl", "london", "gunners"],
        title: "Arsenal F.C.",
        type: "Professional Team",
        league: "English Premier League",
        era: "Founded 1886",
        classification: "Football Club",
        venue: "Emirates Stadium (London)",
        logs: [
            { game: "Matchday 38 (2004)", play: "Defeats Leicester City 2-1 to finalize an unprecedented 38-game completely undefeated league season." },
            { game: "FA Cup Final (2014)", play: "Aaron Ramsey strikes a spectacular extra-time volley in the 109th minute to claim the trophy cup." }
        ]
    },
    {
        keys: ["lakers", "los angeles", "purple and gold"],
        title: "Los Angeles Lakers",
        type: "Basketball Franchise",
        league: "NBA (Western Conference)",
        era: "Founded 1947",
        classification: "Team Profile",
        venue: "Crypto.com Arena",
        logs: [
            { game: "Finals Game 7 (2010)", play: "Kobe Bryant cleans up 15 crucial rebounds while Metta World Peace drops a late 3-pointer to edge out the Celtics." },
            { game: "West Finals G7 (2000)", play: "Kobe Bryant serves an iconic high-arching alley-oop pass to Shaquille O'Neal to complete a 15-point comeback." }
        ]
    }
];

// LIVE SEARCH PROCESSOR
function executeSportsSearch() {
    const rawInput = document.getElementById("globalSearch").value.toLowerCase().trim();
    const welcome = document.getElementById("welcomeMessage");
    const noResults = document.getElementById("noResults");
    const wrapper = document.getElementById("resultsWrapper");

    // Clean viewport
    wrapper.innerHTML = "";

    if (rawInput === "") {
        welcome.style.display = "block";
        noResults.style.display = "none";
        return;
    }

    // Hide the welcome instructions card
    welcome.style.display = "none";

    // Scan database
    let matchedRecords = sportsArchiveDataset.filter(item => {
        return item.keys.some(key => key.includes(rawInput)) || item.title.toLowerCase().includes(rawInput);
    });

    if (matchedRecords.length > 0) {
        noResults.style.display = "none";

        // Generate gorgeous modern cards automatically
        matchedRecords.forEach(data => {
            let cardHTML = `
                <div class="data-card">
                    <div class="card-header-banner">
                        <h2>${data.title}</h2>
                        <span class="badge-type">${data.type}</span>
                    </div>
                    <div class="card-body-metrics">
                        <div class="metric-box"><span>Affiliation / League</span><strong>${data.league}</strong></div>
                        <div class="metric-box"><span>Active Era / History</span><strong>${data.era}</strong></div>
                        <div class="metric-box"><span>Primary Role</span><strong>${data.classification}</strong></div>
                        <div class="metric-box"><span>Home Arena / Ground</span><strong>${data.venue}</strong></div>
                    </div>
                    <div class="card-history-timeline">
                        <h3>📋 Documented Play-By-Play Timeline</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th style="width: 30%;">Event Milestone</th>
                                    <th style="width: 70%;">Play Detail Logs</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.logs.map(log => `
                                    <tr>
                                        <td><strong>${log.game}</strong></td>
                                        <td>${log.play}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            wrapper.innerHTML += cardHTML;
        });
    } else {
        noResults.style.display = "block";
    }
}
