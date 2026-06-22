// --- Data Persistence and Initialization ---
const LS_POSTED_SKILLS_KEY = 'sshub_posted_skills';
const LS_BOOKING_REQUESTS_KEY = 'sshub_booking_requests';

function loadFromLS(key, defaultValue = []) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    console.error(`Error loading from localStorage key: ${key}`, e);
    return defaultValue;
  }
}

function saveToLS(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(`Error saving to localStorage key: ${key}`, e);
  }
}

// --- Hardcoded Data (Your original data) ---
const initialSkillsData = [
  // Programming
  {
    title: "Basics of Web Accessibility",
    teacher: "Asia Benjamin",
    blurb: "Learn simple HTML/CSS tricks to make your websites usable by everyone, focusing on screen readers and keyboard navigation.",
    hours: "2 hours",
    mode: "Online",
    type: "1-on-1",
    category: "programming",
    img: "assets/card-11.jpg"
  },
  {
    title: "Intro to Data Analysis with Pandas",
    teacher: "Christine Paul",
    blurb: "Get started with Python's Pandas library to clean, manipulate, and analyze small datasets. Good for beginners!",
    hours: "1.5 hours",
    mode: "Online",
    type: "Group",
    category: "programming",
    img: "assets/card-22.jpg"
  },
  {
    title: "Figma Wireframing for Non-Designers",
    teacher: "Max Rodrigo",
    blurb: "Master the fundamentals of Figma to quickly sketch out user interfaces and application flows.",
    hours: "2 hours",
    mode: "Online",
    type: "Group",
    category: "programming",
    img: "assets/card-33.jpg"
  },
  // Art
  {
    title: "Hand-Lettering with Brush Pens",
    teacher: "Danz Cort",
    blurb: "A fun, introductory class on mastering the basic strokes and flourishes of modern brush pen calligraphy.",
    hours: "1.5 hours",
    mode: "In-person",
    type: "Group",
    category: "art",
    img: "assets/card-44.jpg"
  },
  {
    title: "Phone Photography: Master Composition",
    teacher: "Emma Rex",
    blurb: "Elevate your social media photos by learning composition techniques like the rule of thirds and leading lines, all using your phone camera.",
    hours: "1.5 hours",
    mode: "In-person",
    type: "Group",
    category: "art",
    img: "assets/card-444.jpg"
  },
  {
    title: "Photoshop: Basic Retouching and Cleanup",
    teacher: "Venus Tee",
    blurb: "Learn the essential tools (Clone Stamp, Healing Brush) to quickly clean up and enhance photos for professional results.",
    hours: "1.5 hours",
    mode: "In-person",
    type: "Group",
    category: "art",
    img: "assets/card-4444.jpg"
  },
  // Cooking
  {
    title: "Bake a Cake",
    teacher: "Hannah Steve",
    blurb: "Master the art of baking a perfect cake.",
    hours: "3 hours",
    mode: "In-person",
    type: "1-on-1",
    category: "cooking",
    img: "assets/card-55.jpg"
  },
  {
    title: "Fettuccine Pasta",
    teacher: "Giovanni Pasta",
    blurb: "Learn how to make the best fettuccine pasta with the easiest recipe.",
    hours: "3 hours",
    mode: "In-person",
    type: "1-on-1",
    category: "cooking",
    img: "assets/card-555.jpg"
  },
  {
    title: "Chase a Pizza",
    teacher: "Prima Salt",
    blurb: "Bake authentic Italian Pizza from ingredients to tray.",
    hours: "3 hours",
    mode: "In-person",
    type: "1-on-1",
    category: "cooking",
    img: "assets/card-5555.jpg"
  },
  // Fitness
  {
    title: "Morning Mobility and Stretching",
    teacher: "Sam Park",
    blurb: "A gentle flow to improve joint health and flexibility, perfect for starting your day.",
    hours: "0.5 hour",
    mode: "In-person",
    type: "Group",
    category: "fitness",
    img: "assets/card-77.jpg"
  },
  {
    title: "Kettlebell Swing Fundamentals",
    teacher: "Sameul Turk",
    blurb: "Learn the correct, safe technique for the fundamental kettlebell swing to build power and endurance.",
    hours: "1 hour",
    mode: "In-person",
    type: "Group",
    category: "fitness",
    img: "assets/card-777.jpg"
  },
  {
    title: "Mind Rebuildness",
    teacher: "Sam Kites",
    blurb: "Rebuild your mental health with easy mind exercises.",
    hours: "0.5 hour",
    mode: "In-person",
    type: "Group",
    category: "fitness",
    img: "assets/card-7777.jpg"
  },
  // Languages
  {
    title: "Conversational French",
    teacher: "Beau Chase",
    blurb: "Learn French for a good conversation.",
    hours: "1.5 hour",
    mode: "Online",
    type: "Group",
    category: "languages",
    img: "assets/card-88.jpg"
  },
  {
    title: "German Speaking",
    teacher: "Friedrich Max",
    blurb: "Speak German in Germany.",
    hours: "1.5 hour",
    mode: "Online",
    type: "Group",
    category: "languages",
    img: "assets/card-888.jpg"
  },
  {
    title: "Roman for Rome",
    teacher: "Marcus  Flavius",
    blurb: "Learn Roman before you go Rome",
    hours: "1.5 hour",
    mode: "Online",
    type: "Group",
    category: "languages",
    img: "assets/card-8888.jpg"
  },
  // Music
  {
    title: "Guitar Chords (Beginner)",
    teacher: "Pam Kale",
    blurb: "A rapid-fire session to learn the 5 most important open chords you need to play hundreds of popular songs.",
    hours: "1 hour",
    mode: "In-person",
    type: "1-on-1",
    category: "music",
    img: "assets/card-66.jpg"
  },
  {
    title: "Piano Class (Beginner)",
    teacher: "Gage Brown",
    blurb: "Learn the basics of Piano and then go advanced!",
    hours: "1 hour",
    mode: "In-person",
    type: "Group",
    category: "music",
    img: "assets/card-666.jpg"
  },
  {
    title: "Reading Basic Sheet Music Rhythms",
    teacher: "Christina Powell",
    blurb: "Demystify quarter notes, half notes, and whole notes—a perfect start for any aspiring musician.",
    hours: "1 hour",
    mode: "In-person",
    type: "1-on-1",
    category: "music",
    img: "assets/card-6666.jpg"
  },
];

// --- Combined Data (Hardcoded + User-Posted) ---
let userPostedSkills = loadFromLS(LS_POSTED_SKILLS_KEY);
let skillsData = initialSkillsData.concat(userPostedSkills);

// state
let showAll = false;
let activeCategory = "all";
let searchText = "";

// elements
const grid = document.getElementById("cardGrid");
const chipRow = document.getElementById("chipRow");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const viewAllLink = document.getElementById("viewAllLink");
const yearSpan = document.getElementById("year");

// modal elements
const modal = document.getElementById("bookingModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCancelBtn = document.getElementById("modalCancelBtn");
const bookingForm = document.getElementById("bookingForm");
const formContainer = document.getElementById("bookingFormContainer");
const successMessage = document.getElementById("successMessage");
const modalSkillTitle = document.getElementById("modalSkillTitle");
const modalSkillTeacher = document.getElementById("modalSkillTeacher");

// Skill Posting Elements
const teachSkillLink = document.getElementById("teachSkillLink");
const postSkillModal = document.getElementById("postSkillModal");
const postSkillForm = document.getElementById("postSkillForm");
const postModalCloseBtn = document.getElementById("postModalCloseBtn");
const postModalCancelBtn = document.getElementById("postModalCancelBtn");
const teachSkillLink2 = document.getElementById("teachSkillLink2"); // NEW: For the CTA card button

// Skill Removal Elements
const removeSkillLink = document.getElementById("removeSkillLink");
const removeSkillModal = document.getElementById("removeSkillModal");
const removeSkillForm = document.getElementById("removeSkillForm");
const removeModalCloseBtn = document.getElementById("removeModalCloseBtn");
const removeModalCancelBtn = document.getElementById("removeModalCancelBtn");
const removeSkillSelect = document.getElementById("removeSkillSelect");

// Activity Card Elements
const bookingsList = document.getElementById("bookingsList");
const noBookingsMessage = document.getElementById("noBookingsMessage");

// NEW: Guidelines Modal Elements
const guidelinesLink = document.getElementById("guidelinesLink");
const guidelinesModal = document.getElementById("guidelinesModal");
const guidelinesModalCloseBtn = document.getElementById("guidelinesModalCloseBtn");


// init
yearSpan.textContent = new Date().getFullYear();
renderChips();
renderCards();
renderBookings();


// --- 2. Skill Posting Logic (Teacher Functionality) ---

// Open the new skill posting modal from Nav Link
if (teachSkillLink) {
    teachSkillLink.addEventListener('click', (e) => {
        e.preventDefault();
        postSkillModal.style.display = 'flex';
        postSkillModal.setAttribute("aria-hidden", "false");
        setTimeout(() => document.getElementById("postTitle").focus(), 10);
    });
}

// Open the new skill posting modal from CTA Card Button
if (teachSkillLink2) {
    teachSkillLink2.addEventListener('click', (e) => {
        e.preventDefault();
        postSkillModal.style.display = 'flex';
        postSkillModal.setAttribute("aria-hidden", "false");
        setTimeout(() => document.getElementById("postTitle").focus(), 10);
    });
}

// Close the new skill posting modal
if (postModalCloseBtn && postModalCancelBtn) {
    postModalCloseBtn.addEventListener('click', () => {
        postSkillModal.style.display = 'none';
        postSkillModal.setAttribute("aria-hidden", "true");
    });
    postModalCancelBtn.addEventListener('click', () => {
        postSkillModal.style.display = 'none';
        postSkillModal.setAttribute("aria-hidden", "true");
    });
}

// Handle Skill Posting Form Submission
if (postSkillForm) {
    postSkillForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Use user-provided name, defaulting to a generic title if missing
        const teacherName = document.getElementById('postTeacherName').value.trim() || 'Community Teacher';

        const newSkill = {
            title: document.getElementById('postTitle').value,
            teacher: teacherName,
            blurb: document.getElementById('postBlurb').value,
            hours: document.getElementById('postHours').value,
            mode: document.getElementById('postMode').value,
            type: document.getElementById('postType').value,
            category: document.getElementById('postCategory').value.toLowerCase(),
            img: `assets/card-${Math.floor(Math.random() * 9) + 1}.jpg`, // Use a random card image for placeholder
            id: Date.now().toString(),
        };

        // 1. Save the new skill to localStorage (Simulating persistent data store)
        const currentSkills = loadFromLS(LS_POSTED_SKILLS_KEY);
        currentSkills.push(newSkill);
        saveToLS(LS_POSTED_SKILLS_KEY, currentSkills);

        // 2. Update the live list and re-render
        skillsData = initialSkillsData.concat(loadFromLS(LS_POSTED_SKILLS_KEY)); // Reload and re-concat
        renderCards();
        
        // 3. Close and notify
        alert(`✅ Skill "${newSkill.title}" posted successfully! It has been added to the list and saved locally. You can now remove it using the 'Remove a Skill' option.`);
        postSkillForm.reset();
        postSkillModal.style.display = 'none';
    });
}

// --- 3. Skill Removal Logic (Teacher Functionality) ---

function populateRemoveSkillSelect() {
    const postedSkills = loadFromLS(LS_POSTED_SKILLS_KEY);
    removeSkillSelect.innerHTML = '<option value="">-- Select Your Posted Skill --</option>';

    if (postedSkills.length === 0) {
        const option = document.createElement('option');
        option.textContent = "No skills posted yet!";
        option.disabled = true;
        removeSkillSelect.appendChild(option);
    } else {
        postedSkills.forEach(skill => {
            const option = document.createElement('option');
            // Use a unique ID or a combination of title/teacher for the value
            option.value = skill.id || `${skill.title}|${skill.teacher}`; 
            option.textContent = `${skill.title} (by ${skill.teacher})`;
            option.dataset.teacher = skill.teacher;
            removeSkillSelect.appendChild(option);
        });
    }
}

// Open the skill removal modal
if (removeSkillLink) {
    removeSkillLink.addEventListener('click', (e) => {
        e.preventDefault();
        populateRemoveSkillSelect();
        removeSkillModal.style.display = 'flex';
        removeSkillModal.setAttribute("aria-hidden", "false");
        setTimeout(() => removeSkillSelect.focus(), 10);
    });
}

// Close the skill removal modal
if (removeModalCloseBtn && removeModalCancelBtn) {
    removeModalCloseBtn.addEventListener('click', () => {
        removeSkillModal.style.display = 'none';
        removeSkillModal.setAttribute("aria-hidden", "true");
        removeSkillForm.reset();
    });
    removeModalCancelBtn.addEventListener('click', () => {
        removeSkillModal.style.display = 'none';
        removeSkillModal.setAttribute("aria-hidden", "true");
        removeSkillForm.reset();
    });
}

// Handle Skill Removal Form Submission
if (removeSkillForm) {
    removeSkillForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const selectedValue = removeSkillSelect.value;
        const teacherNameInput = document.getElementById('removeTeacherName').value.trim();
        
        if (!selectedValue) {
            alert("Please select a skill to remove.");
            return;
        }

        const selectedOption = removeSkillSelect.options[removeSkillSelect.selectedIndex];
        const postedTeacherName = selectedOption.dataset.teacher;
        const skillTitle = selectedOption.textContent.match(/(.*) \(by/)[1].trim();

        if (teacherNameInput !== postedTeacherName) {
            alert("The confirmation name does not match the teacher's name on the skill. Please try again.");
            return;
        }

        // 1. Remove the skill from localStorage
        let currentSkills = loadFromLS(LS_POSTED_SKILLS_KEY);
        // Find the index of the skill to remove (using the unique ID or the title/teacher combo)
        const indexToRemove = currentSkills.findIndex(skill => 
            skill.id === selectedValue || 
            `${skill.title}|${skill.teacher}` === selectedValue
        );

        if (indexToRemove > -1) {
            currentSkills.splice(indexToRemove, 1);
            saveToLS(LS_POSTED_SKILLS_KEY, currentSkills);

            // 2. Update the live list and re-render
            userPostedSkills = currentSkills; // Update local reference
            skillsData = initialSkillsData.concat(userPostedSkills); // Recreate combined list
            renderCards();

            // 3. Close and notify
            alert(`🗑️ Skill "${skillTitle}" by ${postedTeacherName} has been successfully removed.`);
            removeSkillForm.reset();
            removeSkillModal.style.display = 'none';
        } else {
            alert("Error: Could not find the selected skill to remove in the local data store.");
        }
    });
}

// --- 4. Search & Filter (Existing logic, retained) ---
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchText = (searchInput.value || "").trim().toLowerCase();
  activeCategory = categorySelect.value;
  setActiveChip(activeCategory);
  renderCards();
});

chipRow.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  setActiveChip(activeCategory);
  categorySelect.value = activeCategory === "all" ? "all" : activeCategory;
  renderCards();
});

viewAllLink.addEventListener("click", (e) => {
  e.preventDefault();
  showAll = !showAll;
  viewAllLink.textContent = showAll ? "Show Less ←" : "View All →";
  renderCards();
});

function setActiveChip(cat){
  chipRow.querySelectorAll(".chip").forEach(c=>{
    c.classList.toggle("active", c.dataset.cat === cat);
  });
}

function renderChips(){
  setActiveChip(activeCategory);
}

function labelFromCategory(cat){
  switch(cat){
    case "programming": return "programming";
    case "art": return "art";
    case "cooking": return "cooking";
    case "music": return "music";
    case "fitness": return "fitness";
    case "languages": return "languages";
    case "other": return "other";
    default: return cat;
  }
}

function renderCards(){
  // filter
  let list = skillsData.filter(it=>{
    const byCat = activeCategory === "all" || it.category === activeCategory;
    const byText =
      !searchText ||
      it.title.toLowerCase().includes(searchText) ||
      it.teacher.toLowerCase().includes(searchText) ||
      it.blurb.toLowerCase().includes(searchText);
    return byCat && byText;
  });

  // limit unless viewing all
  const visible = showAll ? list : list.slice(0, 6);
  grid.innerHTML = visible.map(cardTemplate).join("");

  // attach book handlers (event delegation or per-button)
  grid.querySelectorAll(".book-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const t = btn.getAttribute("data-title") || "Selected Skill";
      const w = btn.getAttribute("data-teacher") || "";
      openModal(t, w);
    });
  });
}

// --- 5. Booking List Rendering (Existing Logic) ---

function renderBookings() {
    const requests = loadFromLS(LS_BOOKING_REQUESTS_KEY);
    
    // Reverse the array to show the latest bookings first (most recent activity)
    const recentRequests = requests.reverse().slice(0, 5); // Show up to 5 most recent

    if (recentRequests.length === 0) {
        bookingsList.innerHTML = '';
        noBookingsMessage.style.display = 'block';
        return;
    }

    noBookingsMessage.style.display = 'none';
    
    const html = recentRequests.map(request => {
        // Simple function to format the timestamp for display
        const date = new Date(request.timestamp);
        const timeStr = date.toLocaleDateString(undefined, {
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
        });

        // HTML structure for a single booking item
        return `
            <li class="booking-item" title="Click for details">
                <h4>${escapeHtml(request.skillTitle)}</h4>
                <div class="details">
                    <span>${escapeHtml(request.preferredTime)}</span>
                    <span>Learner: ${escapeHtml(request.learnerName.split(' ')[0])}</span>
                </div>
            </li>
        `;
    }).join('');

    bookingsList.innerHTML = html;
    
    // Optional: Add hover/click listener for a simple alert or console log
    bookingsList.querySelectorAll('.booking-item').forEach(item => {
        item.addEventListener('click', () => {
            alert(`Booking details for: ${item.querySelector('h4').textContent} are available in the console log. The teacher will contact the learner soon!`);
        });
    });
}

/* ===== Modal logic (Booking/Messaging Simulation) ===== */
function openModal(skillTitle, teacher){
  modalSkillTitle.textContent = skillTitle;
  modalSkillTeacher.textContent = teacher ? `with ${teacher}` : "";
  formContainer.style.display = "block";
  successMessage.classList.add("hidden");
  bookingForm.reset();
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  // focus first input for accessibility
  setTimeout(()=> document.getElementById("bfName").focus(), 10);
}

function closeModal(){
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// NEW: Guidelines Modal Logic
if (guidelinesLink) {
    guidelinesLink.addEventListener('click', (e) => {
        e.preventDefault();
        guidelinesModal.style.display = 'flex';
        guidelinesModal.setAttribute("aria-hidden", "false");
    });
}
if (guidelinesModalCloseBtn) {
    guidelinesModalCloseBtn.addEventListener('click', () => {
        guidelinesModal.style.display = 'none';
        guidelinesModal.setAttribute("aria-hidden", "true");
    });
}
// END NEW: Guidelines Modal Logic

// close buttons
modalCloseBtn.addEventListener("click", closeModal);
modalCancelBtn.addEventListener("click", closeModal);

// click outside closes (UPDATED to include new modal)
window.addEventListener("click", (e)=>{
  // Only close the booking modal if it's open
  if(e.target === modal) closeModal(); 
  // Close post/remove modals if they are open
  if(e.target === postSkillModal) postSkillModal.style.display = 'none';
  if(e.target === removeSkillModal) removeSkillModal.style.display = 'none';
  if(e.target === guidelinesModal) guidelinesModal.style.display = 'none'; // ADDED
});

// ESC closes (UPDATED to include new modal)
window.addEventListener("keydown", (e)=>{
  if(e.key === "Escape"){
      if(modal.style.display === "flex") closeModal();
      else if(postSkillModal.style.display === "flex") postSkillModal.style.display = 'none';
      else if(removeSkillModal.style.display === "flex") removeSkillModal.style.display = 'none';
      else if(guidelinesModal.style.display === "flex") guidelinesModal.style.display = 'none'; // ADDED
  }
});

// submit -> success view inside modal, then auto-close
bookingForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  // basic validation (browser will also enforce 'required')
  const name = document.getElementById("bfName").value.trim();
  const email = document.getElementById("bfEmail").value.trim();
  const time = document.getElementById("bfTime").value;

  if(!name || !email || !time){
    alert("Please fill in your name, email, and a preferred time.");
    return;
  }

  // CORE CHANGE: Save the message/request to localStorage (Simulating Simple Messaging)
  const request = {
    skillTitle: modalSkillTitle.textContent,
    teacher: modalSkillTeacher.textContent.replace('with ', ''),
    learnerName: name,
    learnerEmail: email,
    preferredTime: time,
    message: document.getElementById("bfMsg").value,
    timestamp: new Date().toISOString()
  };
  
  const requests = loadFromLS(LS_BOOKING_REQUESTS_KEY);
  requests.push(request);
  saveToLS(LS_BOOKING_REQUESTS_KEY, requests);
  // Optional: check console to see the requests stored in the "simulated backend"
  console.log("All Booking Requests (Simulated Backend):", loadFromLS(LS_BOOKING_REQUESTS_KEY));
  
  // NEW: Re-render the booking list after a successful submission
  renderBookings();

  formContainer.style.display = "none";
  successMessage.classList.remove("hidden");

  setTimeout(()=> closeModal(), 2800);
});

/* Helpers (cardTemplate and escapeHtml) */
function cardTemplate(item){
  const initials = item.teacher.split(" ").map(p=>p[0]).slice(0,2).join("").toUpperCase();
  const safeImg = item.img || "assets/hero-1.jpg";
  return `
    <article class="card" role="listitem">
      <img class="thumb" src="${safeImg}" alt="${item.title}" onerror="this.src='assets/hero-1.jpg'"/>
      <div class="pad">
        <div class="teacher">
          <div class="avatar" aria-hidden="true">${initials}</div>
          <div>
            <div class="kicker">${item.teacher}</div>
            <h3>${item.title}</h3>
          </div>
        </div>
        <p class="kicker">${item.blurb}</p>
        <div class="meta">
          <span>⏱ ${item.hours}</span>
          <span>👥 ${item.type}</span>
          <span>📍 ${item.mode}</span>
          <span class="badge">${labelFromCategory(item.category)}</span>
        </div>
      </div>
      <div class="cta">
        <button class="btn solid book-btn"
                data-title="${escapeHtml(item.title)}"
                data-teacher="${escapeHtml(item.teacher)}">Book Session</button>
      </div>
    </article>
  `;
}

function escapeHtml(str=""){
  return str.replace(/[&<>"']/g, (ch) =>
    ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch])
  );
}