let memes = [
  "https://i.imgflip.com/9gy2pv.jpg",
  "https://i.imgflip.com/9j3pvc.jpg",
  "https://cdn-useast1.kapwing.com/static/templates/jack-black-chicken-jockey-meme-hd-template-SaWoCmnF4VDAdFee-full.jpg",
  "https://uploads.dailydot.com/2024/09/07-chicken-nugget-roblox-man-face-life-is-roblox.gif?auto=compress&fm=gif",
  "https://i.imgflip.com/5yefe9.jpg",
  "https://powertofly.com/up/media-library/distracted-boyfriend-boss-meme-your-idea-repeated-by-a-guy-your-boss-you-when-you-said-your-idea.jpg?id=20568320&width=800&height=400&quality=90&coordinates=0%2C62%2C0%2C63",
  "https://i.imgflip.com/9r1npi.jpg",
  "https://i.ytimg.com/vi/kusr-bbFlls/sddefault.jpg",
  "https://preview.redd.it/totally-screwed-v0-ficnh81t7zjb1.jpg?width=640&crop=smart&auto=webp&s=3991f040c23bcb7b4f9953660151f6cce864215f",
  "https://pbs.twimg.com/media/B88tG-DIgAMM7cL.jpg",
  "https://pbs.twimg.com/media/EPdEHJFXUAAo-k2.jpg:large",
  "https://i.ytimg.com/vi/z23iba8Cl2s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBBnNZYaVbSwrzas-losqXRp5mdzA",
  "https://preview.redd.it/pm3kzw9ph3841.jpg?width=640&crop=smart&auto=webp&s=facc37307a4fdab7b977949529dbce9e4ab22efc",
  "https://i.redd.it/v6l9ycu1ky671.jpg",
  "https://i.ytimg.com/vi/Dx6RK_RDFzQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAajcA_lAzThbulaE7zJX9cYQVSXg",
  "https://i.pinimg.com/736x/24/cd/dd/24cddd652a269a04031d1003107ba73b.jpg",
  "https://caniphish.com/Supporting/Memes/zoom-meeting-start.png",
  "https://i.ytimg.com/vi/tsimd6m57Ys/maxresdefault.jpg",
  "https://preview.redd.it/thing-plays-more-like-hulk-then-actual-hulk-v0-nr0t5ctu2zje1.png?width=599&format=png&auto=webp&s=7c327efd2df11875538ce1ce3fd2155c7a65d560",
  "https://i.ytimg.com/vi/WyXkjYeX0LE/sddefault.jpg",
];

let quotes = [
  "Napoleon before invading Russia Napoleon After",
  "New game website is discovered schools: I have played these games before!",
  "Chicken Jockeyyy",
  "Life Is Roblox",
  "Me: *puts on hand sanitizer*A cut I never knew existed:",
  "Your idea repeated by a guy Your Boss You when you said your idea",
  "Celebrities going to space seeing us complain about egg prices",
  "Goodbye cruel world",
  "When you get to class and realize you had homework",
  'When someone says "pizza"',
  "Australia wild fires Kobe Death 2020 Corona WW3",
  "Sonny Hayes to Replace Sergio Perez",
  "The gym on January 1",
  "time traveler: moves a chair the timeline:",
  "Oscar. You sicko",
  "Me: *gets better exam results than my dad* My dad:",
  "How every zoom meeting starts Can you hear me? Hello?",
  "I wouldn't even invite u to my bday party",
  "I respect your opinion, but here's the thing...",
  "Ain't that fantastic",
];

function search(input) {
  let pattern = new RegExp(input, "i");
  if (input.match(/.?gif|.?jpe?g|.?png/i)) {
    let indexes = memes
      .map((meme, index) => ({ value: meme, index }))
      .filter((item) => pattern.test(item.value))
      .map((item) => item.index);

    return indexes.map(index => memes[index]);

  } else if (input.match(/\w+/)) {
    let indexes = quotes
      .map((quote, index) => ({ value: quote, index }))
      .filter((item) => pattern.test(item.value))
      .map((item) => item.index);

    return indexes.map(index => memes[index]);
  }
}

// Display all memes initially
function displayMemes(memesToShow = memes) {
  let html = '';
  if (memesToShow.length === 0) {
    html = '<div class="no-results">No memes found for your search.</div>';
  } else {
    memesToShow.forEach(function(url, index) {
      html += `<div class="meme-item">
                <img src="${url}" alt="Meme ${index + 1}" loading="lazy">
               </div>`;
    });
  }
  $('.meme-display').html(html);
}

$(document).ready(function() {
  // Display all memes when page loads
  displayMemes();
  
  // Handle search button click
  $('#search-button').click(function() {
    performSearch();
  });

  // Handle real-time search as user types
  $('#search').on('input', function() {
    const searchTerm = $(this).val().trim();
    if (searchTerm === '') {
      displayMemes(); // Show all memes if search is empty
    } else {
      performSearch();
    }
  });

  function performSearch() {
    const searchTerm = $('#search').val().trim();
    
    if (searchTerm === '') {
      displayMemes();
      return;
    }

    const results = search(searchTerm);
    displayMemes(results);
  }
});