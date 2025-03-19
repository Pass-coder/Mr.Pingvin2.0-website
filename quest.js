document.addEventListener("DOMContentLoaded", () => {
    const quests = [
        "Help a classmate with homework", "Pick up trash around the school", "Write a thank-you note to a teacher",
        "Share something with a friend", "Hold the door open for someone", "Say something kind to a stranger",
        "Help your parents with chores", "Volunteer in a school activity", "Listen carefully when someone speaks",
        "Respect others' opinions", "Return something you borrowed", "Encourage a classmate", "Be patient in a long queue",
        "Take responsibility for a mistake", "Give a sincere compliment", "Share your knowledge with someone",
        "Respect school property", "Follow the rules without being told", "Be honest in a tough situation",
        "Offer help to a struggling friend", "Apologize sincerely when wrong", "Spend time with a lonely classmate",
        "Give up your seat for someone", "Be polite in conversations", "Support a friend in need",
        "Think before speaking", "Help a younger student", "Respect elders", "Be mindful of your words",
        "Show gratitude daily", "Smile and greet people warmly"
    ];

    let progress = 0;
    const progressBar = document.getElementById("progress-bar");
    const questText = document.getElementById("quest-text");
    const acceptButton = document.getElementById("quest-accept");
    const doneButton = document.getElementById("quest-done");
    const badge = document.getElementById("badge");

    document.getElementById("quest-button").addEventListener("click", () => {
        const quest = quests[Math.floor(Math.random() * quests.length)];
        questText.textContent = quest;
        acceptButton.style.display = "inline-block";
        doneButton.style.display = "none";
    });

    acceptButton.addEventListener("click", () => {
        acceptButton.textContent = "Accepted";
        doneButton.style.display = "inline-block";
    });

    doneButton.addEventListener("click", () => {
        if (progress < 100) {
            progress += 10; // Increase by 10% per completed quest
            progressBar.style.width = progress + "%";
        }
        if (progress >= 100) {
            badge.style.display = "block"; // Show badge when 100% complete
        }
    });
});