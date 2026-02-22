
    document.querySelectorAll('.link-all a').forEach(link => {
        link.onclick = function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        };
    });

    const allCards = document.querySelectorAll('[class$="_card"]');
    
    allCards.forEach(card => {
        card.onclick = function() {
            allCards.forEach(c => c.style.border = "none");
            this.style.border = "2px solid black";
            this.style.borderRadius = "10px";
        };
    });
