const DEFAULT_EVENTS = [
  {
    id: "holiday-gift-guide",
    name: "Pacifica Gift Guide",
    location: "West Sharp Park",
    description:
      "Explore our holiday gift guide and start planning! Skip the big boxes—shop small, shop local, and keep your holiday dollars supporting Pacifica’s community and economy.\n\n[Downtown Pacifica Holiday Gift Guide](https://pacificaseasidemerchants.com/downtown-pacifica-holiday-gift-guide/)",
    image: "https://i.postimg.cc/6pgS0DPz/downtown_pacifica_gift_guide.png",
    registrationLink: null,
    startDateTime: "2025-11-15 10:00",
    endDateTime: "2026-01-04 17:00",
    day2_startDateTime: null,
    day2_endDateTime: null,
    featured: true,
  },
  {
    id: "small-business-saturday",
    name: "Small Business Saturday",
    location: "All over Pacifica!",
    description:
      "Shop local, find unique gifts, enjoy ocean views, festive cheer, and support the heart of our community.Celebrate Small Business Saturday in Downtown Pacifica\n\n[Small Business Saturday Info](https://pacificaseasidemerchants.com/small-business-saturday/)",
    image: "https://i.postimg.cc/fRpFK6P8/small_biz_saturday.png",
    registrationLink: null,
    startDateTime: "2025-11-29 10:00",
    endDateTime: "2025-11-29 17:00",
    day2_startDateTime: null,
    day2_endDateTime: null,
    featured: true,
  },
  {
    id: "pacifica-polar-palooza",
    name: "Pacifica Polar Palooza",
    location: "Pacifica Community Center, 540 Crespi Drive",
    description:
      "Celebrate the season at Pacifica Polar Palooza with lights, caroling, Santa, Elf Market, and more — December 5th 6pm-9pm, and December 6th 10am-4pm at the Pacifica Community Center, 540 Crespi Dr.!\n\n[Community Events & Special Activities | City of Pacifica](https://www.cityofpacifica.org/departments/parks-beaches-recreation/recreation-services/community-events-special-activities)",
    image:
      "https://i.postimg.cc/RFMWbb61/Clean-Shot-2025-11-14-at-14-53-28-2x.png",
    registrationLink: null,
    startDateTime: "2025-12-05 18:00",
    endDateTime: "2025-12-05 21:00",
    day2_startDateTime: "2025-12-06 10:00",
    day2_endDateTime: "2025-12-06 16:00",
    featured: true,
  },
  {
    id: "tree-lighting",
    name: "Rockaway Beach Tree Lighting",
    location: "Rockaway Beach",
    description:
      "Experience the magic as we light up our coastal Christmas tree at Rockaway Beach! Join the community for this cherished holiday tradition with live music, hot cocoa, and festive cheer by the ocean. Watch the tree illuminate against the Pacific sunset.\n\n[Rockaway Beach Tree Lighting Info](https://business.pacificachamber.com/events/details/2025-rockaway-beach-tree-lighting-37630)",
    image: "https://i.postimg.cc/T1Q25RCF/Rockaway-Tree-2025.jpg",
    registrationLink: null,
    startDateTime: "2025-12-07 15:00",
    endDateTime: "2025-12-07 19:00",
    day2_startDateTime: null,
    day2_endDateTime: null,
    featured: true,
  },
  {
    id: "second-saturday",
    name: "Second Saturday",
    location: "West Sharp Park",
    description:
      "Join us for Second Saturdays in Downtown Pacifica! A vibrant neighborhood market with local art, food, music, and coastal charm. Shop, stroll, and celebrate community!\n\n[Second Saturdays Info](https://pacificaseasidemerchants.com/second-saturdays/)",
    image: "https://i.postimg.cc/qvSYL9Fb/second_saturday.png",
    registrationLink: null,
    startDateTime: "2025-12-13 10:00",
    endDateTime: "2025-12-13 17:00",
    day2_startDateTime: null,
    day2_endDateTime: null,
    featured: true,
  },
  {
    id: "winder-art-faire",
    name: "Winter Art Faire",
    location: "1220 Linda Mar Blvd",
    description:
      "Art Guild of Pacifica’s annual holiday art show and sale fills all three galleries at Sanchez Art Center with original artwork and handcrafted treasures.\n\nWebsite: [Winter Art Faire Info](http://www.sanchezartcenter.org/2025WinterArtFaire.html)",
    image: "https://i.postimg.cc/5y8N4BCW/WAF2025.jpg",
    registrationLink: null,
    startDateTime: "2025-12-13 11:00",
    endDateTime: "2025-12-13 17:00",
    day2_startDateTime: "2025-12-14 11:00",
    day2_endDateTime: "2025-12-14 17:00",
    featured: true,
  },
  {
    id: "merry-manor",
    name: "Merry Manor",
    location: "Manor District",
    description:
      "Join the 5th Annual Merry Manor, a **free neighborhood art walk** and social with local artists, refreshments, and small business pop-ups. Saturday, Dec. 20, 12–5 p.m.\n\nGoogle Maps: [Walking Tour Stops](https://www.google.com/mymaps/viewer?mid=1RActCvdsbT8SrgPfGhmemRueiSK5KCU&hl=en)\nInstagram: [@MerryManorPacifica](https://www.instagram.com/MerryManorPacifica) \nEmail: MerryManorPacifica@gmail.com",
    image: "https://i.postimg.cc/cJ02KQtJ/1000022246.jpg",
    registrationLink: null,
    startDateTime: "2025-12-20 12:00",
    endDateTime: "2025-12-20 15:00",
    day2_startDateTime: null,
    day2_endDateTime: null,
    featured: true,
  },
  {
    id: "pacifica-hotrodz-parade",
    name: "Pacifica Hot Rodz Lighted Christmas Car Parade",
    location: "Park Mall, 1043 Terra Nova Blvd",
    description:
      "6th Annual Christmas Cruise Saturday, December 20th 2025 Arrive at 6PM to depart at 6:30PM Park Mall, 1043 Terra Nova Blvd, Pacifica, CA Decorate your car and join us All vehicles welcome Custom trophy will be awarded to best decorated vehicle. Optional: Bring an unwrapped toy to be donated locally Follow [@pacifica_hotrodz](https://instagram.com/pacifica_hotrodz) on instagram for more information and updates.",
    image: "https://i.postimg.cc/gJPJLtqq/Pacifica-Hot-Rodz-2.jpg",
    registrationLink: null,
    startDateTime: "2025-12-20 18:00",
    endDateTime: "2025-12-20 20:00",
    day2_startDateTime: null,
    day2_endDateTime: null,
    featured: true,
  },
  {
    id: "example-individual-event",
    name: "Example Individual Event",
    location: "Oceana Healing",
    description:
      "Grief counceling walk for those going through tough times during the holidays.",
    image: null,
    registrationLink: null,
    startDateTime: "2025-11-20 18:00",
    endDateTime: "2025-11-20 20:00",
    day2_startDateTime: "2025-12-20 18:00",
    day2_endDateTime: "2025-11-20 20:00",
    featured: false,
  },
];

// Fetch and render events
async function loadEvents() {
  const eventsContainer = document.getElementById("events-container");
  const individualEventsContainer = document.getElementById(
    "individual-events-container",
  );
  const individualEventsDescription = document.getElementById(
    "individual-events-description",
  );
  const loadingElement = document.getElementById("loading");
  const noEventsElement = document.getElementById("no-events");

  try {
    let events = [];
    try {
      const response = await fetch(
        "https://pub-997d3d01e446499d89ff2518311a56fa.r2.dev/events.json",
      );
      if (!response.ok) {
        events = DEFAULT_EVENTS;
      } else {
        events = await response.json();
      }
    } catch (error) {
      console.error("Error loading events:", error);
      events = DEFAULT_EVENTS;
    }

    // Hide loading
    loadingElement.style.display = "none";

    if (events.length === 0) {
      noEventsElement.style.display = "block";
      return;
    }

    const eventsWithDates = events.map((event) => {
      const times = [];
      const now = new Date();
      const genFutureTime = (startDateTime, endDateTime) => {
        const startObj =
          startDateTime === null ? null : new Date(startDateTime);
        const endObj = endDateTime === null ? null : new Date(endDateTime);
        if (
          (startObj !== null && startObj > now) ||
          (endObj !== null && endObj > now)
        ) {
          return { start: startObj, end: endObj };
        } else {
          return null;
        }
      };
      times.push(genFutureTime(event.startDateTime, event.endDateTime));
      times.push(
        genFutureTime(event.day2_startDateTime, event.day2_endDateTime),
      );
      return { ...event, times: times.filter((time) => time !== null) };
    });
    const futureEvents = eventsWithDates.filter(
      (event) => event.times.length > 0,
    );

    // Sort events by start date
    futureEvents.sort(
      (a, b) => new Date(a.times[0].start) - new Date(b.times[0].start),
    );

    // Render events
    futureEvents.forEach((event) => {
      const card = createEventCard(event);
      if (event.featured) {
        eventsContainer.appendChild(card);
      } else {
        individualEventsDescription.classList.remove("hide");
        individualEventsContainer.appendChild(card);
      }
    });
  } catch (error) {
    console.error("Error loading events:", error);
    loadingElement.innerHTML =
      '<p style="color: #C94B4B;">Failed to load events. Please try again later.</p>';
  }
}

// Create event card element
function createEventCard(event) {
  const card = document.createElement("div");
  card.className = "event-card";
  card.setAttribute("data-event-id", event.id);

  // Format dates
  const dates = event.times
    .map(
      (time) =>
        `<div class="event-date">${formatEventDate(time.start, time.end)}</div>`,
    )
    .join("");
  const startDate = new Date(event.startDateTime);
  const endDate = event.endDateTime ? new Date(event.endDateTime) : null;
  const dateString = `<div class="event-date">${formatEventDate(startDate, endDate)}</div>`;

  // Parse markdown description
  const descriptionHtml = marked.parse(event.description);

  // Image
  let image = "";
  if (event.image !== null && event.image !== "") {
    image = `<img src="${event.image}" alt="${event.name}" class="event-image" loading="lazy">`;
  }

  // Build card HTML
  card.innerHTML = `
        ${image}
        <div class="event-content">
            ${dates}
            <h2 class="event-title">${event.name}</h2>
            <div class="event-location">${event.location}</div>
            <div class="event-description">${descriptionHtml}</div>
            ${
              event.registrationLink
                ? `<a href="${event.registrationLink}" class="event-register" target="_blank" rel="noopener noreferrer">Register Now</a>`
                : ""
            }
        </div>
    `;

  return card;
}

// Format event date and time
function formatEventDate(startDate, endDate) {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };

  const startStr = startDate.toLocaleString("en-US", options);

  if (endDate) {
    // Check if same day
    const sameDay = startDate.toDateString() === endDate.toDateString();

    if (sameDay) {
      const endTimeOptions = { hour: "numeric", minute: "2-digit" };
      const endTimeStr = endDate.toLocaleString("en-US", endTimeOptions);
      return `${startStr} - ${endTimeStr}`;
    } else {
      const endStr = endDate.toLocaleString("en-US", options);
      return `${startStr} - ${endStr}`;
    }
  }

  return startStr;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", loadEvents);
