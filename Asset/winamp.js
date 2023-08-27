var html = `
<script src="https://unpkg.com/webamp@1.4.0/built/webamp.bundle.min.js"></script> 
<div style="width:40px; height:40px; position:absolute; bottom:200px; left:100px;">
	<div id="winamp-container"></div>
    <script>
const Winamp = window.Webamp;
// All configuration options are optional.
const webamp = new Webamp({
    // Optional.
    initialTracks: [
{
    metaData: {
        artist: "Musmus",
        title: "AAyurveda",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/MusMus-BGM-002.mp3",
},{
    metaData: {
        artist: "Murasato Catfood",
        title: "Beautiful Sweets",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/015.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "FM Kid's",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/2/FM Kid's MusMus.mp3",
},{
    metaData: {
        artist: "Freedom Planet 2",
        title: "Ancestral Forge",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/2/Freedom Planet 2 OST - Ancestral Forge (Stage 18 Area) (320 kbps).mp3",
},{
    metaData: {
        artist: "Freedom Planet 2",
        title: "Avian Museum",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/2/Freedom Planet 2 OST - Avian Museum (Stage 3 Area) (320 kbps).mp3",
},{
    metaData: {
        artist: "Freedom Planet 2",
        title: "City Hall",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/Freedom Planet 2 OST - City Hall.mp3",
},{
    metaData: {
        artist: "Freedom Planet 2",
        title: "Tidal Gate",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/2/Freedom Planet 2 OST -Tidal Gate (Stage 13 Area) (320 kbps).mp3",
},{
    metaData: {
        artist: "Murasato Catfood",
        title: "In the Park",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/021.mp3",
},{
    metaData: {
        artist: "Murasato Catfood",
        title: "Title 1",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/Wayback Machine-1.mp3",
},{
    metaData: {
        artist: "Murasato Catfood",
        title: "Title 2",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/Wayback Machine-2.mp3",
},{
    metaData: {
        artist: "Murasato Catfood",
        title: "Title 3",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/Wayback Machine.mp3",
},{
    metaData: {
        artist: "Murasato Catfood",
        title: "Title 4",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/014.mp3",
},{
    metaData: {
        artist: "Murasato Catfood",
        title: "Title 5",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/071.mp3",
},{
    metaData: {
        artist: "Murasato Catfood",
        title: "Title 6",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/035.mp3",
},{
    metaData: {
        artist: "Murasato Catfood",
        title: "My Style",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/070.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "Sonorously Box",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/MusMus-CT-NV-TT.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "Starry Eyed",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/MusMus-CT-NV-17.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "Stardrops",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/MusMus-CT-NV-END.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "The City Without Dawn",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/MusMus-BGM-138.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "Welcome to my Garden",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/MusMus-BGM-139.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "そしてぼくらは駆け出した",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/MusMus-BGM-154.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "アバタール",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/2/FA MusMus.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "プラスチックアドベンチャ",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/2/Bracket MusMus.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "希望の青",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/MusMus-BGM-104.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "春宵闇ニ咲ク",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/2/TN-MusMus.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "電脳漂流記",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/2/fum-MusMus.mp3",
},{
    metaData: {
        artist: "Musmus",
        title: "月面高速道",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/2/MusMus-CT-NV-56.mp3",
},{
    metaData: {
        artist: "Simon Stålenhag",
        title: "Fluvial Beat Deposits",
    },
    url: "https://steakinthedaylight.neocities.org/Asset/Music/Fluvial%20Beat%20Deposits%20-%20Ripple%20Dot%20Zero%20OST%20[38].mp3",
},
],

    initialSkin: {
        url: "https://steakinthedaylight.neocities.org/Asset/BetterThanOne_Fixed.wsz"
    },
});
webamp.renderWhenReady(document.getElementById('winamp-container'));
</script>
</div>
`;

document.write(html);