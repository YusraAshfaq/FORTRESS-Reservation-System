function goToBooking() {
    alert("Redirecting to booking page...");
    // later: window.location.href = "booking.html";
}
document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.getElementById('exploreBtn');
    const dropdownContent = document.getElementById('exploreDropdown');

    // Toggle dropdown on click for mobile devices
    exploreBtn.addEventListener('click', function(e) {
        if (window.innerWidth < 768) {
            e.preventDefault();
            dropdownContent.style.display = 
                dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('#exploreBtn')) {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    }
});

document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Only trigger if it's an internal link
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('check-date');
    const slotsContainer = document.getElementById('slots-container');
    const detailsForm = document.getElementById('details-form');
    const displayDate = document.getElementById('display-date');
    const displayTime = document.getElementById('display-time');

    // Simulated data: Imagine these come from your database
    const availableSlots = ["Morning (10:00 AM)", "Evening (07:00 PM)"];

    dateInput.addEventListener('change', function() {
        // Clear previous slots
        slotsContainer.innerHTML = '';
        
        // Show available slots with a small delay for "loading" feel
        availableSlots.forEach(slot => {
            const btn = document.createElement('div');
            btn.className = 'slot';
            btn.innerText = slot;
            
            btn.onclick = function() {
                // Highlight selected slot
                document.querySelectorAll('.slot').forEach(s => s.classList.remove('active'));
                btn.classList.add('active');
                
                // Unlock the details form
                detailsForm.classList.remove('disabled-box');
                
                // Update text
                displayDate.innerText = dateInput.value;
                displayTime.innerText = slot;
            };


document.getElementById("final-booking-form").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page refresh

    // show confirmation message
    document.getElementById("confirmation-message").style.display = "block";

    // optional: reset form
    this.reset();
});

            
            slotsContainer.appendChild(btn);
        });
    });

    // Handle final submission
    document.getElementById('final-booking-form').onsubmit = function(e) {
        e.preventDefault();
        alert("Thank you! Your request for " + displayDate.innerText + " has been sent. Our manager will contact you shortly.");
    };
});

function showSection(sectionId) {
    var sections = document.getElementsByClassName("page");

    // hide all sections
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    // show selected section
    document.getElementById(sectionId).style.display = "block";
}
